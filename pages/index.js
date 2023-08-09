import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
      </Layout>

      <main>
        <h1 className={styles.title}>
          introducing
        </h1>
        <img src = "/images/profile.png"/>
        <h1>Joey Yannuzzi</h1>

        <p className={styles.description}>
          An aspiring student at NJIT studying Game development and designLearn more below
        </p>
        <h3><Link href = "#">learn more</Link></h3>
        <h3><Link href = "#">my projects</Link></h3>
      </main>

      <section>
        <h2>want to contact me?</h2>
        <p>Sign up for mailchimp to get in touch</p>
        <img src = "/images/mailchimp.png"/>
        <form>
          <input type = "email" value = "ENTER EMAIL HERE"></input>
          <input type = "submit" value = "SUBMIT"></input>
        </form>
      </section>

      <Footer></Footer>
    </div>
  )
}
