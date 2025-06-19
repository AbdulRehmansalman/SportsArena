"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Users, Headphones } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-ARENA", "+1 (555) 123-4567"],
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@arenalegends.com", "tickets@arenalegends.com"],
      description: "Send us your questions anytime",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Champions Boulevard", "Arena City, AC 12345"],
      description: "Visit our legendary stadium",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9AM-8PM", "Sat-Sun: 10AM-6PM"],
      description: "We're here when you need us",
    },
  ]

  const departments = [
    {
      icon: Users,
      title: "General Inquiries",
      email: "info@arenalegends.com",
      description: "Questions about the team, games, or general information",
    },
    {
      icon: MessageCircle,
      title: "Ticket Sales",
      email: "tickets@arenalegends.com",
      description: "Purchase tickets, season passes, and VIP packages",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      email: "support@arenalegends.com",
      description: "Technical support and account assistance",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Contact Us" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/70" />
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
            <MessageCircle className="w-32 h-32 mx-auto text-orange-500" />
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
            GET IN TOUCH
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            We're here to help and answer any questions you might have
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact <span className="text-orange-500">Information</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm text-center h-full">
                  <CardContent className="p-6">
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
                      <info.icon className="w-16 h-16 mx-auto text-orange-500" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3 text-white">{info.title}</h3>

                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-300">
                          {detail}
                        </p>
                      ))}
                    </div>

                    <p className="text-sm text-gray-400">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Departments */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-center">
                    Send Us a <span className="text-orange-500">Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
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
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input id="phone" type="tel" className="bg-gray-700 border-gray-600" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" className="bg-gray-700 border-gray-600" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        className="bg-gray-700 border-gray-600 resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

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
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </motion.div>
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Departments */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-8">
                  Choose Your <span className="text-orange-500">Department</span>
                </h3>
                <p className="text-gray-300 text-lg mb-8">Get in touch with the right team for faster assistance</p>
              </div>

              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(249, 115, 22, 0.2)",
                    }}
                  >
                    <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <motion.div
                            animate={{
                              rotate: [0, 360],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: index * 0.7,
                            }}
                          >
                            <dept.icon className="w-12 h-12 text-orange-500 flex-shrink-0" />
                          </motion.div>

                          <div className="flex-grow">
                            <h4 className="text-xl font-bold mb-2 text-white">{dept.title}</h4>
                            <p className="text-gray-300 mb-3">{dept.description}</p>
                            <motion.a
                              href={`mailto:${dept.email}`}
                              className="text-orange-500 hover:text-orange-400 transition-colors flex items-center"
                              whileHover={{ x: 5 }}
                            >
                              <Mail className="w-4 h-4 mr-2" />
                              {dept.email}
                            </motion.a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Find <span className="text-orange-500">Our Arena</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="relative h-96 rounded-lg overflow-hidden"
          >
            <Image src="/placeholder.svg?height=400&width=1200" alt="Arena Location" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <motion.div
                className="text-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <MapPin className="w-16 h-16 mx-auto text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Arena Legends Stadium</h3>
                <p className="text-gray-300">123 Champions Boulevard, Arena City</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
