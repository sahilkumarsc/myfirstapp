import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import About   from './about'
import Home from './home'

export default function Index() {
  return (
    <div >
        <ul>
            <li>
      <Link href="/Home">
      Home
      </Link>
      </li>
      <li>
      <Link href="/About">
      About
      </Link>
      </li>
      <li>
      <Link href="/Contact">
      Contact
      </Link>
      </li>
      </ul>
    </div>
  )
}
