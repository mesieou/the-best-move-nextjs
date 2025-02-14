import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo/white Logo and title v2 (2).svg';

export default function Header() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className='flex justify-between items-center py-6'>
                <Link href="/">
                    <Image src={logo} className='logo' alt="The Best Move logo"/>  
                </Link>
                <ul className='flex space-x-20'>
                    <li>
                        <Link className="font-bold" href="/services">Services</Link>
                    </li>
                    <li>
                        <Link className="font-bold" href="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link className="font-bold" href="/contact">Contact</Link>
                    </li>
                </ul>
                <button className='primary-button'>Quote Now</button>
            </nav>
        </div>
    )
}
