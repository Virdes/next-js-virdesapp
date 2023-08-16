import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Hey there! I’m Virdes Medeiros, 24 years old, currently living in Cairo, Egypt.
        </h1>
        <p className={styles.desc}>
          I am a Systems Analyst graduated from "UNICID - Universidade cidade de São Paulo” in 2019. 
          Currently, I am as a volunteer in Egypt teaching technology to refugees.
        </p>
        <Button url="/portfolio" text="See My Works"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img}/>
      </div>
    </div>
  )
}
