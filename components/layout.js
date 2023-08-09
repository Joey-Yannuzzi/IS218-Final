import Head from 'next/head';
import Link from 'next/link';

export default function Layout()
{
    return(<Head><title>Joey Yannuzzi</title><link rel="icon" href="/images/profile.jpg"/></Head>);
}

export function Footer()
{
    return(<footer><Link href = "https://github.com"><img src = "/images/Github.png"/>Github</Link>
    <Link href = "https://linkedin.com"><img src = "/images/Linkedin.png"/>Linkedin</Link></footer>);
}