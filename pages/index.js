import Head from 'next/head'
import Home from './Home';
import styles from '../styles/Home.module.css'

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crezco Invoice App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />
      </main>

      <footer>
      </footer>
    </div>
  )
}
