import React from 'react'
import Link from 'next/link'
import styles from '../../styles/NavBar.module.css'

const routes = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Pokemons',
    href: '/pokemons'
  },
]


const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          {routes.map(route => (
            <li key={route.name}>
              <Link href={route.href}>
                <a className={styles.link}>{route.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default NavBar