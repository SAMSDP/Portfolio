"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import skillsData from "@/data/skills.json"

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("languages")

  // Combine all skills with their categories
  const allSkills = [
    ...skillsData.languages.map((skill) => ({ ...skill, category: "languages", categoryName: "Languages" })),
    ...skillsData.frameworks.map((skill) => ({ ...skill, category: "frameworks", categoryName: "Frameworks" })),
    ...skillsData.tools.map((skill) => ({ ...skill, category: "tools", categoryName: "Tools" })),
    ...skillsData.platforms.map((skill) => ({ ...skill, category: "platforms", categoryName: "Platforms" })),
    ...skillsData.softSkills.map((skill) => ({ ...skill, category: "softSkills", categoryName: "Soft Skills" })),
  ]

  // Filter skills based on active filter
  const filteredSkills = allSkills.filter((skill) => skill.category === activeFilter)

  const filterOptions = [
    { key: "languages", label: "Languages", count: skillsData.languages.length },
    { key: "frameworks", label: "Frameworks", count: skillsData.frameworks.length },
    { key: "tools", label: "Tools", count: skillsData.tools.length },
    { key: "platforms", label: "Platforms", count: skillsData.platforms.length },
    { key: "softSkills", label: "Soft Skills", count: skillsData.softSkills.length },
  ]

  // Get random colors for variety
  const ballColors = [
    "from-purple-500 to-purple-700",
    "from-blue-500 to-blue-700",
    "from-pink-500 to-pink-700",
    "from-indigo-500 to-indigo-700",
    "from-violet-500 to-violet-700",
    "from-cyan-500 to-cyan-700",
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Floating Background Orbs */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my technical expertise and professional capabilities
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setActiveFilter(option.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === option.key
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {option.label} ({option.count})
            </button>
          ))}
        </motion.div>

        {/* Skills Orb Grid */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.category}-${skill.name}`}
                  initial={{ opacity: 0, scale: 0, y: 100 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.6,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  className="relative group cursor-pointer"
                  whileHover={{
                    scale: 1.2,
                    y: -10,
                    transition: { duration: 0.3, type: "spring" },
                  }}
                >
                  {/* Skill Ball/Orb */}
                  <div className="relative">
                    {/* Main Ball */}
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${
                        ballColors[index % ballColors.length]
                      } shadow-2xl relative overflow-hidden group-hover:shadow-purple-500/50 transition-all duration-300`}
                      style={{
                        boxShadow: `
                          0 8px 32px rgba(139, 92, 246, 0.3),
                          inset 0 2px 8px rgba(255, 255, 255, 0.2),
                          inset 0 -2px 8px rgba(0, 0, 0, 0.3)
                        `,
                      }}
                    >
                      {/* Glossy Highlight */}
                      <div
                        className="absolute top-2 left-2 w-6 h-6 bg-white/30 rounded-full blur-sm"
                        style={{
                          background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 70%)",
                        }}
                      />

                      {/* Skill Icon */}
                      <div className="absolute inset-0 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>

                      {/* Rotating Ring */}
                      <motion.div
                        className="absolute inset-0 border-2 border-white/20 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        style={{
                          borderStyle: "dashed",
                        }}
                      />

                      {/* Pulsing Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-purple-400/20"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                    </div>

                    {/* Ball Shadow */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black/30 rounded-full blur-md group-hover:w-20 group-hover:bg-purple-500/20 transition-all duration-300" />

                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -30, -60],
                            x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 40],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Skill Name */}
                  <div className="text-center mt-4">
                    <div className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{skill.categoryName}</div>
                  </div>

                  {/* Hover Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 pointer-events-none">
                    {skill.name}
                  </div>

                  {/* Energy Rings */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute border border-purple-400/30 rounded-full"
                        style={{
                          width: `${100 + i * 20}px`,
                          height: `${100 + i * 20}px`,
                          left: `${-10 - i * 10}px`,
                          top: `${-10 - i * 10}px`,
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
