import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const partnerCode = 'jamesmcnamara-sandbox'
  const redirectUri = 'http://localhost:3000/invoice'
  const url = `https://app.sandbox.crezco.com/onboarding?partner_id=${partnerCode}-sandbox&redirect_uri=${redirectUri}`

  return (
    <div>
      <h1 className={styles.title}>Crezco Invoice App</h1>

      <a href={url}>Click to onboard with Crezco</a>
    </div>
  )
}
