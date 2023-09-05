import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

export const metadata = {
  title: 'unidev - about',
  description: 'About page',
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/15188027/pexels-photo-15188027/free-photo-of-antigo-antepassados-anciao-entalhado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          fill={true} 
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Title Here</h1>
          <h2 className={styles.imgDesc}>Subtitle here</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who I am?</h1>
          <p className={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            <br />
            <br />
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What I do?</h1>
          <p className={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            <br />
            <br />
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. 
            <br />
            <br /> - Teaching Computer Skilss
            <br />
            <br /> - Loving people
            <br />
            <br /> - Helping and giving them a oportunity to grow in life.
          </p>
            <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About