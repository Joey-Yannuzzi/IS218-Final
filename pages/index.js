import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/images/profile.jpg"/>
      </Head>

      <main>
        <h1 className={styles.title}>
          introducing
        </h1>
        <img src = "/images/profile.png"/>
        <h1>Joey Yannuzzi</h1>

        <p className={styles.description}>
          An aspiring student at NJIT studying Game development and designLearn more below
        </p>
        <h3><a href = "#">learn more</a></h3>
        <h3><a href = "#">my projects</a></h3>
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

      <footer>
        <a href = "https://github.com"><img src = "/images/Github.png"/>Github</a>
        <a href = "https://linkedin.com"><img src = "/images/Linkedin.png"/>Linkedin</a>
      </footer>
    </div>
  )
}
