export interface MetaData {
  title: string
  description: string
  keywords: string[]
}

export interface Button {
  text: string
  href: string
}

export interface HeroSection {
  title: string
  subtitle: string
  backgroundImage?: string
  primaryButton: Button
  secondaryButton: Button
}

export interface Feature {
  title: string
  description: string
  image: string
}

export interface Product {
  title: string
  description: string
  image: string
  features: Feature[]
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image: string
  avatar: string
}

export interface ContactSection {
  title: string
  description: string
  phone: string
  addresses: {
    text: string
    mapsUrl: string
  }[]
}

export interface FooterData {
  links: {
    title: string
    items: {
      title: string
      href: string
    }[]
  }[]
  social: {
    title: string
    items: {
      title: string
      href: string
    }[]
  }[]
  copyright: string
}

export interface HeaderLink {
  title: string
  href: string
  isExternal?: boolean
}

export interface Header {
  logo: string
  links: HeaderLink[]
  ctaText: string
  ctaLink: string
} 