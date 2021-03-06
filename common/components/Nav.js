import React from 'react'
import IndexLink from 'react-router/lib/IndexLink'
import Link from 'react-router/lib/Link'
import { StyleSheet, css } from 'aphrodite'

const Nav = () => (
  <div>
    <IndexLink to='/' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>
      Sign Up
    </IndexLink>
    <Link to='/SignIn' className={css(styles.link)} activeClassName={css(styles.link, styles.activeLink)}>Sign In
    </Link>
    <a href='https://angel.co/cvstom' className={css(styles.link)} target='_blank'>About Us</a>
  </div>
)

const styles = StyleSheet.create({
  link: {
    maxWidth: 700,
    color: '#999',
    margin: '1.5rem 1rem 1.5rem 0',
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: '.2s opacity ease',
    ':hover': {
      opacity: 0.6
    }
  },
  activeLink: {
    color: '#000'
  }
})

export default Nav
