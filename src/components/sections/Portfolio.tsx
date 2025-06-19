'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolio } from '@/content'

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0)

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % portfolio.projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + portfolio.projects.length) % portfolio.projects.length)
  }

  const goToProject = (index: number) => {
    setActiveProject(index)
  }

  return (
    <section id="portfolio" className="min-h-screen flex items-center bg-gradient-to-b from-white via-gray-50 to-white py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight bg-gradient-to-r from-gray-900 via-primary-800 to-gray-900 bg-clip-text text-transparent">
              {portfolio.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {portfolio.description}
            </p>
          </motion.div>

          {/* Карусель проектов */}
          <div className="relative">
            {/* Кнопки навигации */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:border-gray-300 hover:shadow-lg transition-all duration-300 group shadow-md"
              aria-label="Предыдущий проект"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:border-gray-300 hover:shadow-lg transition-all duration-300 group shadow-md"
              aria-label="Следующий проект"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Основной слайд */}
            <div className="relative mb-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
                      {/* Левая колонка - информация о проекте */}
                      <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-center relative z-10 bg-white/80 backdrop-blur-sm">
                        <div>
                          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full mb-4">
                            {portfolio.projects[activeProject].category}
                          </span>
                          <h3 className="text-3xl font-semibold mb-4 text-gray-900">
                            {portfolio.projects[activeProject].title}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {portfolio.projects[activeProject].description}
                          </p>
                          <div className="flex items-center gap-2 mb-6">
                            <span className="text-sm text-gray-500">Результат:</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                              {portfolio.projects[activeProject].result}
                            </span>
                          </div>
                          <a
                            href={portfolio.projects[activeProject].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                          >
                            <span>Посмотреть проект</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>

                      {/* Правая колонка - изображение */}
                      <div className="lg:col-span-8 relative min-h-[400px] lg:min-h-[600px]">
                        <div className="absolute inset-0 w-full h-full">
                          <Image
                            src={portfolio.projects[activeProject].image}
                            alt={portfolio.projects[activeProject].title}
                            fill
                            className="object-cover object-left-top"
                            sizes="(max-width: 1024px) 100vw, 66vw"
                            priority={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Индикаторы */}
            <div className="flex items-center justify-center gap-3">
              {portfolio.projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeProject 
                      ? 'bg-gray-900 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Перейти к проекту ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 