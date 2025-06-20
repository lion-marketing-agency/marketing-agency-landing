'use client'

import { motion } from 'framer-motion'
import { about } from '@/content'
import {
  HiOutlineChartBar,
  HiOutlineCube,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
} from 'react-icons/hi'

const iconsMap: { [key: string]: React.ElementType } = {
  design: HiOutlineChartBar,
  business: HiOutlineCube,
  speed: HiOutlineLightningBolt,
  price: HiOutlineShieldCheck,
}

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {about.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600"
             dangerouslySetInnerHTML={{ __html: about.description }}
          />
        </motion.div>

        {/* Ось подхода (Timeline) */}
        <div className="relative mt-24">
          {/* Вертикальная линия с градиентом */}
          <div
            className="absolute left-1/2 top-4 bottom-4 ml-[-1px] w-0.5 bg-gradient-to-b from-transparent via-gray-200 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-20">
            {about.features.map((feature, index) => {
              const isEven = index % 2 === 0
              const IconComponent = iconsMap[feature.icon]
              return (
                <div
                  key={feature.title}
                  className="relative flex items-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="absolute left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-md ring-8 ring-white"
                  >
                    <IconComponent className="h-7 w-7 text-blue-600" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className={`mx-auto max-w-md text-center md:mx-0 md:max-w-none md:w-1/2 ${
                      isEven
                        ? 'md:pr-14 md:text-right'
                        : 'md:ml-auto md:pl-14 md:text-left'
                    }`}
                  >
                    <h3 className="text-3xl font-bold leading-9 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-lg leading-7 text-gray-700"
                       dangerouslySetInnerHTML={{ __html: feature.description }}
                    />
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 