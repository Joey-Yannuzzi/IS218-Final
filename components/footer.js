import Link from 'next/link';
import Image from 'next/image';

export default function Footer()
{
    return(
    <footer>
        <Link class = "privacy" href = "/">back to homepage</Link>
        <Link href = "https://github.com"><Image class = "footLink" src = "/images/Github.png" width = {46.97} height = {47}/></Link>
        <Link href = "https://linkedin.com"><Image class = "footLink" src = "/images/Linkedin.png" width = {46.97} height = {47}/></Link>
        <Link href = "/privacy" class = "privacy">privacy policy</Link>
    </footer>);
}