import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Minecraft Julian - YouTube Channel</title>
        <meta name="description" content="Welcome to Minecraft Julian's YouTube channel website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.highlight}>Minecraft Julian</span>
          </h1>
          <p className={styles.description}>
            Your source for amazing Minecraft content!
          </p>
        </div>

        <section className={styles.about}>
          <h2>About the Channel</h2>
          <p>
            Join me on my Minecraft adventures! I create exciting gameplay videos, 
            tutorials, and entertaining content for Minecraft fans.
          </p>
        </section>

        <section className={styles.videos}>
          <h2>Latest Videos</h2>
          <div className={styles.videoGrid}>
            <div className={styles.videoPlaceholder}>
              <p>Subscribe to see my latest videos!</p>
            </div>
          </div>
        </section>

        <section className={styles.social}>
          <h2>Connect With Me</h2>
          <div className={styles.socialLinks}>
            <a 
              href="https://www.youtube.com/@MinecraftJulian" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.button}
            >
              Visit My YouTube Channel
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Minecraft Julian. All rights reserved.</p>
      </footer>
    </div>
  )
}
