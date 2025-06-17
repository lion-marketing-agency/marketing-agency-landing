'use client'

import Link from 'next/link'
import { footer } from '@/content'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center space-y-4">
          {/* ВКонтакте */}
          {footer.social[0]?.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              {item.title}
            </Link>
          ))}
          
          {/* Copyright */}
          <div className="text-center text-gray-500 text-xs">
            {footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  )
} 