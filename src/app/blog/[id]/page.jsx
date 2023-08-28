import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
  { cache: 'no-store',
  });
 
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>
          <div className={styles.author}>
            <Image 
              src="https://images.pexels.com/photos/2065848/pexels-photo-2065848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Virdes Barbosa</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
            <Image 
              src="https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={600}
              height={300}
              className={styles.image}
            />
        </div> 
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  )
}

export default BlogPost