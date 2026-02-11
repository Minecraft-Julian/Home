import { useState, useEffect } from 'react'
import styles from '../styles/VideosSection.module.css'

interface Video {
  id: string
  title: string
  thumbnail: string
  url: string
  views: string
  date: string
}

interface VideosSectionProps {
  searchQuery: string
}

export default function VideosSection({ searchQuery }: VideosSectionProps) {
  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    // Load videos from localStorage
    const saved = localStorage.getItem('videos')
    if (saved) {
      setVideos(JSON.parse(saved))
    } else {
      // Default videos
      setVideos([
        {
          id: '1',
          title: 'Minecraft Survival Series - Episode 1',
          thumbnail: '/placeholder-video.png',
          url: 'https://youtube.com',
          views: '10K',
          date: '2 weeks ago'
        },
        {
          id: '2',
          title: 'Building a Castle in Minecraft',
          thumbnail: '/placeholder-video.png',
          url: 'https://youtube.com',
          views: '25K',
          date: '1 month ago'
        },
        {
          id: '3',
          title: 'Redstone Tutorial - Auto Farm',
          thumbnail: '/placeholder-video.png',
          url: 'https://youtube.com',
          views: '15K',
          date: '3 weeks ago'
        }
      ])
    }
  }, [])

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className={styles.videosGrid}>
      {filteredVideos.map(video => (
        <div key={video.id} className={styles.videoCard}>
          <img src={video.thumbnail} alt={video.title} className={styles.thumbnail} />
          <div className={styles.videoInfo}>
            <h3>{video.title}</h3>
            <p>{video.views} views • {video.date}</p>
            <a href={video.url} target="_blank" rel="noopener noreferrer" className={styles.watchButton}>
              Watch Video
            </a>
          </div>
        </div>
      ))}
      {filteredVideos.length === 0 && (
        <p className={styles.noResults}>No videos found</p>
      )}
    </div>
  )
}
