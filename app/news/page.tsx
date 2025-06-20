"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Newspaper, Calendar, User, Eye, Heart, Share2, MessageCircle, TrendingUp, Zap } from "lucide-react"

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const categories = ["all", "games", "players", "transfers", "championships"]

  const newsArticles = [
    {
      id: 1,
      title: "Arena Legends Secure Championship Victory in Thrilling Final",
      excerpt:
        "In a nail-biting finale that went into overtime, Arena Legends claimed their 15th championship title with a spectacular 4-3 victory over the Thunder Bolts.",
      category: "championships",
      author: "Sarah Johnson",
      date: "Dec 20, 2024",
      readTime: "5 min read",
      views: 15420,
      likes: 892,
      featured: true,
      image: "/images/MarcusThunder.webp",
    },
    {
      id: 2,
      title: "Marcus Thunder Signs Contract Extension Through 2027",
      excerpt:
        "Team captain Marcus Thunder has committed his future to Arena Legends with a groundbreaking 3-year extension worth $45 million.",
      category: "players",
      author: "Mike Rodriguez",
      date: "Dec 18, 2024",
      readTime: "3 min read",
      views: 8930,
      likes: 567,
      featured: false,
      image: "/images/signContract.jpg",
    },
    {
      id: 3,
      title: "New Stadium Renovations Unveiled for 2025 Season",
      excerpt:
        "Arena Legends announces $200 million stadium upgrade featuring state-of-the-art technology and enhanced fan experiences.",
      category: "games",
      author: "Lisa Chen",
      date: "Dec 15, 2024",
      readTime: "4 min read",
      views: 12340,
      likes: 723,
      featured: false,
      image: "/images/newStadiumRenovations.jpg",
    },
    {
      id: 4,
      title: "Rising Star Sarah Lightning Named Rookie of the Year",
      excerpt:
        "22-year-old striker Sarah Lightning caps off an incredible debut season by winning the league's most prestigious rookie award.",
      category: "players",
      author: "Tom Wilson",
      date: "Dec 12, 2024",
      readTime: "3 min read",
      views: 9876,
      likes: 654,
      featured: false,
      image: "/images/Sarah.jpg",
    },
    {
      id: 5,
      title: "Arena Legends Break Attendance Record in Home Opener",
      excerpt:
        "Over 85,000 fans packed the stadium for the season opener, setting a new franchise record and creating an electric atmosphere.",
      category: "games",
      author: "Alex Thompson",
      date: "Dec 10, 2024",
      readTime: "2 min read",
      views: 7654,
      likes: 432,
      featured: false,
      image: "/images/attendenceStadium.jpg",
    },
    {
      id: 6,
      title: "Blockbuster Trade Brings All-Star Defender to Arena Legends",
      excerpt:
        "In a surprise move, Arena Legends acquire three-time All-Star defender Jake Steel in exchange for two draft picks and $8 million.",
      category: "transfers",
      author: "Emma Davis",
      date: "Dec 8, 2024",
      readTime: "4 min read",
      views: 11230,
      likes: 789,
      featured: false,
      image: "/images/blockBusterTrade.jpg",
    },
  ]

  const filteredArticles = newsArticles.filter(
    (article) => selectedCategory === "all" || article.category === selectedCategory,
  )

  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = filteredArticles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Sports News" fill className="object-cover" />
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
            <Newspaper className="w-32 h-32 mx-auto text-orange-500" />
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
            LATEST NEWS
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Stay updated with all the latest from Arena Legends
          </motion.p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={
                    selectedCategory === category
                      ? "bg-orange-600 hover:bg-orange-700"
                      : "border-gray-600 hover:bg-gray-800"
                  }
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === "all" && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Featured <span className="text-orange-500">Story</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{
                y: -10,
                boxShadow: "0 30px 60px rgba(249, 115, 22, 0.3)",
              }}
            >
              <Card className="bg-gray-800/50 border-orange-500/50 backdrop-blur-sm overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/images/THrillingFinal.jpg"
                      alt={featuredArticle.title}
                      fill
                      className="object-cover"
                    />
                    <motion.div
                      className="absolute top-4 left-4"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <Badge className="bg-orange-600 text-white">
                        <Zap className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </motion.div>
                  </div>

                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-orange-600/20 text-orange-400 border-orange-600">
                      {featuredArticle.category}
                    </Badge>

                    <motion.h3
                      className="text-3xl font-bold mb-4 text-white"
                      animate={{ color: ["#ffffff", "#f97316", "#ffffff"] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      {featuredArticle.title}
                    </motion.h3>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{featuredArticle.excerpt}</p>

                    <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {featuredArticle.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {featuredArticle.date}
                        </div>
                      </div>
                      <span>{featuredArticle.readTime}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {featuredArticle.views.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {featuredArticle.likes}
                        </div>
                      </div>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="bg-orange-600 hover:bg-orange-700">Read Full Story</Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Latest <span className="text-orange-500">Updates</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm overflow-hidden h-full">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-orange-600/20 text-orange-400 border-orange-600">
                      {article.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">{article.title}</h3>

                    <p className="text-gray-300 mb-4 flex-grow line-clamp-3">{article.excerpt}</p>

                    <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {article.views.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-3 h-3 mr-1" />
                          {article.likes}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button size="sm" variant="outline" className="border-gray-600 hover:bg-gray-800">
                            <Share2 className="w-3 h-3" />
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button size="sm" variant="outline" className="border-gray-600 hover:bg-gray-800">
                            <MessageCircle className="w-3 h-3" />
                          </Button>
                        </motion.div>
                      </div>
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
