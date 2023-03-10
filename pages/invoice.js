import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Screen from '../components/Screen'
import styles from '../styles/Home.module.css'

export default function Invoice() {
  const apiKey = 'cKJTQJ3T2j9FM5dySUfExkhPCaEg4Nut'
  const router = useRouter()
  const userId = router.query['user-id']
  const usersUrl = `https://api.sandbox.crezco.com/v1/users/${userId}`

  console.log(userId)

  useEffect(() => {
    const getUserId = async () => {
      if (!userId) {
        return
      }
      try {
        const users = await fetch(usersUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Crezco-Key': `${apiKey}`,
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
            'Access-Control-Allow-Headers':
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        })
        const userData = await users.json();
        console.log(userData);
      } catch (err) {
        console.log(err)
      }
    }

    getUserId() // run it, run it
    return
  })

  return (
    <Screen>
      <div>
        <h1 className="text-3xl font-bold text-white">Create an Invoice</h1>
      </div>
    </Screen>
  )
}
