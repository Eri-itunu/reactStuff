
import Logo from "./reactLogo.png"

export default function Navbar(){


    return(
        <nav className="navbar">
            <img className="nav--icon"src={Logo} alt="Logo" width="50px"/>
            <h3 className="nav--title">React Facts</h3>
            <h4 className="nav--subtitle">React Course - Project 1</h4>
            
        </nav>
    )
}