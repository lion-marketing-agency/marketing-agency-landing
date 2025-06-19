'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { about } from '@/content'
import { HiOutlineLightningBolt, HiOutlineChartBar, HiOutlineCube, HiOutlineCash } from 'react-icons/hi'

const getIconComponent = (iconName: string) => {
  const icons = {
    'speed': HiOutlineLightningBolt,
    'design': HiOutlineChartBar,
    'business': HiOutlineCube,
    'price': HiOutlineCash,
  }
  const IconComponent = icons[iconName as keyof typeof icons]
  return IconComponent ? <IconComponent className="w-full h-full" /> : null
}

export default function About() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id="about" className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute -right-1/4 top-0 w-1/2 h-1/2"
        >
          <div className="w-full h-full bg-gradient-to-br from-primary-100/20 to-transparent rounded-full blur-3xl transform rotate-12" />
        </motion.div>
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
          className="absolute -left-1/4 bottom-0 w-1/2 h-1/2"
        >
          <div className="w-full h-full bg-gradient-to-tr from-accent-100/20 to-transparent rounded-full blur-3xl transform -rotate-12" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-32 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight bg-gradient-to-r from-gray-900 via-primary-800 to-gray-900 bg-clip-text text-transparent">
              {about.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {about.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {about.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 shadow-[0_0_50px_-12px_rgb(0,0,0,0.05)] hover:shadow-[0_0_50px_-12px_rgb(0,0,0,0.15)] transition-all duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-start gap-6">
                    <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 text-primary-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {getIconComponent(feature.icon)}
                </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium mb-3 text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                    </div>
                  </div>
                  
                  {/* Декоративная линия */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 