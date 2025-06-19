"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Trophy, Target, Zap, Filter } from "lucide-react"

export default function Schedule() {
  const [selectedMonth, setSelectedMonth] = useState(0)
  const [filter, setFilter] = useState("all")

  const months = ["December 2024", "January 2025", "February 2025", "March 2025"]

  const games = [
    {
      date: "Dec 25, 2024",
      time: "7:30 PM",
      opponent: "Thunder Bolts",
      venue: "Arena Stadium",
      status: "Home",
      type: "Regular",
      result: null,
      importance: "high",
    },
    {
      date: "Dec 28, 2024",
      time: "8:00 PM",
      opponent: "Fire Dragons",
      venue: "Dragon's Den",
      status: "Away",
      type: "Regular",
      result: null,
      importance: "medium",
    },
    {
      date: "Jan 2, 2025",
      time: "6:45 PM",
      opponent: "Ice Wolves",
      venue: "Arena Stadium",
      status: "Home",
      type: "Playoff",
      result: null,
      importance: "high",
    },
    {
      date: "Jan 8, 2025",
      time: "7:15 PM",
      opponent: "Storm Eagles",
      venue: "Eagle's Nest",
      status: "Away",
      type: "Regular",
      result: null,
      importance: "low",
    },
    {
      date: "Jan 15, 2025",
      time: "8:30 PM",
      opponent: "Lightning Sharks",
      venue: "Arena Stadium",
      status: "Home",
      type: "Championship",
      result: null,
      importance: "high",
    },
    {
      date: "Jan 22, 2025",
      time: "7:00 PM",
      opponent: "Blazing Phoenix",
      venue: "Phoenix Arena",
      status: "Away",
      type: "Regular",
      result: null,
      importance: "medium",
    },
    {
      date: "Feb 5, 2025",
      time: "6:30 PM",
      opponent: "Cyber Titans",
      venue: "Arena Stadium",
      status: "Home",
      type: "Playoff",
      result: null,
      importance: "high",
    },
    {
      date: "Feb 12, 2025",
      time: "8:15 PM",
      opponent: "Neon Warriors",
      venue: "Neon Dome",
      status: "Away",
      type: "Regular",
      result: null,
      importance: "medium",
    },
  ]

  const pastGames = [
    {
      date: "Dec 18, 2024",
      opponent: "Steel Rhinos",
      result: "W 4-2",
      venue: "Arena Stadium",
      status: "Home",
    },
    {
      date: "Dec 15, 2024",
      opponent: "Golden Hawks",
      result: "W 3-1",
      venue: "Hawk's Nest",
      status: "Away",
    },
    {
      date: "Dec 10, 2024",
      opponent: "Crimson Bulls",
      result: "W 5-0",
      venue: "Arena Stadium",
      status: "Home",
    },
  ]

  const filteredGames = games.filter((game) => {
    if (filter === "all") return true
    if (filter === "home") return game.status === "Home"
    if (filter === "away") return game.status === "Away"
    if (filter === "playoff") return game.type === "Playoff" || game.type === "Championship"
    return true
  })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Schedule" fill className="object-cover" />
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
            <Calendar className="w-32 h-32 mx-auto text-orange-500" />
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
            GAME SCHEDULE
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Don't miss a single moment of the action
          </motion.p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {["all", "home", "away", "playoff"].map((filterType) => (
              <motion.div key={filterType} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setFilter(filterType)}
                  variant={filter === filterType ? "default" : "outline"}
                  className={
                    filter === filterType ? "bg-orange-600 hover:bg-orange-700" : "border-gray-600 hover:bg-gray-800"
                  }
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {filterType.charAt(0).toUpperCase() + filterType.slice(1)} Games
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Games */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Upcoming <span className="text-orange-500">Battles</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredGames.map((game, index) => (
                <motion.div
                  key={`${game.date}-${game.opponent}`}
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -100, rotateX: 90 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                  }}
                >
                  <Card
                    className={`bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden ${
                      game.importance === "high" ? "border-orange-500/50" : ""
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Badge
                          variant={game.status === "Home" ? "default" : "secondary"}
                          className={game.status === "Home" ? "bg-green-600" : "bg-blue-600"}
                        >
                          {game.status}
                        </Badge>

                        <div className="flex space-x-2">
                          <Badge
                            variant="outline"
                            className={
                              game.type === "Championship"
                                ? "border-yellow-500 text-yellow-500"
                                : game.type === "Playoff"
                                  ? "border-orange-500 text-orange-500"
                                  : "border-gray-500 text-gray-400"
                            }
                          >
                            {game.type}
                          </Badge>

                          {game.importance === "high" && (
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            >
                              <Zap className="w-5 h-5 text-orange-500" />
                            </motion.div>
                          )}
                        </div>
                      </div>

                      <motion.h3
                        className="text-2xl font-bold mb-4 text-white"
                        animate={
                          game.importance === "high"
                            ? {
                                color: ["#ffffff", "#f97316", "#ffffff"],
                              }
                            : {}
                        }
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        vs {game.opponent}
                      </motion.h3>

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

                      <div className="flex space-x-2">
                        <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button className="w-full bg-orange-600 hover:bg-orange-700">Get Tickets</Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="icon" className="border-gray-600 hover:bg-gray-800">
                            <Target className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Recent Results */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Recent <span className="text-orange-500">Victories</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pastGames.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
                }}
              >
                <Card className="bg-green-900/20 border-green-700 backdrop-blur-sm">
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
                      <Trophy className="w-16 h-16 mx-auto text-green-500" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-2 text-white">vs {game.opponent}</h3>
                    <Badge className="mb-4 bg-green-600">{game.result}</Badge>

                    <div className="text-gray-400 space-y-1">
                      <p>{game.date}</p>
                      <p>
                        {game.venue} ({game.status})
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
