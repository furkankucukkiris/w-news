import Image from 'next/image'
import styles from '../styles/Cards.module.css'

export default function Cards() {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardImage}>
                    <Image src="/images/image-retro-pcs.jpg" alt="img" fill/>
                </div>
                <div className={styles.cardText}>
                    <div className={styles.cardTitle}>01</div>
                    <div className={styles.cardSubTitle}>Reviving Retro PCs</div>
                    <p className={styles.cardP}>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardImage}>
                    <Image src="/images/image-top-laptops.jpg" alt="img" fill/>
                </div>
                <div className={styles.cardText}>
                    <div className={styles.cardTitle}>02</div>
                    <div className={styles.cardSubTitle}>Top 10 Laptops of 2022</div>
                    <p className={styles.cardP}>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardImage}>
                    <Image src="/images/image-gaming-growth.jpg" alt="img" fill/>
                </div>
                <div className={styles.cardText}>
                    <div className={styles.cardTitle}>03</div>
                    <div className={styles.cardSubTitle}>The Growth of Gaming</div>
                    <p className={styles.cardP}>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    </>
  )
}


