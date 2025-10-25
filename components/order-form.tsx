"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Loader2 } from "lucide-react"

export default function OrderForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "+233",
    whatsapp: "+233",
    quantity: "1-bottle-450",
    delivery: "24hrs",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save to Firestore
      await addDoc(collection(db, "orders"), {
        ...formData,
        timestamp: serverTimestamp(),
        status: "pending",
      })

      // Send email notification
      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      setSubmitted(true)
    } catch (error) {
      console.error("Error submitting order:", error)
      alert("There was an error submitting your order. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <Card className="text-center p-8">
        <CardContent className="space-y-4">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-emerald-600">Order Submitted Successfully!</h3>
          <p className="text-muted-foreground">
            Thank you for your order. We'll contact you within 24 hours to confirm delivery details.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">DEODORANT PILLS</CardTitle>
        <p className="text-sm text-muted-foreground">
          NB: Please make sure you are available within 24-48 hours of initiating this order to receive your product.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-semibold">
              Name <span className="text-red-500">*</span>
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <Input
                id="firstName"
                placeholder="First"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
                className="border-gray-300"
              />
              <Input
                id="lastName"
                placeholder="Last"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
                className="border-gray-300"
              />
            </div>
          </div>

          {/* Delivery Address */}
          <div className="space-y-2">
            <Label htmlFor="address" className="text-base font-semibold">
              Delivery Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="address"
              placeholder="Address Line 1"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              required
              className="border-gray-300"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-semibold">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="border-gray-300"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base font-semibold">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
              className="border-gray-300"
            />
          </div>

          {/* WhatsApp Number */}
          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="text-base font-semibold">
              Whatsapp Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="whatsapp"
              value={formData.whatsapp}
              onChange={(e) => handleInputChange("whatsapp", e.target.value)}
              required
              className="border-gray-300"
            />
          </div>

          {/* Quantity Dropdown */}
          <div className="space-y-2">
            <Label htmlFor="quantity" className="text-base font-semibold">
              How many do you need <span className="text-red-500">*</span>
            </Label>
            <Select value={formData.quantity} onValueChange={(value) => handleInputChange("quantity", value)} required>
              <SelectTrigger className="border-gray-300">
                <SelectValue placeholder="Select quantity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-bottle-450">1 Bottle For Ghs 450 + Free Delivery</SelectItem>
                <SelectItem value="2-bottles-800">2 Bottles For Ghs 800 + Free Delivery (Save Ghs 100)</SelectItem>
                <SelectItem value="3-bottles-1100">3 Bottles For Ghs 1100 + Free Delivery (Save Ghs 200)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Delivery Time */}
          <div className="space-y-2">
            <Label htmlFor="delivery" className="text-base font-semibold">
              When do you want it delivered
            </Label>
            <Select value={formData.delivery} onValueChange={(value) => handleInputChange("delivery", value)}>
              <SelectTrigger className="border-gray-300">
                <SelectValue placeholder="Select delivery time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24hrs">Within 24 hrs</SelectItem>
                <SelectItem value="48hrs">Within 48 hrs</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-base font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing Order...
              </>
            ) : (
              "Ship my order"
            )}
          </Button>

          {/* This empty div prevents unwanted text from being injected below the form */}
          <div />
        </form>
      </CardContent>
    </Card>
  )
}
