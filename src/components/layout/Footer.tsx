'use client'

import Link from 'next/link'
import { footer } from '@/content'
import { FaInstagram, FaTiktok, FaTelegramPlane } from 'react-icons/fa'

const socialIcons: { [key: string]: React.ReactNode } = {
  Instagram: <FaInstagram className="h-5 w-5" />,
  TikTok: <FaTiktok className="h-5 w-5" />,
  Telegram: <FaTelegramPlane className="h-5 w-5" />,
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row">
        <p className="text-center text-sm text-gray-500 md:text-left">
          &copy; {new Date().getFullYear()} Lion.dev. Все права защищены.
        </p>

        <div className="flex items-center gap-5">
          {footer.social[0]?.items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-gray-600"
              aria-label={item.title}
            >
              {socialIcons[item.title]}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
} 