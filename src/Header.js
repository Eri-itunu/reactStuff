import reactLogo from "./reactLogo.png"
function Header(){
    return (
        <header className="shadow">
                <nav className="nav">
                    <img alt="React " src={reactLogo} width="50px"/>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header

