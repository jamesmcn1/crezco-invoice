import Head from 'next/head'

export default function Screen(props) {
  return (
    <div>
      <Head>
        <title>Crezco Invoice App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex min-h-screen bg-green">
          <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-2">
            <div className="mb-4 rounded-md rounded border border-white p-9 px-8 pt-6 pb-8 shadow-md">
              {props.children}
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
