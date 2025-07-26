"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["Developer", "Designer", "Creator"]
  const typingSpeed = 100
  const deletingSpeed = 50
  const pauseTime = 2000

  useEffect(() => {
    const currentText = texts[currentIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="text-center space-y-8 px-4">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">Ali Elbermawy</h1>
          <div className="text-2xl md:text-3xl text-gray-600 h-12 flex items-center justify-center">
            I'm a{" "}
            <span className="ml-2 text-blue-600">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </div>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Passionate about creating clean, functional solutions through code.
        </p>

        <Button
          onClick={scrollToProjects}
          size="lg"
          className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-3"
        >
          View My Work
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
