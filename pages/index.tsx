import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import VideosSection from '../components/VideosSection'
import ShortsSection from '../components/ShortsSection'
import Subscriptions from '../components/Subscriptions'
import Downloads from '../components/Downloads'
import AdminPanel from '../components/AdminPanel'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className={styles.container}>
      <Head>
        <title>YouTube Creator Website</title>
        <meta name="description" content="YouTube Creator Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header 
        onSearch={setSearchQuery} 
        isAdminMode={isAdminMode}
        onToggleAdmin={() => setIsAdminMode(!isAdminMode)}
      />

      <main className={styles.main}>
        {isAdminMode && <AdminPanel />}
        
        <AboutMe isAdminMode={isAdminMode} />
        
        <section className={styles.section}>
          <h2>Videos</h2>
          <VideosSection searchQuery={searchQuery} />
        </section>

        <section className={styles.section}>
          <h2>Shorts</h2>
          <ShortsSection searchQuery={searchQuery} />
        </section>

        <section className={styles.section}>
          <h2>Subscriptions</h2>
          <Subscriptions />
        </section>

        <section className={styles.section}>
          <h2>Worlds & Modpacks</h2>
          <Downloads />
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 YouTube Creator. All rights reserved.</p>
      </footer>
    </div>
  )
}
