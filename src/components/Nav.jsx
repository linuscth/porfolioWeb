import { Link } from 'react-scroll';
import Navbar from './UI/Navbar';

export default function Nav() {
    return (
        <Navbar
            links={[
                <Link className="nav-link  inline-block navChoice text-light" to="/" key={1} smooth={true} duration={50} spy={true}>
                    Home
                </Link>,
                <Link className="nav-link inline-block navChoice text-light " to="myprojects" key={2} smooth={true} duration={50} spy={true}>
                    Projects
                </Link>,
                <Link className="nav-link inline-block navChoice text-light" to="/myresume" key={3} smooth={true} duration={50}>
                    Resume
                </Link>,
                <Link className="nav-link inline-block navChoice text-light" to="/contact" key={4} smooth={true} duration={50}>
                    Contact
                </Link>,
            ]}
        />
    );
}
