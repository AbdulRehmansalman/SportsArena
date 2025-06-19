"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Ticket, Crown, Star, Users, MapPin, Calendar, Clock, CreditCard, Shield, Zap } from "lucide-react"

export default function Tickets() {
  const [selectedPackage, setSelectedPackage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const ticketPackages = [
    {
      name: "General Admission",
      price: 45,
      icon: Users,
      features: ["Stadium seating", "Access to concessions", "Game program included", "Free parking"],
      color: "blue",
      popular: false,
    },
    {
      name: "Premium Seats",
      price: 85,
      icon: Star,
      features: [
        "Lower bowl seating",
        "Premium concessions access",
        "Complimentary drink",
        "Priority entry",
        "Souvenir included",
      ],
      color: "orange",
      popular: true,
    },
    {
      name: "VIP Experience",
      price: 150,
      icon: Crown,
      features: [
        "Courtside seating",
        "VIP lounge access",
        "Meet & greet opportunity",
        "Premium dining",
        "Exclusive merchandise",
        "Private parking",
      ],
      color: "yellow",
      popular: false,
    },
  ]

  const upcomingGames = [
    {
      date: "Dec 25, 2024",
      time: "7:30 PM",
      opponent: "Thunder Bolts",
      venue: "Arena Stadium",
      availability: "High",
    },
    {
      date: "Jan 2, 2025",
      time: "6:45 PM",
      opponent: "Ice Wolves",
      venue: "Arena Stadium",
      availability: "Medium",
    },
    {
      date: "Jan 15, 2025",
      time: "8:30 PM",
      opponent: "Lightning Sharks",
      venue: "Arena Stadium",
      availability: "Low",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Stadium Tickets" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
            }}
            className="mb-8"
          >
            <Ticket className="w-32 h-32 mx-auto text-orange-500" />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{
              background: "linear-gradient(45deg, #f97316, #ef4444, #f59e0b)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            GET TICKETS
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Secure your seat for the ultimate sports experience
          </motion.p>
        </motion.div>
      </section>

      {/* Ticket Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Choose Your <span className="text-orange-500">Experience</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {ticketPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  boxShadow: `0 20px 40px rgba(${
                    pkg.color === "orange" ? "249, 115, 22" : pkg.color === "yellow" ? "234, 179, 8" : "59, 130, 246"
                  }, 0.3)`,
                }}
                onClick={() => setSelectedPackage(index)}
                className="cursor-pointer"
              >
                <Card
                  className={`relative bg-gray-800/50 border-gray-700 backdrop-blur-sm transition-all duration-300 ${
                    selectedPackage === index ? `border-${pkg.color}-500 bg-${pkg.color}-500/10` : ""
                  } ${pkg.popular ? "border-orange-500" : ""}`}
                >
                  {pkg.popular && (
                    <motion.div
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <Badge className="bg-orange-600 text-white px-4 py-1">
                        <Zap className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </motion.div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <motion.div
                      className="mb-4"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                      }}
                    >
                      <pkg.icon className={`w-16 h-16 mx-auto text-${pkg.color}-500`} />
                    </motion.div>

                    <CardTitle className="text-2xl font-bold text-white">{pkg.name}</CardTitle>

                    <motion.div
                      className="text-4xl font-bold mt-4"
                      animate={
                        selectedPackage === index
                          ? {
                              scale: [1, 1.1, 1],
                              color: [
                                `#${pkg.color === "orange" ? "f97316" : pkg.color === "yellow" ? "eab308" : "3b82f6"}`,
                                "#ffffff",
                                `#${pkg.color === "orange" ? "f97316" : pkg.color === "yellow" ? "eab308" : "3b82f6"}`,
                              ],
                            }
                          : {}
                      }
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      ${pkg.price}
                    </motion.div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center text-gray-300"
                        >
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                          >
                            <Star className={`w-4 h-4 mr-3 text-${pkg.color}-500`} />
                          </motion.div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        className={`w-full ${
                          pkg.color === "orange"
                            ? "bg-orange-600 hover:bg-orange-700"
                            : pkg.color === "yellow"
                              ? "bg-yellow-600 hover:bg-yellow-700"
                              : "bg-blue-600 hover:bg-blue-700"
                        }`}
                      >
                        Select Package
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Selection */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Select Your <span className="text-orange-500">Game</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {upcomingGames.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <Badge
                        className={
                          game.availability === "High"
                            ? "bg-green-600"
                            : game.availability === "Medium"
                              ? "bg-yellow-600"
                              : "bg-red-600"
                        }
                      >
                        {game.availability} Availability
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white">vs {game.opponent}</h3>

                    <div className="space-y-3 text-gray-300 mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-3 text-orange-500" />
                        {game.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-3 text-orange-500" />
                        {game.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-3 text-orange-500" />
                        {game.venue}
                      </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">Select Game</Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Complete Your <span className="text-orange-500">Purchase</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Order Summary */}
                  <div className="bg-gray-900/50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-orange-500">Order Summary</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span>{ticketPackages[selectedPackage].name}</span>
                      <span>${ticketPackages[selectedPackage].price}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span>Quantity</span>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 p-0"
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 p-0"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="border-t border-gray-600 pt-2 mt-4">
                      <div className="flex justify-between items-center font-bold text-lg">
                        <span>Total</span>
                        <motion.span
                          className="text-orange-500"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          ${ticketPackages[selectedPackage].price * quantity}
                        </motion.span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-orange-500">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" className="bg-gray-700 border-gray-600" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" className="bg-gray-700 border-gray-600" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" className="bg-gray-700 border-gray-600" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" className="bg-gray-700 border-gray-600" />
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-orange-500 flex items-center">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Payment Information
                    </h3>
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" className="bg-gray-700 border-gray-600" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" className="bg-gray-700 border-gray-600" />
                      </div>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="flex items-center space-x-2 text-sm text-gray-400 bg-gray-900/50 p-4 rounded-lg">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>

                  {/* Purchase Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6">
                      <motion.div
                        className="flex items-center justify-center"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        <CreditCard className="w-5 h-5 mr-2" />
                        Complete Purchase - ${ticketPackages[selectedPackage].price * quantity}
                      </motion.div>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
