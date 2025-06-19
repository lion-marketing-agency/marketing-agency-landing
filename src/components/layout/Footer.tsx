'use client'

import Link from 'next/link'
import { footer } from '@/content'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Логотип и описание */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Lion.dev</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Создаём сайты и боты, которые продают. От лендинга до интернет-магазина за 3-7 дней.
            </p>
          </div>

          {/* Быстрые ссылки */}
          <div className="grid grid-cols-1 gap-6">
            {footer.links.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-3 text-white">{section.title}</h4>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Социальные сети */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Социальные сети</h4>
            <ul className="space-y-2">
              {footer.social[0]?.items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
} 