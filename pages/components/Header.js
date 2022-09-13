import Head from 'next/head'
import styles from '../../styles/app.module.css'


export default function Header() {

  return(
    <div className={styles.header}>
    <Head >
        <title>NextJS Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <span>Header</span>
    </div>
  </div>
  )


}