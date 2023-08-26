export default function Nav({ links }) {
    return (
        <nav className="navbar navbar-expand-lg bg-dark-subtle rounded-1 rounded-top-0 bg-opacity-10 border-bottom border-primary-subtle border-5">
            <div className="container-fluid">
                <div className=" navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex mb-3 justify-content-between">
                        <h3 className="me-auto p-2 text-white-50">Linus Cheung</h3>
                        <ul className="navbar-nav  p-2">
                            {links.map((link) => link)}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
