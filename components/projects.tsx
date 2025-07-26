"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Movie Choice",
      description:
        "A sleek and user-friendly website that retrieves an extensive list of movies from TMDB API with fetching methods, ensuring a seamless browsing experience.",
      image: "/images/moveilist.png",
      technologies: ["JavaScript", "API Integration", "HTML", "CSS"],
      github: "https://github.com/Alielber1010/movie-choice",
      live: "#",
    },
    {
      title: "Pomodoro Focus",
      description:
        "A productivity application implementing the Pomodoro Technique to help users manage their time effectively.",
      image: "/images/pomodoro.png",
      technologies: ["TypeScript", "Productivity", "Timer"],
      github: "https://github.com/Alielber1010/PomodoroFocus",
      live: "#",
    },

  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some projects that showcase my development journey as a Software Engineering student.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  {project.live !== "#" && (
                    <Button size="sm" className="flex-1 bg-gray-900 hover:bg-gray-800" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
