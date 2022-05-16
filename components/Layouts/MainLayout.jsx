import React from 'react'
import Head from 'next/head'

import NavBar from '../UI/NavBar'

import styles from '../../styles/MainLayout.module.css'

const MainLayout = ({children, title}) => {
  return (
    <>
      <Head>
        <title>Fake PokeApi - {title}</title>
      </Head>

      <main className={styles.main}>
        <NavBar />
        {children}
      </main>
    </>
  )
}

export default MainLayout