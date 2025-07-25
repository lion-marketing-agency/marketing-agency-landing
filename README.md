# Simple Landing Template (Next + TailwindCSS)

Лендинг портфолио / студии разработки сайтов . 

## 🚀 Особенности

- 💨 TailwindCSS для стилизации  
- 🔠 TypeScript + модульная архитектура  
- 🌐 SEO-оптимизированная структура  
- 🧠 Весь текст вынесен в `src/content/`  
- 📁 Удобная и логичная файловая структура  

## 🧱 Основной стек технологий

- Next.js - 15.X — React-фреймворк с SSR и статической генерацией  
- TypeScript — типизация и безопасность кода  
- TailwindCSS — утилитарный CSS для быстрой стилизации  
- Framer Motion — анимации и плавные переходы  
- next/image — оптимизация и адаптивная загрузка изображений  
- next-seo — удобное управление SEO-мета-тегами  
- react-icons — библиотека иконок  
- dotenv — управление переменными окружения  
- React Hook Form + Yup — удобная работа с формами и их валидация (по необходимости)  
- React Context API или Zustand — управление состоянием (по необходимости)  
то

## 🔍 SEO

- Используется семантическая HTML-разметка (header, main, section, footer и т.д.)  
- Все тексты и мета-данные хранятся в `src/content/` для удобства управления и локализации  
- Оптимизированные изображения с правильными именами и alt-текстами  
- Предусмотрены теги `<title>`, `<meta description>`, Open Graph и другие мета-теги  
- Используется дружественный к SEO URL-формат  
- Быстрая загрузка благодаря TailwindCSS и оптимизации ресурсов  

## 📂 Структура

- `public/images/categoryX/` — изображения, сгруппированные по категориям  
- `public/logo/` — логотипы  
- `public/videos/categoryX/` — видеоконтент, сгруппированный по категориям  
- `src/content/` — текст и мета-данные в виде TS-модулей  

## 📁 Правила нейминга файлов

Для удобства поддержки и масштабирования используйте формат:

```

\[тип]-\[описание]-\[атрибут]-\[номер].\[расширение]

```

- **тип** — тип файла: img, video, logo, icon, testimonial и др.  
- **описание** — что изображено или назначение, например: man, sneaker, contact, phone, background 
- **атрибут** — цвет, размер, версия, категория (black, mobile, 01 и т.п.)  
- **номер** — индекс для нескольких похожих файлов  
- Используйте **нижний регистр** и дефисы `-` вместо пробелов  

### Примеры:

- `img-hero-main-bg.webp`  
- `logo-black.svg`  
- `img-sneaker-white-01.jpg`  
- `video-product-demo-01.mp4`  
- `testimonial-vanya-01.jpg`  
- `icon-instagram.svg`  


## 🎨 Best Practices по стилям (Tailwind)

* Все стили — через Tailwind utility-классы прямо в JSX
* Общие токены (цвета, шрифты, отступы) — в `tailwind.config.ts`
* Глобальные стили и импорты — в `globals.css`
* Условные классы — через `clsx`
* Повторяющиеся классы — выносить в `utils/classnames.ts`
* Не использовать кастомный CSS без необходимости
* Поддержка адаптива и тёмной темы — прямо в классах (`md:`, `dark:`)

---

## 📋 TODO

### Контент и изображения
- [x] Заменить текста в портфолио на настоящие
- [ ] Заменить картинки в тарифах на подходящие
- [ ] Заменить emoji на нормальные иконки в тарифах
- [ ] Использовать настоящие ссылки на соц сети в футере

### UI/UX улучшения
- [x] В портфолио отдалить от карусели управляющие стрелки
- [ ] Убрать иконки соц-сетей в контактах
- [ ] В портфолио добавить рамку отделяющую скриншот сайта от интерфейса
- [x] В тарифах убрать выделение тарифа "Индивидуальный проект"
- [ ] При наведении на скриншот сайта выводить кнопку по центру для того чтобы пользователь мог перейти и посмотреть

### Функциональность
- [ ] При нажатии на "Сделать заказ" в услугах открывать конструктор сообщения
  - [ ] Список вариантов лендинга: "продажа продукта", портфолио, другое и т.д.
  - [ ] При нажатии на "Связаться" сообщение само вставляется в чат или дать скопировать

### Контент и тексты
- [x] Поправить сроки и цены в тарифах
- [ ] Добавить секцию или в контакты инфу о том, что за рекомендацию другу даю 30% от заказа
- [x] Поправить текста в "Как я работаю", чтобы они были более реалистичные и соответствовали реальности
- [x] В тарифах заменить "Выберите подходящий формат для вашего проекта" на "Выберите подходящее решение для вашей задачи"

### Навигация
- [x] Заменить в навигации "Портфолио" на "Результаты"
- [x] В секции портфолио заменить заголовок "Результаты" на "Примеры работ"

