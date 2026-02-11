import { useState, useEffect } from 'react'
import styles from '../styles/ShortsSection.module.css'

interface Short {
  id: string
  title: string
  thumbnail: string
  url: string
  views: string
}

interface ShortsSectionProps {
  searchQuery: string
}

export default function ShortsSection({ searchQuery }: ShortsSectionProps) {
  const [shorts, setShorts] = useState<Short[]>([])

  useEffect(() => {
    // Load shorts from localStorage
    const saved = localStorage.getItem('shorts')
    if (saved) {
      setShorts(JSON.parse(saved))
    } else {
      // Default shorts
      setShorts([
        {
          id: '1',
          title: 'Quick Minecraft Trick #1',
          thumbnail: '/placeholder-short.png',
          url: 'https://youtube.com',
          views: '50K'
        },
        {
          id: '2',
          title: 'Epic Minecraft Moment',
          thumbnail: '/placeholder-short.png',
          url: 'https://youtube.com',
          views: '75K'
        },
        {
          id: '3',
          title: 'Minecraft Building Tip',
          thumbnail: '/placeholder-short.png',
          url: 'https://youtube.com',
          views: '30K'
        }
      ])
    }
  }, [])

  const filteredShorts = shorts.filter(short =>
    short.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className={styles.shortsGrid}>
      {filteredShorts.map(short => (
        <div key={short.id} className={styles.shortCard}>
          <img src={short.thumbnail} alt={short.title} className={styles.thumbnail} />
          <div className={styles.shortInfo}>
            <h4>{short.title}</h4>
            <p>{short.views} views</p>
            <a href={short.url} target="_blank" rel="noopener noreferrer" className={styles.watchButton}>
              Watch
            </a>
          </div>
        </div>
      ))}
      {filteredShorts.length === 0 && (
        <p className={styles.noResults}>No shorts found</p>
      )}
    </div>
  )
}
