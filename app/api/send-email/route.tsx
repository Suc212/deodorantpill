import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

export const runtime = "nodejs"

const resendApiKey = process.env.RESEND_API_KEY
if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in environment variables.")
}
const resend = new Resend(resendApiKey)

const googleSheetsWebhookUrl =
  process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbwFMWqKeZtDFvsA247bdu5DJzNrJvAg_DZFHkkvDf04DyvV3bV04xKLBc4UHtP5Mjst/exec"

const orderSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().min(1, "Phone number is required"),
  whatsapp: z.string().min(1, "WhatsApp number is required"),
  quantity: z.string().min(1, "Quantity is required"),
  delivery: z.string().optional(),
})

async function appendOrderToGoogleSheet(orderData: z.infer<typeof orderSchema>, orderTimeIso: string) {
  if (!googleSheetsWebhookUrl) {
    throw new Error("Google Sheets webhook URL is missing. Set GOOGLE_SHEETS_WEBHOOK_URL.")
  }

  const response = await fetch(googleSheetsWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      timestamp: orderTimeIso,
      product: "Deodorant Pill",  // NEW - hardcoded for this website
      firstName: orderData.firstName,
      lastName: orderData.lastName,
      email: orderData.email || "",
      phone: orderData.phone,
      whatsapp: orderData.whatsapp,
      address: orderData.address,
      delivery: orderData.delivery || "",
      quantity: orderData.quantity,
    
    }),
  })

  if (!response.ok) {
    const body = await response.text().catch(() => "")
    throw new Error(`Google Sheets webhook failed with status ${response.status}${body ? `: ${body}` : ""}`)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const orderData = orderSchema.parse(body)
    const orderTime = new Date()
    const orderTimeIso = orderTime.toISOString()

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["allthegoodthings14@gmail.com"], // Account owner's email due to Resend limitations
      subject: "New Deos Capsules Order Received",
      html: `
        <h2>New Order Notification</h2>
        <p><strong>Customer Details:</strong></p>
        <ul>
          <li><strong>Name:</strong> ${orderData.firstName} ${orderData.lastName}</li>
          <li><strong>Email:</strong> ${orderData.email}</li>
          <li><strong>Phone:</strong> ${orderData.phone}</li>
          <li><strong>WhatsApp:</strong> ${orderData.whatsapp}</li>
          <li><strong>Address:</strong> ${orderData.address}</li>
          <li><strong>Order Quantity:</strong> ${orderData.quantity}</li>
          <li><strong>Delivery:</strong> ${orderData.delivery}</li>
          <li><strong>Order Time:</strong> ${orderTime.toLocaleString()}</li>
        </ul>
        
      `,
    })

    if (error) {
      console.error("Email sending error:", error)
      return NextResponse.json({ error: "Failed to send email", details: error.message }, { status: 500 })
    }

    await appendOrderToGoogleSheet(orderData, orderTimeIso)

    console.log("Email sent successfully:", data)
    return NextResponse.json({ success: true, data, googleSheets: "saved" })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input", details: error.errors }, { status: 400 })
    }

    console.error("Email API error:", error)
    const message = error instanceof Error ? error.message : "An unknown error occurred"
    return NextResponse.json({ error: "Internal server error", details: message }, { status: 500 })
  }
}
