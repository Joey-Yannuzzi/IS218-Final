import Link from 'next/link';
import Image from 'next/image';

export default function Footer()
{
    return(<footer><Link href = "https://github.com"><Image src = "/images/Github.png" width = {46.97} height = {47}/>Github</Link>
    <Link href = "https://linkedin.com"><Image src = "/images/Linkedin.png" width = {46.97} height = {47}/>Linkedin</Link></footer>);
}