"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Trophy, Users } from "lucide-react"

export default function Team() {
  const [selectedPlayer, setSelectedPlayer] = useState(0)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const players = [
    {
      name: "Marcus Thunder",
      position: "Captain",
      number: 10,
      stats: { goals: 45, assists: 23, games: 82 },
      achievements: ["MVP 2023", "Top Scorer", "Team Captain"],
      bio: "The heart and soul of Arena Legends, Marcus leads by example with his incredible skill and unwavering determination.",
    },
    {
      name: "Sarah Lightning",
      position: "Striker",
      number: 7,
      stats: { goals: 38, assists: 19, games: 78 },
      achievements: ["Rookie of the Year", "All-Star", "Golden Boot"],
      bio: "A rising star who has taken the league by storm with her lightning-fast moves and precision strikes.",
    },
    {
      name: "Alex Storm",
      position: "Defender",
      number: 5,
      stats: { goals: 8, assists: 15, games: 80 },
      achievements: ["Best Defender", "Iron Wall", "Team Player"],
      bio: "The unbreakable wall of our defense, Alex has never let a crucial goal slip past in the final moments.",
    },
    {
      name: "Jordan Blaze",
      position: "Midfielder",
      number: 11,
      stats: { goals: 22, assists: 31, games: 79 },
      achievements: ["Playmaker", "Assist King", "Fan Favorite"],
      bio: "The creative genius behind our attacks, Jordan's vision and passing ability are unmatched in the league.",
    },
    {
      name: "Riley Phoenix",
      position: "Goalkeeper",
      number: 1,
      stats: { saves: 156, cleanSheets: 34, games: 82 },
      achievements: ["Golden Glove", "Save Master", "Clutch Player"],
      bio: "Rising from every challenge like a phoenix, Riley's incredible saves have won us countless games.",
    },
    {
      name: "Casey Vortex",
      position: "Winger",
      number: 21,
      stats: { goals: 28, assists: 26, games: 75 },
      achievements: ["Speed Demon", "Breakthrough Player", "Rising Star"],
      bio: "A whirlwind on the wings, Casey's speed and agility create opportunities that seem impossible to others.",
    },
  ]

  const staff = [
    {
      name: "Coach Martinez",
      role: "Head Coach",
      experience: "15 years",
      achievements: ["5x Champion Coach", "Coach of the Year"],
    },
    {
      name: "Dr. Sarah Kim",
      role: "Sports Scientist",
      experience: "8 years",
      achievements: ["Performance Optimizer", "Injury Prevention Expert"],
    },
    {
      name: "Mike Johnson",
      role: "Assistant Coach",
      experience: "12 years",
      achievements: ["Tactical Genius", "Player Developer"],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Team Photo" fill className="object-cover" />
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
            <Users className="w-32 h-32 mx-auto text-orange-500" />
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
            OUR LEGENDS
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Meet the extraordinary athletes who make magic happen on the field
          </motion.p>
        </motion.div>
      </section>

      {/* Players Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Star <span className="text-orange-500">Players</span>
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {players.map((player, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                }}
                onClick={() => setSelectedPlayer(index)}
                className="cursor-pointer"
              >
                <Card
                  className={`bg-gray-800/50 border-gray-700 backdrop-blur-sm transition-all duration-300 ${
                    selectedPlayer === index ? "border-orange-500 bg-orange-500/10" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <motion.div whileHover={{ scale: 1.05 }} className="relative">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&query=athlete player ${player.name}`}
                          alt={player.name}
                          width={300}
                          height={300}
                          className="rounded-lg w-full h-48 object-cover"
                        />
                      </motion.div>

                      <motion.div
                        className="absolute -top-2 -right-2 bg-orange-600 rounded-full w-12 h-12 flex items-center justify-center"
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
                        <span className="text-white font-bold">{player.number}</span>
                      </motion.div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-white">{player.name}</h3>
                    <Badge className="mb-4 bg-orange-600">{player.position}</Badge>

                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-orange-500">{player.stats.goals}</p>
                        <p className="text-xs text-gray-400">Goals</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-orange-500">{player.stats.assists}</p>
                        <p className="text-xs text-gray-400">Assists</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-orange-500">{player.stats.games}</p>
                        <p className="text-xs text-gray-400">Games</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      {player.achievements.slice(0, 2).map((achievement, i) => (
                        <Badge key={i} variant="outline" className="text-xs mr-1">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Selected Player Detail */}
          <motion.div
            key={selectedPlayer}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-lg"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.h3
                  className="text-4xl font-bold mb-4"
                  animate={{ color: ["#ffffff", "#f97316", "#ffffff"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {players[selectedPlayer].name}
                </motion.h3>
                <p className="text-gray-300 text-lg mb-6">{players[selectedPlayer].bio}</p>

                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-orange-500">Achievements:</h4>
                  {players[selectedPlayer].achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <Trophy className="w-4 h-4 text-orange-500" />
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05, rotateY: 10 }} className="relative">
                <Image
                  src={`/placeholder.svg?height=400&width=400&query=athlete action ${players[selectedPlayer].name}`}
                  alt={`${players[selectedPlayer].name} in action`}
                  width={400}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-orange-600 rounded-full p-4"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Star className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coaching Staff Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Coaching <span className="text-orange-500">Staff</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <motion.div whileHover={{ scale: 1.1 }} className="mb-4">
                      <Image
                        src={`/placeholder.svg?height=200&width=200&query=coach ${member.name}`}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto"
                      />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                    <Badge className="mb-4 bg-orange-600">{member.role}</Badge>

                    <p className="text-gray-400 mb-4">Experience: {member.experience}</p>

                    <div className="space-y-1">
                      {member.achievements.map((achievement, i) => (
                        <Badge key={i} variant="outline" className="text-xs mr-1 mb-1">
                          {achievement}
                        </Badge>
                      ))}
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
