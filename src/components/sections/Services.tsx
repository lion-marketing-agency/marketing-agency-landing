'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { services } from '@/content'

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // Можно добавить уведомление об успешном копировании
      console.log('Сообщение скопировано в буфер обмена')
    })
  }

  const handleTelegramClick = (message: string) => {
    copyToClipboard(message)
    window.open('https://t.me/krabik_666', '_blank')
  }

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
              Услуги и тарифы
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящее решение для вашей задачи
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col h-full p-8 rounded-3xl border-2 transition-all duration-300 shadow-sm bg-white group border-gray-200 hover:border-gray-900 hover:shadow-lg`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl select-none">{service.icon}</span>
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 flex-1 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-2 h-2 bg-gray-900 rounded-full inline-block" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 text-xs rounded-full font-medium">
                    {service.price}
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs rounded-full font-medium">
                    {service.duration}
                  </span>
                </div>
                <button
                  onClick={() => handleTelegramClick(service.ctaMessage)}
                  className="w-full py-3 rounded-xl font-semibold transition-all duration-300 mt-auto text-base shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white"
                >
                  {service.ctaText}
                </button>
                <div className="relative w-full h-40 mt-8 rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={service.example.image}
                    alt={service.example.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 