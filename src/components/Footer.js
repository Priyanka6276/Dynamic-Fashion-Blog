import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div>
            <nav className="nav-bottom">
                <Link to="home"> Home </Link>
                <Link to="women"> Women's </Link>

                <Link to="men">  Men's </Link>

                <Link to="on-the-street"> On the Street </Link>

                <Link to="the-catwalk"> The Catwalk </Link>

                <Link to="adwatch"> AdWatch </Link>

                <Link to="about"> About </Link>

                <Link to="tips"> Tips </Link>
            </nav>
            <h4 className="footer">&copy; 2013 Valet Industries Inc</h4>
        </div>

    )
}