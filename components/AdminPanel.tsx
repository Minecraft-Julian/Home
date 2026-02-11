import { useState } from 'react'
import styles from '../styles/AdminPanel.module.css'

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<'videos' | 'shorts' | 'downloads' | 'subscriptions'>('videos')
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    thumbnail: '',
    description: '',
    type: 'world',
    size: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleAddVideo = () => {
    const videos = JSON.parse(localStorage.getItem('videos') || '[]')
    const newVideo = {
      id: Date.now().toString(),
      title: formData.title,
      thumbnail: formData.thumbnail || '/placeholder-video.png',
      url: formData.url,
      views: '0',
      date: 'Just now'
    }
    videos.push(newVideo)
    localStorage.setItem('videos', JSON.stringify(videos))
    alert('Video added successfully!')
    setFormData({ ...formData, title: '', url: '', thumbnail: '' })
  }

  const handleAddShort = () => {
    const shorts = JSON.parse(localStorage.getItem('shorts') || '[]')
    const newShort = {
      id: Date.now().toString(),
      title: formData.title,
      thumbnail: formData.thumbnail || '/placeholder-short.png',
      url: formData.url,
      views: '0'
    }
    shorts.push(newShort)
    localStorage.setItem('shorts', JSON.stringify(shorts))
    alert('Short added successfully!')
    setFormData({ ...formData, title: '', url: '', thumbnail: '' })
  }

  const handleAddDownload = () => {
    const downloads = JSON.parse(localStorage.getItem('downloads') || '[]')
    const newDownload = {
      id: Date.now().toString(),
      name: formData.title,
      type: formData.type,
      description: formData.description,
      downloadUrl: formData.url,
      size: formData.size,
      downloads: '0'
    }
    downloads.push(newDownload)
    localStorage.setItem('downloads', JSON.stringify(downloads))
    alert('Download added successfully!')
    setFormData({ ...formData, title: '', url: '', description: '', size: '' })
  }

  const handleAddSubscription = () => {
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]')
    const newSub = {
      id: Date.now().toString(),
      channelName: formData.title,
      channelUrl: formData.url,
      subscribers: '0',
      avatar: formData.thumbnail || '/placeholder-avatar.png'
    }
    subscriptions.push(newSub)
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions))
    alert('Subscription added successfully!')
    setFormData({ ...formData, title: '', url: '', thumbnail: '' })
  }

  return (
    <div className={styles.adminPanel}>
      <h2>Admin Panel</h2>
      <div className={styles.tabs}>
        <button 
          className={activeTab === 'videos' ? styles.activeTab : ''}
          onClick={() => setActiveTab('videos')}
        >
          Add Video
        </button>
        <button 
          className={activeTab === 'shorts' ? styles.activeTab : ''}
          onClick={() => setActiveTab('shorts')}
        >
          Add Short
        </button>
        <button 
          className={activeTab === 'downloads' ? styles.activeTab : ''}
          onClick={() => setActiveTab('downloads')}
        >
          Add Download
        </button>
        <button 
          className={activeTab === 'subscriptions' ? styles.activeTab : ''}
          onClick={() => setActiveTab('subscriptions')}
        >
          Add Subscription
        </button>
      </div>

      <div className={styles.formContainer}>
        {activeTab === 'videos' && (
          <div className={styles.form}>
            <input
              type="text"
              name="title"
              placeholder="Video Title"
              value={formData.title}
              onChange={handleInputChange}
              className={styles.input}
            />
            <input
              type="text"
              name="url"
              placeholder="Video URL"
              value={formData.url}
              onChange={handleInputChange}
              className={styles.input}
            />
            <input
              type="text"
              name="thumbnail"
              placeholder="Thumbnail URL (optional)"
              value={formData.thumbnail}
              onChange={handleInputChange}
              className={styles.input}
            />
            <button onClick={handleAddVideo} className={styles.submitButton}>
              Add Video
            </button>
          </div>
        )}

        {activeTab === 'shorts' && (
          <div className={styles.form}>
            <input
              type="text"
              name="title"
              placeholder="Short Title"
              value={formData.title}
              onChange={handleInputChange}
              className={styles.input}
            />
            <input
              type="text"
              name="url"
              placeholder="Short URL"
              value={formData.url}
              onChange={handleInputChange}
              className={styles.input}
            />
            <input
              type="text"
              name="thumbnail"
              placeholder="Thumbnail URL (optional)"
              value={formData.thumbnail}
              onChange={handleInputChange}
              className={styles.input}
            />
            <button onClick={handleAddShort} className={styles.submitButton}>
              Add Short
            </button>
          </div>
        )}

        {activeTab === 'downloads' && (
          <div className={styles.form}>
            <input
              type="text"
              name="title"
              placeholder="Name"
              value={formData.title}
              onChange={handleInputChange}
              className={styles.input}
            />
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className={styles.input}
            >
              <option value="world">World</option>
              <option value="modpack">Modpack</option>
            </select>
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              className={styles.textarea}
              rows={3}
            />
            <input
              type="text"
              name="url"
              placeholder="Download URL"
              value={formData.url}
              onChange={handleInputChange}
              className={styles.input}
            />
            <input
              type="text"
              name="size"
              placeholder="File Size (e.g., 45 MB)"
              value={formData.size}
              onChange={handleInputChange}
              className={styles.input}
            />
            <button onClick={handleAddDownload} className={styles.submitButton}>
              Add Download
            </button>
          </div>
        )}

        {activeTab === 'subscriptions' && (
          <div className={styles.form}>
            <input
              type="text"
              name="title"
              placeholder="Channel Name"
              value={formData.title}
              onChange={handleInputChange}
              className={styles.input}
            />
            <input
              type="text"
              name="url"
              placeholder="Channel URL"
              value={formData.url}
              onChange={handleInputChange}
              className={styles.input}
            />
            <input
              type="text"
              name="thumbnail"
              placeholder="Avatar URL (optional)"
              value={formData.thumbnail}
              onChange={handleInputChange}
              className={styles.input}
            />
            <button onClick={handleAddSubscription} className={styles.submitButton}>
              Add Subscription
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
