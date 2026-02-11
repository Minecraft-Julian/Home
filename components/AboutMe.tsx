import { useState, useEffect } from 'react'
import styles from '../styles/AboutMe.module.css'

interface AboutMeProps {
  isAdminMode: boolean
}

export default function AboutMe({ isAdminMode }: AboutMeProps) {
  const [aboutText, setAboutText] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [tempText, setTempText] = useState('')

  useEffect(() => {
    // Load about text from localStorage
    const saved = localStorage.getItem('aboutMe')
    if (saved) {
      setAboutText(saved)
    } else {
      setAboutText('Welcome to my channel! I create Minecraft content including gameplay videos, tutorials, and custom worlds.')
    }
  }, [])

  const handleEdit = () => {
    setTempText(aboutText)
    setIsEditing(true)
  }

  const handleSave = () => {
    setAboutText(tempText)
    localStorage.setItem('aboutMe', tempText)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setTempText('')
  }

  return (
    <section className={styles.aboutMe}>
      <h2>About Me</h2>
      {isEditing ? (
        <div className={styles.editMode}>
          <textarea
            value={tempText}
            onChange={(e) => setTempText(e.target.value)}
            className={styles.textarea}
            rows={6}
          />
          <div className={styles.buttons}>
            <button onClick={handleSave} className={styles.saveButton}>Save</button>
            <button onClick={handleCancel} className={styles.cancelButton}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className={styles.viewMode}>
          <p>{aboutText}</p>
          {isAdminMode && (
            <button onClick={handleEdit} className={styles.editButton}>Edit</button>
          )}
        </div>
      )}
    </section>
  )
}
