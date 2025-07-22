"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronRight, X, ExternalLink, Calendar, Award } from "lucide-react"
import aboutData from "@/data/about.json"
import certificationsData from "@/data/certifications.json"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showCertifications, setShowCertifications] = useState(false)

  return (
    <>
      <section id="about" className="py-20 px-4" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-purple-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full animate-pulse"></div>
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full relative z-10 border-4 border-gray-800"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-purple-400">{aboutData.title}</h3>
              <p className="text-gray-300 leading-relaxed">{aboutData.description}</p>

              <div className="grid grid-cols-2 gap-4">
                {aboutData.details.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    className={`p-4 rounded-lg transition-all duration-300 group ${
                      detail.type === "certifications"
                        ? "bg-gray-800 cursor-pointer hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                        : "bg-gray-800"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    onClick={detail.type === "certifications" ? () => setShowCertifications(true) : undefined}
                    whileHover={detail.type === "certifications" ? { scale: 1.02 } : {}}
                    whileTap={detail.type === "certifications" ? { scale: 0.98 } : {}}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div
                          className={`font-semibold transition-colors duration-300 ${
                            detail.type === "certifications"
                              ? "text-purple-400 group-hover:text-white"
                              : "text-purple-400"
                          }`}
                        >
                          {detail.label}
                        </div>
                        <div
                          className={`transition-colors duration-300 ${
                            detail.type === "certifications"
                              ? "text-gray-300 group-hover:text-white/90"
                              : "text-gray-300"
                          }`}
                        >
                          {detail.value}
                        </div>
                      </div>
                      {detail.type === "certifications" && (
                        <div className="flex items-center space-x-1 transition-all duration-300">
                          <Award className="text-purple-400 group-hover:text-white" size={20} />
                          <div className="flex items-center space-x-1 text-purple-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                            <ChevronRight size={16} />
                            <ChevronRight size={16} className="-ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Modal */}
      {showCertifications && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowCertifications(false)}
        >
          <motion.div
            className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 relative">
              <button
                onClick={() => setShowCertifications(false)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-center space-x-3">
                <Award className="text-white" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-white">Professional Certifications</h2>
                  <p className="text-white/80">Showcasing my expertise and continuous learning</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificationsData.certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Certification Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 right-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {cert.date}
                      </div>
                    </div>

                    {/* Certification Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-purple-400 font-semibold text-sm mb-2">{cert.issuer}</p>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{cert.description}</p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-gray-700 text-xs rounded-full text-purple-300">
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Credential Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar size={12} />
                          <span>Issued {cert.date}</span>
                        </div>
                        <a href= {cert.verifyLink} target="blank" className="flex items-center space-x-1 cursor-pointer hover:text-purple-400 transition-colors">
                          <ExternalLink size={12} />
                          <span>Verify</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  Continuously expanding my knowledge and staying current with industry standards
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
