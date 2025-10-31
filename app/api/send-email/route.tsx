import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resendApiKey = process.env.RESEND_API_KEY
if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in environment variables.")
}
const resend = new Resend(resendApiKey)

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const orderData = orderSchema.parse(body)

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
          <li><strong>Order Time:</strong> ${new Date().toLocaleString()}</li>
        </ul>
        
      `,
    })

    if (error) {
      console.error("Email sending error:", error)
      return NextResponse.json({ error: "Failed to send email", details: error.message }, { status: 500 })
    }

    console.log("Email sent successfully:", data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input", details: error.errors }, { status: 400 })
    }

    console.error("Email API error:", error)
    const message = error instanceof Error ? error.message : "An unknown error occurred"
    return NextResponse.json({ error: "Internal server error", details: message }, { status: 500 })
  }
}
