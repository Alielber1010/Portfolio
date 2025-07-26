"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Smartphone, Database, Cloud, Settings } from "lucide-react"

export default function About() {
  const webDevelopmentSkills = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"]
    },
    {
      category: "Backend",
      skills: [ "PHP", "C#", ".NET", "Node.js"]
    },
    {
      category: "Mobile & UI",
      skills: ["Flutter",  "MaterialUI", ]
    },
    {
      category: "Database & Cloud",
      skills: ["MongoDB", "Firebase", "Git", "SQL", "PostgreSQL"]
    },
    {
      category: "Tools & Libraries",
      skills: ["Webpack", "npm", "REST APIs", "JWT"]
    },
    {
      category: "AI & ML",
      skills: ["OpenCV", "Machine Learning", "TensorFlow", "Python", "Data Analysis"]
    }
  ]

  const getIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Globe className="h-8 w-8 text-purple-600" />
      case "Backend":
        return <Settings className="h-8 w-8 text-purple-600" />
      case "Mobile & UI":
        return <Smartphone className="h-8 w-8 text-purple-600" />
      case "Database & Cloud":
        return <Cloud className="h-8 w-8 text-purple-600" />
      case "Tools & Libraries":
        return <Code className="h-8 w-8 text-purple-600" />
      case "AI & ML":
        return <Database className="h-8 w-8 text-purple-600" />
      default:
        return <Code className="h-8 w-8 text-purple-600" />
    }
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a third-year Software Engineering student at UTM, passionate about exploring cutting-edge technologies
            with a keen interest in AI and aspiring towards full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webDevelopmentSkills.map((category, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {getIcon(category.category)}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{category.category}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Extensive experience with {category.category.toLowerCase()} technologies and frameworks.
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-purple-600">Previous Experience With:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
