import Head from 'next/head'
import About from '../components/aboutme/About'
import Contact from '../components/contactme/Contact'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Sidebar from '../components/nav/Sidebar'
import Projects from '../components/projects/Projects'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rodrigo Spano </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      <Header />
      
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
