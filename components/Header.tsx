import { useState } from 'react'
import styles from '../styles/Header.module.css'

interface HeaderProps {
  onSearch: (query: string) => void
  isAdminMode: boolean
  onToggleAdmin: () => void
}

export default function Header({ onSearch, isAdminMode, onToggleAdmin }: HeaderProps) {
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchInput)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="Logo" className={styles.logoImage} />
        <h1>YouTube Creator</h1>
      </div>
      
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search videos..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>

      <div className={styles.adminToggle}>
        <button 
          onClick={onToggleAdmin}
          className={isAdminMode ? styles.adminActive : styles.adminInactive}
        >
          {isAdminMode ? '🔓 Admin Mode' : '🔒 Admin'}
        </button>
      </div>
    </header>
  )
}
