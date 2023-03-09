import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Screen from '../components/Screen'
import styles from '../styles/Home.module.css'

export default function Invoice() {
  const router = useRouter()
  const userId = router.query['user-id']

  console.log(userId)

  //   useEffect() {
  //     const getUserId = async () => {
  //         const users = await fetch();
  //         setUsers(users);
  //       };

  //       getUsers(); // run it, run it
  //   }

  return (
    <Screen>
      <div>
        <h1 className={styles.title}>Create an Invoice</h1>
      </div>
    </Screen>
  )
}
