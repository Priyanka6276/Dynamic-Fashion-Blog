import { Link } from "react-router-dom"

export default function Nav(props) {
    return (
        <nav className="nav-top">
            <Link to="women"> <div>Women's</div> </Link>
            
            <Link to="men"> <div> Men's</div> </Link>
            
            <Link to="on-the-street"> <div>On the Street</div> </Link>
            
            <Link to="the-catwalk"> <div>The Catwalk</div> </Link>
            
            <Link to="adwatch"> <div>AdWatch</div> </Link>
            
            <Link to="about"> <div>About</div> </Link>
            
        </nav>
    )
}