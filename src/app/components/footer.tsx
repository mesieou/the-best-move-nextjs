import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo/dark Logo and title.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link href="/">
          <Image src={Logo} alt="The Best Move logo" />
        </Link>
        <ul className="flex space-x-20">
          <li>
            <Link className="font-bold" href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="font-bold" href="/pricing">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="font-bold" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <p className="copyright">
          &copy; {new Date().getFullYear()} The Best Move. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
