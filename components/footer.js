import Link from 'next/link';

export default function Footer()
{
    return(<footer><Link href = "https://github.com"><img src = "/images/Github.png"/>Github</Link>
    <Link href = "https://linkedin.com"><img src = "/images/Linkedin.png"/>Linkedin</Link></footer>);
}