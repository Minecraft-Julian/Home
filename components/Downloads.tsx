import { useState, useEffect } from 'react'
import styles from '../styles/Downloads.module.css'

interface Download {
  id: string
  name: string
  type: 'world' | 'modpack'
  description: string
  downloadUrl: string
  size: string
  downloads: string
}

export default function Downloads() {
  const [downloads, setDownloads] = useState<Download[]>([])

  useEffect(() => {
    // Load downloads from localStorage
    const saved = localStorage.getItem('downloads')
    if (saved) {
      setDownloads(JSON.parse(saved))
    } else {
      // Default downloads
      setDownloads([
        {
          id: '1',
          name: 'Epic Castle World',
          type: 'world',
          description: 'A massive medieval castle with dungeons and secret passages',
          downloadUrl: '/downloads/castle-world.zip',
          size: '45 MB',
          downloads: '1.2K'
        },
        {
          id: '2',
          name: 'Tech Modpack',
          type: 'modpack',
          description: 'Technology-focused modpack with automation and machinery',
          downloadUrl: '/downloads/tech-modpack.zip',
          size: '120 MB',
          downloads: '3.5K'
        },
        {
          id: '3',
          name: 'Survival Island World',
          type: 'world',
          description: 'Start on a small island and survive!',
          downloadUrl: '/downloads/island-world.zip',
          size: '30 MB',
          downloads: '890'
        }
      ])
    }
  }, [])

  return (
    <div className={styles.downloadsGrid}>
      {downloads.map(item => (
        <div key={item.id} className={styles.downloadCard}>
          <div className={styles.typeBadge}>
            {item.type === 'world' ? '🌍 World' : '📦 Modpack'}
          </div>
          <h3>{item.name}</h3>
          <p className={styles.description}>{item.description}</p>
          <div className={styles.meta}>
            <span>Size: {item.size}</span>
            <span>{item.downloads} downloads</span>
          </div>
          <a href={item.downloadUrl} download className={styles.downloadButton}>
            Download
          </a>
        </div>
      ))}
    </div>
  )
}
