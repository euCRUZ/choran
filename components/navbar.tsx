"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Formulário", href: "#form" },
    { name: "Soluções", href: "#solutions" },
  ]

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 shadow-md backdrop-blur-md dark:bg-gray-900/90"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <Link href="#hero" className="text-xl font-bold text-primary">
              CHORAN
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`relative text-sm font-medium transition-colors hover:text-primary ${
                      isScrolled ? "text-foreground" : "text-white"
                    }`}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#form")}
              className="bg-primary px-6 text-white hover:bg-primary/90"
            >
              Fale Conosco
            </Button>
          </div>

          <button
            className="block rounded-md p-2 text-foreground md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-16 z-40 w-full bg-white shadow-lg dark:bg-gray-900"
          >
            <nav className="container mx-auto py-4">
              <ul className="flex flex-col space-y-4 px-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="w-full text-left text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
                <li>
                  <Button
                    onClick={() => scrollToSection("#form")}
                    className="w-full bg-primary text-white hover:bg-primary/90"
                  >
                    Fale Conosco
                  </Button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
