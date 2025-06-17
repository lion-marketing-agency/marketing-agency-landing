import { MetaData, HeroSection, Product, Testimonial, ContactSection, FooterData, Header } from './types'

export const metadata: MetaData = {
  title: 'Coffee Lab | Уютная кофейня в центре города',
  description: 'Откройте для себя мир изысканного кофе в нашей уютной кофейне. Свежая обжарка, авторские напитки и домашняя выпечка.',
  keywords: ['кофейня', 'кофе', 'десерты', 'Москва', 'Coffee Lab']
}

export const header: Header = {
  logo: 'Coffee Lab',
  links: [
    { href: '#menu', title: 'Меню' },
    { href: '#about', title: 'О нас' },
    { href: '#reviews', title: 'Отзывы' },
    { href: '#contact', title: 'Контакты' },
  ],
  ctaText: 'Забронировать',
  ctaLink: '#contact',
}

export const hero: HeroSection = {
  title: 'Изысканный кофе и уютная атмосфера',
  subtitle: 'Каждый день мы создаем идеальный кофе для вас',
  backgroundImage: '/images/backgrounds/img-hero-welcome-door.png',
  primaryButton: {
    text: 'Посмотреть меню',
    href: '#menu',
  },
  secondaryButton: {
    text: 'Забронировать столик',
    href: '#contact',
  },
}

export const about = {
  title: 'О нашей кофейне',
  description: 'Coffee Lab — это место, где ценят качество, уют и атмосферу. Мы используем только лучшие зерна и готовим кофе с душой. Приходите за вдохновением, встречами и, конечно, за отличным кофе!',
  image: '/images/product/img-product-coffee-03.png',
}

export const product: Product = {
  title: 'Почему выбирают нас',
  description: 'Мы создаем не просто кофе, а место, где каждый гость чувствует себя как дома. Наша миссия — подарить вам незабываемые моменты с идеальным кофе.',
  image: '/images/product/img-product-coffee-03.png',
  features: [
    {
      title: 'Идеальный кофе',
      description: 'Мы тщательно отбираем лучшие зерна со всего мира и обжариваем их по нашим фирменным рецептам. Каждая чашка — это искусство, созданное с любовью и вниманием к деталям.',
      image: '/images/product/img-product-coffee-03.png',
    },
    {
      title: 'Свежие десерты',
      description: 'Наши кондитеры создают восхитительные десерты каждый день. От классических пирожных до авторских сладостей — каждый десерт готовится из натуральных ингредиентов.',
      image: '/images/product/img-product-desserts-01.png',
    },
    {
      title: 'Уютная атмосфера',
      description: 'Теплый интерьер, мягкое освещение и приятная музыка создают идеальную атмосферу для работы, встреч с друзьями или уединенного отдыха с любимой книгой.',
      image: '/images/product/img-product-atmosphere-02.png',
    },
  ],
}

export const testimonials: Testimonial[] = [
  {
    name: 'Анна К.',
    role: 'Постоянный гость',
    text: 'Лучший кофе в городе! Особенно люблю их авторский латте с карамелью. Атмосфера очень уютная, идеальное место для работы и встреч с друзьями.',
    image: '/images/testimonials/testimonial-user-01.webp',
    photo: '/images/product/img-product-coffee-01.png',
  },
  {
    name: 'Михаил П.',
    role: 'Фрилансер',
    text: 'Отличное место для работы. Быстрый Wi-Fi, вкусный кофе и приятная музыка. Бариста всегда готовы помочь с выбором напитка.',
    image: '/images/testimonials/testimonial-user-02.webp',
    photo: '/images/product/img-product-atmosphere-01.png',
  },
  {
    name: 'Елена С.',
    role: 'Фуд-блогер',
    text: 'Прекрасная кофейня с внимательным персоналом. Особенно нравится их сезонное меню и десерты. Рекомендую всем!',
    image: '/images/testimonials/testimonial-user-03.webp',
    photo: '/images/product/img-product-desserts-01.png',
  },
]

export const contact: ContactSection = {
  title: 'Свяжитесь с нами',
  description: 'Забронируйте столик, закажите доставку или задайте любой вопрос. Мы всегда рады помочь!',
  email: 'hello@coffeelab.ru',
  phone: '+7 (999) 123-45-67',
}

export const footer: FooterData = {
  links: [
    {
      title: 'Меню',
      items: [
        { href: '#coffee', title: 'Кофе' },
        { href: '#tea', title: 'Чай' },
        { href: '#desserts', title: 'Десерты' },
        { href: '#breakfast', title: 'Завтраки' },
      ],
    },
    {
      title: 'Информация',
      items: [
        { href: '#about', title: 'О нас' },
        { href: '#careers', title: 'Вакансии' },
        { href: '#blog', title: 'Блог' },
        { href: '#contacts', title: 'Контакты' },
      ],
    },
  ],
  social: [
    {
      title: 'Мы в соцсетях',
      items: [
        { href: 'https://instagram.com', title: 'Instagram' },
        { href: 'https://facebook.com', title: 'Facebook' },
        { href: 'https://twitter.com', title: 'Twitter' },
      ],
    },
  ],
  copyright: '© 2024 Coffee Lab. Все права защищены.',
} 