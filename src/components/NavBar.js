import { Outlet, Link } from "react-router-dom";

import '../styles/NavBar.css';

const NavBar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <Link className="navbar-brand px-4" to = "/home">
                    <h2 className="text-warning"><b>Weekend </b></h2> 
                </Link>
                {/* Hamburger */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item active px-4">
                        <Link to ="/home" className="nav-link active" aria-current="page">
                           Home
                        </Link>
                    </li>
                    <li className="nav-item px-4">
                        <Link to ="/saturday" className="nav-link active" aria-current="page">
                           Saturday
                        </Link>
                    </li>
                    <li className="nav-item px-4">
                        <Link to ="/sunday" className="nav-link active" aria-current="page">
                            Sunday
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <Outlet />
        </>
    );
}

export default NavBar