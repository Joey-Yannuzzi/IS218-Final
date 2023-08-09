import Layout from '../components/layout';
import Footer from '../components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Project()
{
    return(
    <>
        <Layout></Layout>

        <main>
            <h1>Projects</h1>
            <Image src = "/images/projects.png" width = {242} height = {242}></Image>
            <p>Learn more about some important hands-on experiences I’ve had</p>
        </main>

        <section>
            <h2>Project 1</h2>
            <p>Place holder for project descriptions.I don’t know if I will fill out the information as to not leak personal information</p>
            <h3><Link href = "#">project 1</Link></h3>
        </section>

        <section>
            <h2>Project 2</h2>
            <p>Place holder for project descriptions.I don’t know if I will fill out the information as to not leak personal information</p>
            <h3><Link href = "#">project 2</Link></h3>
        </section>

        <section>
            <h2>Project 3</h2>
            <p>Place holder for project descriptions.I don’t know if I will fill out the information as to not leak personal information</p>
            <h3><Link href = "#">project 3</Link></h3>
        </section>

        <Footer></Footer>
    </>
    )
}