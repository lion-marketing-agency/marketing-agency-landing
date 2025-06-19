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

export interface AboutFeature {
  title: string
  description: string
  icon: string
}

export interface AboutSection {
  title: string
  description: string
  features: AboutFeature[]
}

export interface PortfolioProject {
  id: number
  title: string
  description: string
  image: string
  link: string
  category: string
  result: string
}

export interface Portfolio {
  title: string
  description: string
  projects: PortfolioProject[]
}

export interface ServiceExample {
  title: string
  link: string
  image: string
}

export interface Service {
  id: number
  title: string
  description: string
  price: string
  duration: string
  features: string[]
  example: ServiceExample
  ctaText: string
  ctaMessage: string
  icon: string
}

export interface CTA {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export interface SocialLink {
  name: string
  link: string
  icon: string
}

export interface ContactSection {
  title: string
  description: string
  telegram: {
    username: string
    link: string
  }
  email: string
  social: SocialLink[]
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