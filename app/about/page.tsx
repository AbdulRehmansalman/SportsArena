"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Zap, Star, Shield, Crown } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const achievements = [
    { icon: Trophy, title: "15 Championships", description: "Dominating the league for over a decade" },
    { icon: Crown, title: "Hall of Fame", description: "12 players inducted into the Hall of Fame" },
    { icon: Shield, title: "Defensive Masters", description: "Best defensive record in league history" },
    { icon: Star, title: "All-Stars", description: "25 All-Star selections in the last 5 years" },
  ]

  const timeline = [
    { year: "1985", event: "Arena Legends Founded", description: "Born from a dream to create champions" },
    { year: "1992", event: "First Championship", description: "Our breakthrough moment that started it all" },
    { year: "2005", event: "New Stadium Built", description: "State-of-the-art facility opens its doors" },
    { year: "2018", event: "Dynasty Era Begins", description: "5 consecutive championships in 7 years" },
    { year: "2024", event: "Legacy Continues", description: "Still dominating and inspiring new generations" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Arena History" fill className="object-cover" />
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
            <Trophy className="w-32 h-32 mx-auto text-orange-500" />
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
            OUR LEGACY
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Four decades of excellence, passion, and unwavering commitment to greatness
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-8"
                animate={{ color: ["#ffffff", "#f97316", "#ffffff"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Our Story
              </motion.h2>

              <div className="space-y-6 text-gray-300 text-lg">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  Born in 1985 from the vision of creating something extraordinary, Arena Legends has grown from a small
                  local team into a powerhouse that defines excellence in sports.
                </motion.p>

                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  Our journey has been marked by incredible highs, challenging lows, and the unwavering support of our
                  legendary fanbase. Every victory, every championship, every moment of glory has been shared with those
                  who believe in the Arena Legends spirit.
                </motion.p>

                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                  Today, we stand not just as champions, but as legends who inspire the next generation to dream bigger,
                  fight harder, and never give up on their pursuit of greatness.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div whileHover={{ scale: 1.05, rotateY: 10 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Team Victory"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-orange-600 rounded-full p-6"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <Zap className="w-12 h-12 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-orange-500">Achievements</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full">
                  <CardContent className="p-6 text-center">
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
                      <achievement.icon className="w-16 h-16 mx-auto text-orange-500" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
                    <p className="text-gray-400">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, orange 2px, transparent 2px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-orange-500">Journey</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-500 h-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 2 }}
            />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? -5 : 5 }}
                      className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm"
                    >
                      <motion.h3
                        className="text-3xl font-bold text-orange-500 mb-2"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                      >
                        {item.year}
                      </motion.h3>
                      <h4 className="text-xl font-semibold mb-2 text-white">{item.event}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="w-8 h-8 bg-orange-500 rounded-full border-4 border-black relative z-10"
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(249, 115, 22, 0.7)",
                        "0 0 0 20px rgba(249, 115, 22, 0)",
                        "0 0 0 0 rgba(249, 115, 22, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.3,
                    }}
                  />

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
