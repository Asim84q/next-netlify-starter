import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my next world!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p>
          <Link href="/contact">
            <a>Click Here</a>
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
