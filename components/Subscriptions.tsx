import { useState, useEffect } from 'react'
import styles from '../styles/Subscriptions.module.css'

interface Subscription {
  id: string
  channelName: string
  channelUrl: string
  subscribers: string
  avatar: string
}

export default function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([])

  useEffect(() => {
    // Load subscriptions from localStorage
    const saved = localStorage.getItem('subscriptions')
    if (saved) {
      setSubscriptions(JSON.parse(saved))
    } else {
      // Default subscriptions
      setSubscriptions([
        {
          id: '1',
          channelName: 'Minecraft Official',
          channelUrl: 'https://youtube.com',
          subscribers: '1M',
          avatar: '/placeholder-avatar.png'
        },
        {
          id: '2',
          channelName: 'Redstone Masters',
          channelUrl: 'https://youtube.com',
          subscribers: '500K',
          avatar: '/placeholder-avatar.png'
        },
        {
          id: '3',
          channelName: 'Build Academy',
          channelUrl: 'https://youtube.com',
          subscribers: '750K',
          avatar: '/placeholder-avatar.png'
        }
      ])
    }
  }, [])

  return (
    <div className={styles.subscriptionsGrid}>
      {subscriptions.map(sub => (
        <div key={sub.id} className={styles.subCard}>
          <img src={sub.avatar} alt={sub.channelName} className={styles.avatar} />
          <div className={styles.subInfo}>
            <h4>{sub.channelName}</h4>
            <p>{sub.subscribers} subscribers</p>
            <a href={sub.channelUrl} target="_blank" rel="noopener noreferrer" className={styles.visitButton}>
              Visit Channel
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
