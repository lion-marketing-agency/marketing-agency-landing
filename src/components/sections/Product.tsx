'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { product } from '@/content'

export default function Product() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
              {product.title}
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {product.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden"
            >
              <Image
                src={product.features[activeFeature].image}
                alt={product.features[activeFeature].title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {product.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  onClick={() => setActiveFeature(index)}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeFeature === index
                      ? 'bg-white border-gray-200 shadow-sm'
                      : 'bg-transparent border-gray-100 hover:border-gray-200 hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeFeature === index
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                    }`}>
                      <span className="text-sm font-medium">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-medium mb-2 transition-colors duration-300 ${
                        activeFeature === index ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`leading-relaxed transition-colors duration-300 ${
                        activeFeature === index ? 'text-gray-600' : 'text-gray-500'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 