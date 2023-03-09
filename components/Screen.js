import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Screen(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crezco Invoice App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {props.children}
      </main>

      <footer></footer>
    </div>
  )
}
