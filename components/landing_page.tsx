import Image from 'next/image'
import styles from '../styles/Landing.module.css'

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.conl}>
        <div className={styles.bigImage}>
          <Image src="/images/image-web-3-desktop.jpg" alt="big-img" fill />
        </div>
        <div className={styles.textArea}>
          <div className={styles.textl}>
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className={styles.textr}>
            <p className={styles.leftP}>We dive into the next evolution of the web  that claims to put the power of the platforms back into the hands of the people. But is it really fullfilling its promise?</p>
            <button className={styles.readButton}>READ MORE</button>
          </div>
        </div>
      </div>
      <div className={styles.conr}>
        <div className={styles.newBox}>
          <h3 className={styles.boxTitle}>New</h3>
          <h4 className={styles.lilTitles}>Hydrogen VS Electric Cars</h4>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          <hr/>
          <h4 className={styles.lilTitles}>The Downsides of AI Artistry</h4>
          <p>What are the possible adverse effects of on-demand AI image generation?</p>
          <hr/>
          <h4 className={styles.lilTitles}>Is VC Funding Drying Up?</h4>
          <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </div>
    </div>
  )
}


