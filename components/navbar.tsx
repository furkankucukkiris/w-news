import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/images/logo.svg" alt="logo" fill/>
      </div>
      <div className={styles.nav_links}>
        <a>Home</a>
        <a>New</a>
        <a>Popular</a>
        <a>Trending</a>
        <a>Categories</a>
      </div>
    </nav>
  )
}


