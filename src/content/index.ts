import { MetaData, HeroSection, AboutSection, Service, ContactSection, FooterData, Header } from './types'

export const metadata: MetaData = {
  title: 'Lion.dev | Создаём сайты и боты, которые продают',
  description: 'Студия разработки сайтов и Telegram-ботов. От лендинга до интернет-магазина за 3-7 дней. Реальный результат для вашего бизнеса.',
  keywords: ['разработка сайтов', 'лендинги', 'telegram боты', 'веб-разработка', 'lion.dev', 'студия']
}

export const header: Header = {
  logo: 'Lion.dev',
  links: [
    { href: '#about', title: 'О нас' },
    { href: '#portfolio', title: 'Портфолио' },
    { href: '#services', title: 'Услуги' },
    { href: '#contact', title: 'Контакты' },
  ],
  ctaText: 'Обсудить проект',
  ctaLink: 'https://t.me/krabik_666',
}

export const hero: HeroSection = {
  title: 'Создаём сайты и боты, которые продают',
  subtitle: 'От лендинга до интернет-магазина за 3-7 дней. Реальный результат для вашего бизнеса.',
  backgroundImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  primaryButton: {
    text: 'Выбрать тариф',
    href: '#services',
  },
  secondaryButton: {
    text: 'Посмотреть кейсы',
    href: '#portfolio',
  },
}

export const about: AboutSection = {
  title: 'Как я работаю',
  description: 'За <strong>5 лет</strong> я понял: успешный сайт — это не просто красивая картинка. Это <strong>система, которая работает на ваш бизнес 24/7</strong>.',
  features: [
    {
      title: 'Дизайн, который конвертирует',
      description: 'Каждый элемент интерфейса должен вести к <strong>действию</strong>. Я создаю дизайн, который не просто нравится, а приносит <strong>реальные продажи</strong>.',
      icon: 'design',
    },
    {
      title: 'Изучаю ваш бизнес изнутри',
      description: 'Перед началом работы я анализирую вашу <strong>нишу, конкурентов и аудиторию</strong>. Это позволяет создавать <strong>решения, а не шаблоны</strong>.',
      icon: 'business',
    },
    {
      title: 'Быстро и по делу',
      description: '<strong>3-7 дней</strong> на проект — не маркетинг, а реальность. Я ценю ваше время и запускаю проекты в срок, потому что знаю: <strong>каждый день промедления — потерянные клиенты</strong>.',
      icon: 'speed',
    },
    {
      title: 'Полная прозрачность',
      description: 'Вы видите <strong>каждый этап работы</strong>. Никаких сюрпризов с ценами или сроками. Только <strong>честное партнерство и результат</strong>.',
      icon: 'price',
    },
  ],
}

export const portfolio = {
  title: 'Наши проекты',
  description: 'Реальные кейсы с измеримыми результатами для наших клиентов',
  projects: [
    {
      id: 1,
      title: 'Сайт для кофейни Kakaomama',
      description: 'Создали современный сайт для сети кофеен с онлайн-меню, системой заказов и удобной навигацией по разделам. Результат: увеличение онлайн-заказов на 45%.',
      image: '/images/portfolio/kakaomama.png',
      link: 'https://kakaomama.vercel.app/',
      category: 'Сайт',
      result: '+45% заказов',
    },
    {
      id: 2,
      title: 'Магазин одежды Tatwole',
      description: 'Разработали полноценный интернет-магазин с каталогом, фильтрами и онлайн-оплатой. Современный дизайн и удобная навигация. Конверсия выросла в 2 раза.',
      image: '/images/portfolio/tatwole-mode.png',
      link: 'https://tatwole.vercel.app/',
      category: 'Интернет-магазин',
      result: '2x конверсия',
    },
    {
      id: 3,
      title: 'Сервис ремонта техники',
      description: 'Создали продающий лендинг для сервиса ремонта техники. Четкая структура и акцент на преимуществах. Увеличили количество заявок на 80% в первый месяц.',
      image: '/images/portfolio/tech-repair.png',
      link: 'https://tech-repair.vercel.app/',
      category: 'Лендинг',
      result: '+80% заявок',
    },
    {
      id: 4,
      title: 'Reflecty - Платформа для рефлексии',
      description: 'Разработали веб-приложение для ведения дневника рефлексии. Интуитивный интерфейс и удобная система записей помогают пользователям регулярно анализировать свой опыт.',
      image: '/images/portfolio/reflecty.png',
      link: 'https://reflecty.ru/',
      category: 'Веб-приложение',
      result: '70% удержание',
    },
    {
      id: 5,
      title: 'Pomodoro Timer',
      description: 'Создали минималистичное веб-приложение для тайм-менеджмента по методу Pomodoro. Чистый дизайн и удобные настройки помогают пользователям сохранять продуктивность.',
      image: '/images/portfolio/pomodoro-timer.png',
      link: 'https://pomodoro-timer-rosy-xi.vercel.app/',
      category: 'Веб-приложение',
      result: '85% эффективность',
    },
  ],
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Лендинг',
    description: 'Идеальное решение для запуска продукта, сбора заявок или создания онлайн-портфолио. Максимум конверсии на одной странице.',
    price: 'от 10 000 ₽',
    duration: '3-5 дней',
    features: ['Продающий дизайн', 'Сбор заявок (форма)', 'Адаптация под мобильные', 'SEO-оптимизация', 'Интеграция онлайн-оплаты'],
    example: {
      title: 'Лендинг кофейни',
      link: '#',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    ctaText: 'Заказать лендинг',
    ctaMessage: 'Хочу сайт: Лендинг\nПожелания: ...\nБюджет: ...',
    icon: '🎯',
  },
  {
    id: 2,
    title: 'Многостраничный сайт',
    description: 'Полноценный сайт для вашего бизнеса: корпоративный портал, каталог или небольшой интернет-магазин.',
    price: 'от 20 000 ₽',
    duration: '7-14 дней',
    features: ['Каталог товаров/услуг', 'Система управления (CMS)', 'Интеграция с сервисами', 'Корзина', 'Интеграция онлайн-оплаты'],
    example: {
      title: 'Интернет-магазин',
      link: '#',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
    },
    ctaText: 'Заказать сайт',
    ctaMessage: 'Хочу сайт: Многостраничный\nПожелания: ...\nБюджет: ...',
    icon: '🛍️',
  },
  {
    id: 3,
    title: 'Индивидуальный проект',
    description: 'Разработка сложного функционала под ваши уникальные задачи: веб-приложения, CRM, Telegram-боты и нестандартные решения.',
    price: 'по запросу',
    duration: 'Срок индивидуален',
    features: ['Уникальный дизайн и логика', 'Интеграция с API', 'Базы данных', 'Масштабируемая архитектура', 'Панель администратора'],
    example: {
      title: 'CRM система',
      link: '#',
      image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80',
    },
    ctaText: 'Обсудить проект',
    ctaMessage: 'Хочу проект: Индивидуальный\nОписание: ...\nБюджет: ...',
    icon: '🛠️',
  },
]

export const cta = {
  title: 'Обсудим ваш проект в Telegram?',
  description: 'Отвечаю в течение 10 минут',
  buttonText: '@krabik_666',
  buttonLink: 'https://t.me/krabik_666',
}

export const contact: ContactSection = {
  title: 'Есть идея? Давайте обсудим',
  description: 'Я всегда на связи в Telegram и готов ответить на любые вопросы. Расскажите о своей задаче, и вместе мы найдем лучшее решение для вашего бизнеса.',
  telegram: {
    username: '@krabik_666',
    link: 'https://t.me/krabik_666',
  },
  social: [
    {
      name: 'Instagram',
      link: 'https://instagram.com/lion.dev',
      icon: 'instagram',
    },
    {
      name: 'TikTok',
      link: 'https://tiktok.com/@lion.dev',
      icon: 'tiktok',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/krabik_666',
      icon: 'telegram',
    },
  ],
}

export const footer: FooterData = {
  links: [
    {
      title: 'Услуги',
      items: [
        { title: 'Лендинги', href: '#services' },
        { title: 'Сайты', href: '#services' },
        { title: 'Магазины', href: '#services' },
        { title: 'Telegram-боты', href: '#services' },
      ],
    },
    {
      title: 'Студия',
      items: [
        { title: 'О нас', href: '#about' },
        { title: 'Портфолио', href: '#portfolio' },
        { title: 'Контакты', href: '#contact' },
      ],
    },
  ],
  social: [
    {
      title: 'Соцсети',
      items: [
        { title: 'Instagram', href: 'https://instagram.com/lion.dev' },
        { title: 'TikTok', href: 'https://tiktok.com/@lion.dev' },
        { title: 'Telegram', href: 'https://t.me/krabik_666' },
      ],
    },
  ],
  copyright: '© 2025 Lion.dev. Все права защищены.',
} 