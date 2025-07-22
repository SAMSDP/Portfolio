"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import experienceData from "@/data/experience.json"

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-purple-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-600"></div>

          {experienceData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative flex items-start mb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-black z-10"></div>

              {/* Content */}
              <div className="ml-20 bg-gray-800 p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                    <h4 className="text-purple-400 font-semibold">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-400 mt-2 md:mt-0">
                    <div className="flex items-center mb-1">
                      <Calendar size={14} className="mr-1" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-700 text-xs rounded-full text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
