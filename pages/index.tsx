import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Landing from '../components/landing_page'
import Cards from '../components/cards'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News</title>
        <meta name="description" content="Frontend Mentor Challenges" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <Navbar />
      <Landing />
      <Cards />

    </div>
  )
}
