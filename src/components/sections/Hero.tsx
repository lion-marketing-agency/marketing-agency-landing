'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { hero } from '@/content'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-white">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 font-display text-6xl font-bold tracking-tight text-gray-900 md:text-8xl"
          >
            {hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 text-xl text-gray-600 md:text-2xl"
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href={hero.primaryButton.href}
              className="w-full rounded-full bg-gray-900 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800 sm:w-auto"
            >
              {hero.primaryButton.text}
            </Link>
            <Link
              href={hero.secondaryButton.href}
              className="w-full rounded-full border-2 border-gray-300 px-8 py-4 font-semibold text-gray-800 transition-all duration-300 hover:scale-105 hover:border-gray-900 hover:text-gray-900 sm:w-auto"
            >
              {hero.secondaryButton.text}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 