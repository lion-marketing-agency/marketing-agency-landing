'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { header } from '@/content'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setIsMobileMenuOpen(false)
            }}
            className={`text-xl font-bold transition-colors cursor-pointer ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {header.logo}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {header.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={header.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg ${
                isScrolled
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              {header.ctaText}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span
                className={`block w-full h-0.5 transition-all ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-full h-0.5 transition-all ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-full h-0.5 transition-all ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-md ${
              isScrolled ? 'bg-white/90' : 'bg-black/80'
            }`}
          >
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {header.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-gray-900' 
                      : 'text-white/90 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <Link
                href={header.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block px-6 py-3 rounded-lg font-medium text-center transition-all hover:shadow-lg ${
                  isScrolled
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                {header.ctaText}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 