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
        <form action="https://njit.us21.list-manage.com/subscribe/post?u=3f1e4ab292a2df6ae62a44e15&amp;id=9060324661&amp;f_id=00315ce1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
          <input class = "email" type = "email" id = "email" name="b_3f1e4ab292a2df6ae62a44e15_9060324661" tabindex="-1"></input>
          <input class = "submit" type = "submit" value = "SUBMIT" name="subscribe" id="mc-embedded-subscribe"></input>
        </form>
      </section>

      <br></br>
      <br></br>
      <br></br>

      <Footer></Footer>
    </div>
  )
}
