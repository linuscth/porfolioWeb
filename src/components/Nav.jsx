import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
    return (
        <Navbar
            links={[
                <Link className="nav-link text-light inline-block" to="/">
                    Home
                </Link>,
                <Link className="nav-link text-light inline-block" to="/myprojects">
                    Projects
                </Link>,
                <Link className="nav-link text-light inline-block" to="/myresume">
                    Resume
                </Link>,
                <Link className="nav-link text-light inline-block" to="/contact">
                    Contact
                </Link>,
            ]}
        />
    );
}
