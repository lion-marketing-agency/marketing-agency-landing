'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { product } from '@/content'

export default function Product() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section id="about" className="min-h-[calc(100vh-4rem)] flex items-center bg-background/50">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              {product.title}
            </h2>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
              {product.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={product.features[activeFeature].image}
                alt={product.features[activeFeature].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {product.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveFeature(index)}
                  className={`flex items-start gap-5 p-5 rounded-xl border transition-all cursor-pointer ${
                    activeFeature === index
                      ? 'bg-background/80 border-foreground/30 shadow-lg scale-105'
                      : 'bg-background/50 border-foreground/10 hover:border-foreground/20 hover:shadow-lg'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    activeFeature === index
                      ? 'bg-foreground/20'
                      : 'bg-foreground/10'
                  }`}>
                    <span className="text-lg font-medium">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                    <p className="text-foreground/60 leading-relaxed text-sm">{feature.description}</p>
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