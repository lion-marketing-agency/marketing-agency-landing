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
  title: 'Почему выбирают нас',
  description: 'Мы не просто делаем красивые сайты — мы создаём инструменты для роста вашего бизнеса. Каждый проект — это решение конкретной задачи с измеримым результатом.',
  features: [
    {
      title: 'Продающий дизайн',
      description: 'Создаём не просто красивые сайты, а инструменты, которые конвертируют посетителей в клиентов.',
      icon: '🎯',
    },
    {
      title: 'Глубокое понимание бизнеса',
      description: 'Изучаем вашу нишу, конкурентов и целевую аудиторию для создания максимально эффективных решений.',
      icon: '🧠',
    },
    {
      title: 'Скорость запуска',
      description: 'От идеи до работающего сайта за 3-7 дней. Быстрый старт для быстрого роста.',
      icon: '⚡',
    },
    {
      title: 'Прозрачные цены',
      description: 'Фиксированная стоимость без скрытых доплат. Знаете итоговую сумму до начала работы.',
      icon: '💰',
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
      image: '/images/portfolio/1.png',
      link: 'https://kakaomama.vercel.app/',
      category: 'Сайт',
      result: '+45% заказов',
    },
    {
      id: 2,
      title: 'Магазин одежды Tatwole',
      description: 'Разработали полноценный интернет-магазин с каталогом, фильтрами и онлайн-оплатой. Современный дизайн и удобная навигация. Конверсия выросла в 2 раза.',
      image: '/images/portfolio/2.png',
      link: 'https://tatwole.vercel.app/',
      category: 'Интернет-магазин',
      result: '2x конверсия',
    },
    {
      id: 3,
      title: 'Сервис ремонта техники',
      description: 'Создали продающий лендинг для сервиса ремонта техники. Четкая структура и акцент на преимуществах. Увеличили количество заявок на 80% в первый месяц.',
      image: '/images/portfolio/3.png',
      link: 'https://tech-repair.vercel.app/',
      category: 'Лендинг',
      result: '+80% заявок',
    },
    {
      id: 4,
      title: 'Reflecty - Платформа для рефлексии',
      description: 'Разработали веб-приложение для ведения дневника рефлексии. Интуитивный интерфейс и удобная система записей помогают пользователям регулярно анализировать свой опыт.',
      image: '/images/portfolio/4.png',
      link: 'https://reflecty.ru/',
      category: 'Веб-приложение',
      result: '70% удержание',
    },
    {
      id: 5,
      title: 'Pomodoro Timer',
      description: 'Создали минималистичное веб-приложение для тайм-менеджмента по методу Pomodoro. Чистый дизайн и удобные настройки помогают пользователям сохранять продуктивность.',
      image: '/images/portfolio/5.png',
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
    description: 'Продающая страница для вашего продукта или услуги. Быстрый запуск, высокая конверсия.',
    price: 'от 15 000 ₽',
    duration: '3-5 дней',
    features: ['Адаптивный дизайн', 'Форма заявки', 'SEO-оптимизация', 'Аналитика'],
    example: {
      title: 'Лендинг кофейни',
      link: '#',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    },
    ctaText: 'Хочу лендинг',
    ctaMessage: 'Хочу сайт: Лендинг\nПожелания: ...\nБюджет: ...',
    icon: '🖥️',
  },
  {
    id: 2,
    title: 'Сайт по шаблону',
    description: 'Корпоративный сайт на основе готового шаблона. Оптимальное соотношение цена/качество.',
    price: 'от 25 000 ₽',
    duration: '5-7 дней',
    features: ['До 10 страниц', 'CMS для управления', 'Блог', 'Контакты'],
    example: {
      title: 'Сайт студии',
      link: '#',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    },
    ctaText: 'Хочу сайт',
    ctaMessage: 'Хочу сайт: Сайт по шаблону\nПожелания: ...\nБюджет: ...',
    icon: '🧩',
  },
  {
    id: 3,
    title: 'Интернет-магазин',
    description: 'Полнофункциональный магазин с корзиной, оплатой и управлением товарами.',
    price: 'от 45 000 ₽',
    duration: '7-14 дней',
    features: ['Каталог товаров', 'Корзина и оплата', 'Личный кабинет', 'CRM'],
    example: {
      title: 'Магазин косметики',
      link: '#',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
    },
    ctaText: 'Хочу магазин',
    ctaMessage: 'Хочу сайт: Интернет-магазин\nПожелания: ...\nБюджет: ...',
    icon: '🛍️',
  },
  {
    id: 4,
    title: 'Telegram-бот',
    description: 'Автоматизация бизнес-процессов через Telegram. Заказы, уведомления, рассылки.',
    price: 'от 20 000 ₽',
    duration: '3-7 дней',
    features: ['Автоматические ответы', 'Обработка заказов', 'База данных', 'Админ-панель'],
    example: {
      title: 'Бот доставки',
      link: '#',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    },
    ctaText: 'Хочу бота',
    ctaMessage: 'Хочу бота: Telegram-бот\nПожелания: ...\nБюджет: ...',
    icon: '🤖',
  },
  {
    id: 5,
    title: 'Индивидуальный проект',
    description: 'Уникальное решение под ваши задачи. От простых сайтов до сложных веб-приложений.',
    price: 'от 80 000 ₽',
    duration: 'от 14 дней',
    features: ['Уникальный дизайн', 'Сложная логика', 'API интеграции', 'Масштабируемость'],
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
  title: 'Свяжитесь с нами',
  description: 'Готовы обсудить ваш проект? Выберите удобный способ связи.',
  telegram: {
    username: '@krabik_666',
    link: 'https://t.me/krabik_666',
  },
  email: 'hello@lion.dev',
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