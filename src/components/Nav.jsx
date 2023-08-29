import { Link } from 'react-scroll';
import Navbar from './UI/Navbar';

export default function Nav() {
    return (
        <Navbar
            links={[
                <Link className="nav-link  inline-block navChoice text-light" to="/" key={1} smooth={true} duration={50} spy={true}>
                    Home
                </Link>,
                <Link className="nav-link inline-block navChoice text-light" to="Resume" key={3} smooth={true} duration={50}>
                    Resume
                </Link>,

                <Link className="nav-link inline-block navChoice text-light " to="Portfolios" key={2} smooth={true} duration={50} spy={true}>
                    Portfolio
                </Link>,
                <Link className="nav-link inline-block navChoice text-light" to="contact" key={4} smooth={true} duration={50}>
                    Contact
                </Link>,
            ]}
        />
    );
}
