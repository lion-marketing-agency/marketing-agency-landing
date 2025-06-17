import { MetaData, HeroSection, Product, Testimonial, ContactSection, FooterData, Header } from './types'
import { getAvatarUrl } from '@/utils/classnames'

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
    id: 17,
    name: 'Виолетта Антонова',
    role: 'Кофеман',
    content: 'Очень свежий и вкусный салат! Много зелени, сочные помидоры и легкая заправка. Отличный вариант для тех, кто следит за фигурой. Идеальное дополнение к кофе.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-violeta-antonova-01.png',
    avatar: getAvatarUrl('Виолетта Антонова', 'female')
  },
  {
    id: 24,
    name: 'Верв Богатырева',
    role: 'Кофейный критик',
    content: 'Мой идеальный завтрак: свежий круассан с лососем и ароматный капучино. Всегда прихожу сюда за этим комбо. Качество еды и напитков всегда на высоте.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-verv-bogatyreva-01.png',
    avatar: getAvatarUrl('Верв Богатырева', 'female')
  },
  {
    id: 8,
    name: 'Ольга Пешкова',
    role: 'Кофейный эксперт',
    content: 'Очень просторно и уютно! Здесь много мест, где можно уединиться или, наоборот, пообщаться. Приятно провести время в такой стильной и комфортной обстановке. Мне нравится, как свет падает.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-olga-peshkova-01.png',
    avatar: getAvatarUrl('Ольга Пешкова', 'female')
  },
  {
    id: 6,
    name: 'Мария Сидорцова',
    role: 'Дизайнер',
    content: 'Детали интерьера здесь просто завораживают! Особенно понравилась эта бумажная сова - очень мило и креативно. Создает уютную и необычную атмосферу.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-mariya-sidortsova-01.png',
    avatar: getAvatarUrl('Мария Сидорцова', 'female')
  },
  {
    id: 10,
    name: 'Татьяна Литвинова',
    role: 'Кофеман',
    content: 'Пришли сюда с друзьями, и каждый нашел что-то по вкусу! Я брала сэндвич, а друзья - круассан и тосты. Все очень свежее и вкусное. Отличное место для завтрака или бранча.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-tatyana-litvinova-01.png',
    avatar: getAvatarUrl('Татьяна Литвинова', 'female')
  },
  {
    id: 22,
    name: 'Николай Асриянц',
    role: 'Программист',
    content: 'Отличное место для работы или учебы. Много пространства, удобные столы. Можно спокойно посидеть с ноутбуком. Приятная атмосфера, не отвлекает от дел.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-nikolay-asriyants-01.png',
    avatar: getAvatarUrl('Николай Асриянц', 'male')
  },
  {
    id: 18,
    name: 'Наташа Бакина',
    role: 'Фрилансер',
    content: 'Брала брускетту с лососем и яйцом пашот - это нереально вкусно! Свежий хлеб, нежный лосось и идеально приготовленное яйцо. И облепиховый чай из френч-пресса отлично дополнил завтрак.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-natasha-bakina-01.png',
    avatar: getAvatarUrl('Наташа Бакина', 'female')
  },
  {
    id: 3,
    name: 'Иван Телин',
    role: 'Фрилансер',
    content: 'В этой кофейне чувствуется забота о клиентах! Бариста очень внимательные и профессиональные. Приятно наблюдать за их работой, пока ждешь свой заказ. Отличное обслуживание!',
    rating: 5,
    image: '/images/testimonials/img-testimonial-ivan-telin-01.png',
    avatar: getAvatarUrl('Иван Телин', 'male')
  },
  {
    id: 1,
    name: 'Maksim Mihaylov',
    role: 'Постоянный клиент',
    content: 'Пробовал их круассан с лососем и сливочным сыром - это просто восторг! Свежайший круассан, нежный лосось и воздушный сыр, украшенный микрозеленью. Идеальный завтрак или легкий перекус. Очень рекомендую!',
    rating: 5,
    image: '/images/testimonials/img-testimonial-maksim-mihaylov-01.png',
    avatar: getAvatarUrl('Maksim Mihaylov', 'male')
  },
  {
    id: 2,
    name: 'Мария Кравцова',
    role: 'Кофеман',
    content: 'Прекрасная атмосфера! Интерьер очень уютный, с интересными деталями и удобными зонами для отдыха. Бирюзовые элементы создают особую изюминку. Чувствуешь себя как дома.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-mariya-kravtsova-01.png',
    avatar: getAvatarUrl('Мария Кравцова', 'female')
  },
  {
    id: 4,
    name: 'Игорь Тришкин',
    role: 'Предприниматель',
    content: 'Их латте - это настоящее произведение искусства! Красивый рисунок на пенке и ароматный кофе. Каждый глоток доставляет удовольствие. Идеально с маленьким печеньем в форме сердца.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-igor-trishkin-01.png',
    avatar: getAvatarUrl('Игорь Тришкин', 'male')
  },
  {
    id: 5,
    name: 'Anna Taranenko',
    role: 'Студентка',
    content: 'Всегда беру кофе на вынос здесь. Удобно, быстро, и вкус всегда на высоте! Люблю их фирменную упаковку "Какао\'Мама". Отличный способ взбодриться в течение дня.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-anna-taranenko-01.png',
    avatar: getAvatarUrl('Anna Taranenko', 'female')
  },
  {
    id: 7,
    name: 'Анастасия Аданникова',
    role: 'Маркетолог',
    content: 'У них такой большой выбор напитков! Сегодня попробовала матча-латте и какой-то необычный ягодный напиток. Все очень вкусно и красиво оформлено. Настоящий рай для любителей кофе и не только!',
    rating: 5,
    image: '/images/testimonials/img-testimonial-anastasiya-adannikova-01.png',
    avatar: getAvatarUrl('Анастасия Аданникова', 'female')
  },
  {
    id: 11,
    name: 'Александра Кузнецова',
    role: 'Программист',
    content: 'Мой любимый напиток здесь - капучино. Всегда идеальный рисунок на пенке, что очень радует глаз. Вкус насыщенный, без горечи, а маленькое печенье - приятный комплимент.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-aleksandra-kuznetsova-01.png',
    avatar: getAvatarUrl('Александра Кузнецова', 'female')
  },
  {
    id: 12,
    name: 'Елена Рождественская',
    role: 'Предприниматель',
    content: 'Очень заметная и привлекательная вывеска! Пройти мимо этой кофейни невозможно. Всегда захожу, когда прохожу мимо. Входная группа создает очень гостеприимное впечатление.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-elena-rozhdestvenskaya-01.png',
    avatar: getAvatarUrl('Елена Рождественская', 'female')
  },
  {
    id: 13,
    name: 'Валентина Купцова',
    role: 'Кофейный критик',
    content: 'Заказала бургер и была приятно удивлена! Очень сочный, с хрустящей булочкой и свежими овощами. Начос и соус отлично дополняют вкус. Отличный вариант для плотного обеда.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-valentina-kuptsova-01.png',
    avatar: getAvatarUrl('Валентина Купцова', 'female')
  },
  {
    id: 14,
    name: 'Людмила Макаревич',
    role: 'Студентка',
    content: 'Отличный вид со второго этажа! Можно наблюдать за суетой внизу, наслаждаясь кофе. Очень уютно, много света и интересных деталей. Мне нравится этот ракурс.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-lyudmila-makarevich-01.png',
    avatar: getAvatarUrl('Людмила Макаревич', 'female')
  },
  {
    id: 15,
    name: 'Екатерина Шакуло',
    role: 'Дизайнер',
    content: 'Здесь всегда можно найти что-то необычное! Попробовала холодный кофе и нежный розовый латте. Оба напитка очень вкусные и фотогеничные. Разнообразие меню радует.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-ekaterina-shakulo-01.png',
    avatar: getAvatarUrl('Екатерина Шакуло', 'female')
  },
  {
    id: 19,
    name: 'Lenny Med',
    role: 'Предприниматель',
    content: 'Вечером здесь особенно уютно! Приглушенный свет, красивые лампы и теплое дерево. Идеальное место для расслабления после долгого дня. Мне нравится эта умиротворяющая атмосфера.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-lenny-med-01.png',
    avatar: getAvatarUrl('Lenny Med', 'male')
  },
  {
    id: 20,
    name: 'Екатерина Шерстнева',
    role: 'Кофейный эксперт',
    content: 'Попробовала новый напиток - очень необычный! Сверху какая-то красная присыпка, добавляет интересный акцент. Вкус насыщенный, с легкой кислинкой. Мне понравилось экспериментировать.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-ekaterina-sherstneva-01.png',
    avatar: getAvatarUrl('Екатерина Шерстнева', 'female')
  },
  {
    id: 21,
    name: 'Ольга Романова',
    role: 'Кофеман',
    content: 'Этот напиток выглядит как произведение искусства! Красивый рисунок на пенке и яркая красная присыпка. Вкус очень гармоничный и необычный. Хочется попробовать еще что-то из их авторского меню.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-olga-romanova-01.png',
    avatar: getAvatarUrl('Ольга Романова', 'female')
  },
  {
    id: 23,
    name: 'Алексей Кудимов',
    role: 'Предприниматель',
    content: 'Просторная и светлая кофейня! Даже при большом количестве людей нет ощущения тесноты. Мне нравится, как здесь организовано пространство. Уютно и комфортно.',
    rating: 5,
    image: '/images/testimonials/img-testimonial-aleksey-kudimov-01.png',
    avatar: getAvatarUrl('Алексей Кудимов', 'male')
  }
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