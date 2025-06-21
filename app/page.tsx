"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Users,
  Calendar,
  MapPin,
  Play,
  Star,
  Zap,
  Target,
  Award,
  Timer,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

// Animated Counter Component
function AnimatedCounter({
  end,
  duration = 2000,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

// Floating Particles Component
function FloatingParticles() {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 20 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
    };
    setPositions(generateParticles());
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-500/20 rounded-full"
          initial={{
            x: pos.x,
            y: pos.y,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function SportsArena() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { icon: Trophy, label: "Championships", value: 15 },
    { icon: Users, label: "Team Members", value: 250 },
    { icon: Target, label: "Goals Scored", value: 1847 },
    { icon: Award, label: "Awards Won", value: 89 },
  ];

  const upcomingGames = [
    {
      opponent: "Thunder Bolts",
      date: "Dec 25, 2024",
      time: "7:30 PM",
      venue: "Arena Stadium",
      status: "Home",
    },
    {
      opponent: "Fire Dragons",
      date: "Dec 28, 2024",
      time: "8:00 PM",
      venue: "Dragon's Den",
      status: "Away",
    },
    {
      opponent: "Ice Wolves",
      date: "Jan 2, 2025",
      time: "6:45 PM",
      venue: "Arena Stadium",
      status: "Home",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <FloatingParticles />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="mb-8"
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Trophy className="w-24 h-24 mx-auto text-orange-500 mb-4" />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            ARENA LEGENDS
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Where Champions Are Born
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Highlights
              </Button>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-black px-8 py-4 text-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                View Schedule
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-orange-500">Legacy</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 15,
                  transition: { duration: 0.3 },
                }}
              >
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
                  <stat.icon className="w-16 h-16 mx-auto text-orange-500" />
                </motion.div>
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <AnimatedCounter end={stat.value} />
                </motion.div>
                <p className="text-gray-400 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Games Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle, orange 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Upcoming <span className="text-orange-500">Battles</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingGames.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <motion.div
                      className="flex justify-between items-start mb-4"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <Badge
                        variant={
                          game.status === "Home" ? "default" : "secondary"
                        }
                        className={
                          game.status === "Home"
                            ? "bg-green-600"
                            : "bg-blue-600"
                        }
                      >
                        {game.status}
                      </Badge>
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <Zap className="w-6 h-6 text-orange-500" />
                      </motion.div>
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-2 text-white">
                      vs {game.opponent}
                    </h3>

                    <div className="space-y-2 text-gray-300">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                        {game.date}
                      </div>
                      <div className="flex items-center">
                        <Timer className="w-4 h-4 mr-2 text-orange-500" />
                        {game.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                        {game.venue}
                      </div>
                    </div>

                    <motion.div
                      className="mt-6"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        Get Tickets
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlights Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Team <span className="text-orange-500">Highlights</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/Home.jpg"
                  alt="Team Action"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 bg-orange-600 rounded-full p-4"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <Star className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.h3
                className="text-3xl md:text-4xl font-bold"
                animate={{ color: ["#ffffff", "#f97316", "#ffffff"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Unstoppable Force
              </motion.h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                Our team has dominated the arena with unprecedented skill and
                determination. From rookie sensations to veteran legends, every
                player brings their A-game to deliver spectacular performances
                that keep fans on the edge of their seats.
              </p>

              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-orange-600 p-3 rounded-full"
                >
                  <TrendingUp className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <p className="text-2xl font-bold text-orange-500">95%</p>
                  <p className="text-gray-400">Win Rate This Season</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, #1f2937, #111827)",
              "linear-gradient(45deg, #111827, #1f2937)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <Trophy className="w-16 h-16 mx-auto text-orange-500" />
            </motion.div>

            <h3 className="text-3xl font-bold mb-4">ARENA LEGENDS</h3>
            <p className="text-gray-400 mb-8">
              Champions Today, Legends Forever
            </p>

            <motion.div
              className="text-gray-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              © 2024 Arena Legends. All rights reserved.
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
