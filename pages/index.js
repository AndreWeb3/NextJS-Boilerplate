import Image from 'next/image'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import styles from '../styles/app.module.css'

export default function app() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
