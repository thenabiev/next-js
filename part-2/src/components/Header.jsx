import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/Header.module.css'

const Header = () => {
  const router=useRouter();
  return (
    <div className={styles.header}>
        <ul>
          <li>
          <Link href='/'>
            Home
          </Link>
          </li>
          <li>
          <Link href='/about'>
            About
          </Link>
          </li>
          
          <li>
          <Link href='/product'>
            Products
          </Link>
          </li>

          <li>
          <Link href='/user'>
            User
          </Link>
          </li>
          
        </ul>
    </div>
  )
}

export default Header