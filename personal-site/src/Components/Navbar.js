import "./navbar.css"
import {Link} from "react-scroll"
function Navbar(){
    return(
        <header id = "/">
            <nav className = "nav">

            <div className="glitch-wrapper">
                <div className="glitch" data-glitch="glitch">Joshua Brunk</div>
            </div>   
            
                
                <ul className = "nav-items">
                    <li><Link to = "/" spy={true} smooth={true} offset={-50} duration={500} >Home</Link></li>
                    <li><Link to = "about" spy={true} smooth={true} offset={-50} duration={500}> About Me </Link></li>
                    <li><Link to = "skills" spy={true} smooth={true} offset={-50} duration={500} >Skills</Link></li>
                    <li><Link to = "projects" spy={true} smooth={true} offset={-50} duration={500} >Projects</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
