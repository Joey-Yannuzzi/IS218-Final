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
    <div classname = {styles.background}>
      <Layout>
      </Layout>

      <main>
        <h1>
          introducing
        </h1>
        <Image src = "/images/profile.png" width = {242} height = {242} class = "images"/>
        <h1>Joey Yannuzzi</h1>

        <p>
          An aspiring student at NJIT studying Game development and design.  Learn more below.
        </p>
        <div class = "buttonContainer">
          {allData.map(({id, name, title}) => 
        (
          <Link key = {id} href = {id}><h3>{name}</h3></Link>
        ))}
        </div>
      </main>

      <br></br>
      <br></br>
      <br></br>
      
      <section>
        <h2>want to contact me?</h2>
        <Image class = "mailchimp" src = "/images/mailchimp.png" width = {76} height = {76}/>
        <p>Sign up for mailchimp to get in touch</p>
        <form>
          <input class = "email" type = "email" id = "email"></input>
          <input class = "submit" type = "submit" value = "SUBMIT"></input>
        </form>
      </section>

      <br></br>
      <br></br>
      <br></br>

      <Footer></Footer>
    </div>
  )
}
