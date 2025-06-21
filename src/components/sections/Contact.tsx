'use client'

import { motion } from 'framer-motion'
import { contact } from '@/content'
import { FaTelegramPlane, FaInstagram, FaTiktok } from 'react-icons/fa'
import Image from 'next/image'

const socialIcons: { [key: string]: React.ElementType } = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
  telegram: FaTelegramPlane,
}

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
                  src="/images/contacts/telegram-cloud-photo-size-2-5379956299774687752-y.jpg"
                  alt="Лев Будко"
                  fill
                  className="rounded-full object-cover ring-4 ring-white"
                />
                <span className="absolute bottom-1 right-1 block h-4 w-4 rounded-full border-2 border-white bg-green-500" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Лев Будко</h3>
              <p className="mt-1 text-gray-500">Веб-разработчик</p>
              <p className="mt-2 flex items-center gap-2 text-sm text-green-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                На связи в Telegram
              </p>
              <button
                onClick={() => handleLinkClick(contact.telegram.link)}
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition-transform duration-300 hover:scale-105"
              >
                <FaTelegramPlane className="h-5 w-5" />
                <span>Написать в Telegram</span>
              </button>

              <div className="mt-6 flex gap-4">
                {contact.social.map((social) => {
                  const Icon = socialIcons[social.icon]
                  return (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 