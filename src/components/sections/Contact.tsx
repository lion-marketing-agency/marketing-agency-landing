'use client'

import { motion } from 'framer-motion'
import { contact } from '@/content'
import { FaTelegramPlane } from 'react-icons/fa'
import Image from 'next/image'

export default function Contact() {
  const handleLinkClick = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <section id="contact" className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
          {/* Левая колонка: Текст */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center text-center md:text-left"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {contact.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {contact.description}
            </p>
          </motion.div>

          {/* Правая колонка: Карточка */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="flex w-full max-w-sm flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg">
              <div className="relative h-24 w-24">
                <Image
                  src="/logo/android-chrome-192x192.png" // Плейсхолдер
                  alt="Avatar"
                  fill
                  className="rounded-full object-cover ring-2 ring-white"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Лев Будко</h3>
              <p className="mt-1 text-gray-500">Веб-разработчик</p>
              <button
                onClick={() => handleLinkClick(contact.telegram.link)}
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition-transform duration-300 hover:scale-105"
              >
                <FaTelegramPlane className="h-5 w-5" />
                <span>Написать в Telegram</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 