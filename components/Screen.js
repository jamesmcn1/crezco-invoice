import Head from 'next/head'

export default function Screen(props) {
  return (
    <div>
      <Head>
        <title>Crezco Invoice App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='bg-green min-h-screen flex'>
          <div className="flex flex-col items-center justify-center max-w-md mx-auto gap-2 w-full">
            <div className="rounded-md border border-white p-9 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              {props.children}
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
