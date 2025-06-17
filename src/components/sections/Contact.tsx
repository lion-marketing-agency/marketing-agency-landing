'use client'

import { motion } from 'framer-motion'
import { contact } from '@/content'

export default function Contact() {
  return (
    <section id="contact" className="min-h-[calc(100vh-4rem)] flex items-center bg-background/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              {contact.title}
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              {contact.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background/50 rounded-2xl p-8 border border-foreground/10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:border-foreground/20 focus:outline-none transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:border-foreground/20 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:border-foreground/20 focus:outline-none transition-colors"
                  placeholder="Ваше сообщение..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Отправить сообщение
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 