"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import contactData from "@/data/contact.json"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">Let's Tech Talk!</h3>
            <p className="text-gray-400 mb-8">Don't like forms? Send me an email. 👋</p>

            {contactData.contactInfo.map((info, index) => (
              <motion.div
                key={info.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="p-3 bg-purple-600 rounded-full">
                  {info.type === "email" && <Mail size={20} />}
                  {info.type === "phone" && <Phone size={20} />}
                  {info.type === "location" && <MapPin size={20} />}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{info.label}</h4>
                  <p className="text-gray-400">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-white placeholder-gray-400 resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400">© 2025 SAMSDP. Coded with ❤️, styled with 🎨, and deployed with 🚀</p>
        </motion.div>
      </div>
    </section>
  )
}
