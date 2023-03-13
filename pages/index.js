import Screen from '../components/Screen'
import Title from '../components/Title'

export default function Home() {
  const partnerCode = 'jamesmcnamara'
  const redirectUri = `${process.env.HOST}/invoice`
  const url = `https://app.sandbox.crezco.com/onboarding?partner_id=${partnerCode}&redirect_uri=${redirectUri}`

  return (
    <Screen>
      <Title>Crezco Invoice App</Title>

      <a href={url} className="block text-center text-peach">
        Click to onboard with Crezco
      </a>
    </Screen>
  )
}
