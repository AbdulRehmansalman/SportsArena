"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { Trophy, Menu, X, Home, Users, Calendar, Ticket, Newspaper, Phone, Info } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/team", label: "Team", icon: Users },
    { href: "/schedule", label: "Schedule", icon: Calendar },
    { href: "/tickets", label: "Tickets", icon: Ticket },
    { href: "/news", label: "News", icon: Newspaper },
    { href: "/contact", label: "Contact", icon: Phone },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <Trophy className="w-8 h-8 text-orange-500" />
            <span className="text-xl font-bold text-white">ARENA LEGENDS</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-orange-500 transition-colors flex items-center space-x-1"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} whileTap={{ scale: 0.9 }}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 px-4 text-gray-300 hover:text-orange-500 hover:bg-gray-800 rounded transition-colors flex items-center space-x-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
