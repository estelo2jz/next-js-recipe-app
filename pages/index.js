import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  const recipes = data.recipes;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Link href="/about/">
          <a>{recipes[0].title}</a>
        </Link>
      </main>
    </div>
  )
}


export function getStaticProps() {
  return {
    props: {
      data: {
        recipes: [{title: 'Pineapple smoothie'}]
      }
    }
  }
}