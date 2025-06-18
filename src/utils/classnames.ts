import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Функция для генерации цвета фона аватарки на основе имени
export function getAvatarColor(name: string): string {
  const colors = [
    'ffdfbf', // тёплый бежевый
    'e8f4fd', // нежный голубой
    'f0f8ff', // светло-голубой
    'fff0f6', // нежно-розовый
    'f0fff0', // светло-зелёный
    'fff8dc', // светло-жёлтый
    'f5f5dc', // бежевый
    'ffe4e1', // светло-розовый
    'e6e6fa', // лавандовый
    'f0e68c', // светло-жёлтый
  ]
  
  // Создаём хеш из имени для получения стабильного цвета
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  
  // Используем абсолютное значение хеша для выбора цвета
  const index = Math.abs(hash) % colors.length
  return colors[index]
}

// Функция для генерации женской аватарки (без бороды, длинные волосы)
export function getFemaleAvatarUrl(seed: string, backgroundColor: string): string {
  return `https://api.dicebear.com/7.x/notionists/svg?seed=${seed}&backgroundColor=${backgroundColor}&beardProbability=0&hair=variant01,variant02,variant03,variant04,variant05,variant06,variant07,variant08,variant09,variant10`
}

// Функция для генерации мужской аватарки (с бородой, короткие волосы)
export function getMaleAvatarUrl(seed: string, backgroundColor: string): string {
  return `https://api.dicebear.com/7.x/notionists/svg?seed=${seed}&backgroundColor=${backgroundColor}&beardProbability=50&beard=variant01,variant02,variant03,variant04,variant05,variant06,variant07,variant08,variant09,variant10,variant11,variant12&hair=variant11,variant12,variant13,variant14,variant15,variant16,variant17,variant18,variant19,variant20`
}

// Универсальная функция для генерации аватарки с автоматическим определением пола
export function getAvatarUrl(name: string, gender?: 'male' | 'female'): string {
  const color = getAvatarColor(name)
  const seed = name.toLowerCase().replace(/\s+/g, '')
  
  // Если пол не указан, пытаемся определить по имени
  if (!gender) {
    const femaleNames = ['анна', 'елена', 'мария', 'ольга', 'наталья', 'ирина', 'светлана', 'юлия', 'татьяна', 'екатерина']
    
    const normalizedName = name.toLowerCase().split(' ')[0] // берем первое имя
    gender = femaleNames.includes(normalizedName) ? 'female' : 'male'
  }
  
  return gender === 'female' 
    ? getFemaleAvatarUrl(seed, color)
    : getMaleAvatarUrl(seed, color)
} 