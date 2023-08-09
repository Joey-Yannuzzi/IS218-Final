import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Footer from '../components/footer';
import Image from 'next/image';
import { getSortedData } from '../lib/info';

export async function getStaticProps()
{
  const allData = getSortedData();
  return {
    props: {
      allData,
    },
  };
}

export default function Home({allData}) {
  return (
    <div className={styles.container}>
      <Layout>
      </Layout>

      <main>
        <h1 className={styles.title}>
          introducing
        </h1>
        <Image src = "/images/profile.png" width = {242} height = {242}/>
        <h1>Joey Yannuzzi</h1>

        <p className={styles.description}>
          An aspiring student at NJIT studying Game development and designLearn more below
        </p>
        <h3>{allData.map(({id, name, title}) => 
        (
          <Link key = {id} href = {id}>{name}</Link>
        ))}</h3>
        <h3><Link href = "#">my projects</Link></h3>
      </main>

      <section>
        <h2>want to contact me?</h2>
        <p>Sign up for mailchimp to get in touch</p>
        <Image src = "/images/mailchimp.png" width = {76} height = {76}/>
        <form>
          <input type = "email" value = "ENTER EMAIL HERE"></input>
          <input type = "submit" value = "SUBMIT"></input>
        </form>
      </section>

      <Footer></Footer>
    </div>
  )
}
