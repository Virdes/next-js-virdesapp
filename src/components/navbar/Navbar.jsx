"use client"

import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>unidev</Link>
      <div className={styles.links}>
        {/*<DarkModeToggle/> = dark and light mode */}
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <Link href="/dashboard/login" className={styles.signin}>
        <button
          className={styles.logout} 
          onClick={()=>{console.log("logged out");
          }}>
            Login
        </button></Link>
      </div>
    </div>
  )
}

export default Navbar