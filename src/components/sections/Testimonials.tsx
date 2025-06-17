'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/content'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
              Отзывы клиентов
            </h2>
          </motion.div>

          {/* Карусель с управлением по бокам */}
          <div className="relative">
            {/* Кнопка "Назад" слева */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors group shadow-lg"
              aria-label="Предыдущий отзыв"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Кнопка "Вперед" справа */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors group shadow-lg"
              aria-label="Следующий отзыв"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Основной слайд */}
            <div className="relative h-[500px] md:h-[600px] mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 h-full overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                      {/* Левая колонка - текст отзыва */}
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex items-start gap-6 mb-8">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={testimonials[currentIndex].image}
                              alt={testimonials[currentIndex].name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-medium mb-2 text-gray-900">
                              {testimonials[currentIndex].name}
                            </h3>
                            <p className="text-gray-600 mb-3">
                              {testimonials[currentIndex].role}
                            </p>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className="w-4 h-4 text-yellow-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                        <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                          "{testimonials[currentIndex].text}"
                        </blockquote>
                      </div>

                      {/* Правая колонка - большое изображение */}
                      <div className="relative h-full">
                        <Image
                          src={testimonials[currentIndex].photo}
                          alt={testimonials[currentIndex].name + ' — фото'}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={true}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Индикаторы внизу */}
            <div className="flex items-center justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gray-900 w-10' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 