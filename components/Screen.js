import Head from 'next/head'

export default function Screen(props) {
  return (
    <div>
      <Head>
        <title>Crezco Invoice App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-green">
          {props.children}
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
