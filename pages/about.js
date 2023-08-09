import Layout from '../components/layout';
import Footer from '../components/footer';
import Image from 'next/image';


export default function About()
{
    return (<>
    <Layout>
    </Layout>
    <main>
        <h1>about me</h1>
        <Image src = "/images/profile.png" width = {242} height = {242}/>
        <p>Learn all about what makes me special and what drives me to thrive here</p>
    </main>

    <section>
        <h2>journey</h2>
        <p>Placeholder text for journey, interests, and skills paragraphs.  I don’t know if I will fill out the information as to not leak personal information</p>
    </section>

    <section>
        <h2>interests</h2>
        <p>Placeholder text for journey, interests, and skills paragraphs.  I don’t know if I will fill out the information as to not leak personal information</p>
    </section>

    <section>
        <h2>skills</h2>
        <p>Placeholder text for journey, interests, and skills paragraphs.  I don’t know if I will fill out the information as to not leak personal information</p>
    </section>
    <Footer></Footer></>
    );
}