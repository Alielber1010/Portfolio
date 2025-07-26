"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Image
              src="/images/Ali_Elbermawy_cocosign (1).png"
              alt="Ali Elbermawy Signature"
              width={200}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" className="rounded-full">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg p-4 mb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                Projects
              </button>
              <Button onClick={() => scrollToSection("contact")} variant="outline" className="rounded-full">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
