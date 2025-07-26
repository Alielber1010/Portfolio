"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Send, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Have a project in mind? I'd love to hear from you.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Removed contact form and Card wrapper */}
          <div className="text-center mt-8 space-y-4">
            <p className="text-gray-600">ali.melbermawy@gmail.com</p>
            <div className="flex justify-center items-center space-x-6">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full bg-transparent flex items-center gap-2"
                asChild
              >
                <a href="https://wa.me/60132430805" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="sm" className="rounded-full bg-transparent" asChild>
                <a href="https://github.com/Alielber1010" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="rounded-full bg-transparent" asChild>
                <a
                  href="https://www.linkedin.com/in/ali-elbermawy-390b95267/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="rounded-full bg-transparent" asChild>
                <a href="mailto:ali.melbermawy@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
