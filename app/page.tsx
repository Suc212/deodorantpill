"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Star, Users, Zap, Leaf, Heart, AlertTriangle, Target } from "lucide-react"
import OrderForm from "@/components/order-form"

function scrollToOrderForm() {
  const orderSection = document.getElementById("order-form")
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: "smooth" })
  }
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stone-50 dark:bg-stone-950">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-200 dark:border-emerald-800">
                <Leaf className="w-4 h-4 mr-2" />
                100% Natural • Clinically Studied
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Smell confident <span className="text-emerald-600">From The Inside Out</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Deos is a gentle, plant‑based deodorant pill with chlorophyllin and mint that stops all body
                  odors from the inside out. It leaves every part of the body smelling fresh all day including private
                  areas and the mouth also, so you feel calm and confident in hot weather, workouts, and everyday life.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-stone-200 dark:border-stone-800 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="flex items-center gap-8 justify-evenly">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-stone-600">GHC 450</p>
                      <p className="text-sm text-muted-foreground">1 Bottle (30 days)</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-emerald-600">GHC 800</p>
                      <p className="text-sm text-muted-foreground">2 Bottles (60 days)</p>
                      <Badge className="bg-emerald-100 text-emerald-800 text-xs">Save GHC 100</Badge>
                    </div>
                  </div>
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 w-full" onClick={scrollToOrderForm}>
                    Order Now - Stop Body Odor
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  30-Day Money Back Guarantee
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-emerald-600" />
                  Free Delivery in Ghana
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-stone-100 dark:bg-stone-900 rounded-3xl p-8 flex items-center justify-center">
                <img
                  src="/deos-body-deodorizer-477480.webp"
                  alt="Two bottles of deos supplement showing natural effective formula for fresh underarms, private area, and breath"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white dark:bg-gray-900 border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium">FDA Approved Ingredients</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium">3rd Party Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium">No Artificial Additives</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Awareness */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-800 border-red-200 mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              The Hidden Truth About Body Odor
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              When sweat meets skin bacteria, odor happens.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sweat itself is nearly odorless. Odor forms when natural skin bacteria break down sweat from apocrine
              glands(underarms & groin areas). Heat, stress, spicy foods, hormones, and fabrics can intensify the smell.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  The Real Problem: Toxic Overload
                </h3>
                <ul className="space-y-3 text-red-700 dark:text-red-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    Processed foods create toxic buildup in your gut
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    Your liver and kidneys become overwhelmed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    Toxins enter your bloodstream seeking escape
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    Your skin becomes a backup elimination system
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    Result: Persistent odor that external products can't fix
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-emerald-50 dark:bg-emerald-950/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-200 mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  The Solution: Internal Cleansing
                </h3>
                <ul className="space-y-3 text-emerald-700 dark:text-emerald-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    Chlorophyll acts as nature's internal deodorant
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    Binds to odor-causing compounds in your digestive tract
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    Supports your body's natural detoxification
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    Prevents toxins from reaching your skin and breath
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    Result: True freshness that lasts all day, naturally
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-stone-600 mb-6">
              This is why external deodorants only mask the problem temporarily.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" onClick={scrollToOrderForm}>
              Order Now - Stop Body Odor
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-stone-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">The Internal vs External Approach</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader className="text-center bg-red-50 dark:bg-red-950/20 px-0">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-red-800 dark:text-red-200">External Products</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-red-700 dark:text-red-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    Only mask the smell temporarily
                  </li>
                  <li className="flex items-start gap-2 text-red-700 dark:text-red-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    Contain harsh chemicals
                  </li>
                  <li className="flex items-start gap-2 text-red-700 dark:text-red-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    Need constant reapplication
                  </li>
                  <li className="flex items-start gap-2 text-red-700 dark:text-red-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    Don't address the root cause
                  </li>
                  <li className="flex items-start gap-2 text-red-700 dark:text-red-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    Can irritate sensitive skin
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 dark:border-emerald-800 shadow-lg">
              <CardHeader className="text-center bg-emerald-50 dark:bg-emerald-950/20">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-800 dark:text-emerald-200">Internal Cleansing</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-emerald-700 dark:text-emerald-300">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    Treats the actual source of odor
                  </li>
                  <li className="flex items-start gap-2 text-emerald-700 dark:text-emerald-300">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    Uses natural plant compounds
                  </li>
                  <li className="flex items-start gap-2 text-emerald-700 dark:text-emerald-300">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    Provides 24/7 protection
                  </li>
                  <li className="flex items-start gap-2 text-emerald-700 dark:text-emerald-300">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    Supports overall digestive health
                  </li>
                  <li className="flex items-start gap-2 text-emerald-700 dark:text-emerald-300">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    Gentle and chemical-free
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" onClick={scrollToOrderForm}>
              Order Now - Stop Body Odor
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Awareness Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Body Odor Really Happens</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sweat itself is odorless. The problem starts when skin bacteria metabolize compounds in your sweat,
              creating those embarrassing moments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-destructive" />
                </div>
                <CardTitle>Crowded Commute</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stress and heat amplify bacterial activity, making close quarters uncomfortable for everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-destructive" />
                </div>
                <CardTitle>Gym Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intense workouts create the perfect storm of heat, moisture, and bacterial growth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-destructive" />
                </div>
                <CardTitle>Date Nights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nervousness and anticipation can trigger stress-related odor when you least want it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-16 lg:py-24 bg-stone-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 mb-6">
                <Leaf className="w-4 h-4 mr-2" />
                The Science Behind Body Magic
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                How Deos Capsules Work From Within
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-stone-100 dark:bg-stone-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-stone-600 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Internal Odor Neutralization</h3>
                    <p className="text-muted-foreground">
                      Chlorophyll binds to odor-causing compounds in your digestive tract before they can reach your
                      skin and breath.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-stone-100 dark:bg-stone-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-stone-600 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Digestive Support</h3>
                    <p className="text-muted-foreground">
                      Supports your body's natural detoxification processes, reducing the burden on your skin as an
                      elimination system.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-stone-100 dark:bg-stone-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-stone-600 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Mint Enhancement</h3>
                    <p className="text-muted-foreground">
                      Natural mint provides additional freshening properties and supports digestive comfort.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-stone-100 dark:bg-stone-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-stone-600 font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">24/7 Protection</h3>
                    <p className="text-muted-foreground">
                      Works continuously to maintain internal freshness, giving you confidence all day long.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-200 dark:border-emerald-800">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto">
                    <Leaf className="w-12 h-12 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Why Deos Supplement Works</h3>
                    <p className="text-muted-foreground mb-4">Natural Internal Deodorant</p>
                  </div>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">Chlorophyll neutralizes odors internally</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">Mint provides natural freshening</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">Supports digestive health</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">100% natural and safe</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Simple to Use, Even If You Can't Swallow Pills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deos is designed for everyone. Here are two easy ways to take it.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-6 text-center">
                  Option 1: Swallow Whole
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <span>Take 1 capsule with a glass of water</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <span>Best taken with meals for optimal absorption</span>
                  </div>
                </div>
              </div>

              <div className="bg-stone-50 dark:bg-stone-900/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-200 mb-6 text-center">
                  Option 2: Mix with Water
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4">
                    <div className="w-8 h-8 bg-stone-500 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <span>Open capsule and pour contents into water</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4">
                    <div className="w-8 h-8 bg-stone-500 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <span>Stir well and drink immediately</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-video bg-stone-100 dark:bg-stone-900 rounded-2xl flex items-center justify-center">
                <img
                  src="/deos-body-deodorizer-987562.webp"
                  alt="Deos capsules product image"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" onClick={scrollToOrderForm}>
                  Order Now - Stop Body Odor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">Real results from real people</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "I was skeptical at first, but after 2 weeks I noticed a real difference. My confidence is back!"
                </p>
                <p className="font-semibold">- Sarah K.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Finally found something that works from the inside. No more embarrassing moments at work."
                </p>
                <p className="font-semibold">- Michael A.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The mixing option is perfect for me since I can't swallow pills. Works great!"
                </p>
                <p className="font-semibold">- Grace M.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Choose Your Freshness Plan</h2>
            <p className="text-xl text-muted-foreground">Risk-free trial with 30-day money-back guarantee</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Single Bottle</CardTitle>
                <CardDescription>Perfect for trying out</CardDescription>
                <div className="text-4xl font-bold text-stone-600 mt-4">GHC 450</div>
                <p className="text-muted-foreground">30-day supply</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg" onClick={scrollToOrderForm}>
                  Order 1 Bottle
                </Button>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Free shipping within Ghana
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Customer support included
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-emerald-500 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-emerald-600 text-white px-4 py-1">Best Value</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Double Pack</CardTitle>
                <CardDescription>Save 100 GHC</CardDescription>
                <div className="text-4xl font-bold text-emerald-600 mt-4">GHC 800</div>
                <p className="text-muted-foreground">60-day supply</p>
                <p className="text-sm text-emerald-600 font-semibold">Save GHC 100 vs single bottles</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg" onClick={scrollToOrderForm}>
                  Order 2 Bottles
                </Button>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Free shipping within Ghana
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Priority customer support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Extended freshness journey
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is Deos safe to take daily?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, our formula uses FDA-approved ingredients within safe daily limits. Some people may experience
                  green-tinted urine (harmless) or mild digestive changes initially. Consult your doctor if pregnant or
                  nursing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly will I see results?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Individual results vary. Some customers notice improvements within 1-2 weeks, while others may take up
                  to 30 days. Consistency is key for best results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does shipping take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer free delivery within Ghana, typically taking 2-3 days. You'll receive tracking information
                  once your order ships.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the difference between 1 and 2 bottles?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The 2-bottle pack saves you GHC 100 and provides a 60-day supply, giving you more time to experience
                  the full benefits while saving money.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Experience True Freshness?</h2>
            <p className="text-xl opacity-90">
              Join thousands who've discovered the confidence that comes with internal freshness. Risk-free trial with
              our 30-day money-back guarantee.
            </p>
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 mb-8" onClick={scrollToOrderForm}>
              Order Now - Stop Body Odor
            </Button>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order-form" className="py-16 lg:py-24 bg-stone-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Complete Your Order</h2>
            <p className="text-xl text-muted-foreground">Choose your freshness plan and start your journey today</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-8 mb-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-stone-600">GHC 450</p>
                    <p className="text-sm text-muted-foreground">1 Bottle (30 days)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-emerald-600">GHC 800</p>
                    <p className="text-sm text-muted-foreground">2 Bottles (60 days)</p>
                    <Badge className="bg-emerald-100 text-emerald-800 text-xs">Save GHC 100</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-600" />
                    30-Day Guarantee
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-emerald-600" />
                    Free Ghana Delivery
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Natural Ingredients
                  </div>
                </div>
              </div>

              <OrderForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Deos Supplement </h3>
            <p className="text-muted-foreground">Natural internal deodorant supplement with chlorophyllin and mint</p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-emerald-600">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-600">
                Terms of Service
              </a>
              <a href="#" className="hover:text-emerald-600">
                Contact Us
              </a>
              <a href="#" className="hover:text-emerald-600">
                FAQ
              </a>
            </div>
            <p className="text-xs text-muted-foreground">© 2024 Korret Stores. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
