import Screen from '../components/Screen'
import Title from '../components/Title'

export default function Home() {
  const partnerCode = 'jamesmcnamara'
  const redirectUri = 'http://localhost:3000/invoice'
  const url = `https://app.sandbox.crezco.com/onboarding?partner_id=${partnerCode}&redirect_uri=${redirectUri}`

  return (
    <Screen>
      <Title>Crezco Invoice App</Title>

      <a href={url} className="text-peach text-center block">Click to onboard with Crezco</a>
    </Screen>
  )
}