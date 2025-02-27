import "./Header.css";

export const Header = () => {
    return <>
        <header>
        <div className="container">
            <div className="logo">
                <a href="#"><img src="./img/cti-logo-icone-cinza.png " alt="Logo" /></a>
            </div>

            <nav className="menu">
                <ul className="menu-items">
                    <li><a href="#">CONSERTOS</a></li>
                    <li><a href="#">ACESSÓRIOS</a></li>
                    <span>|</span>
                    <li><a href="#">QUEM SOMOS</a></li>
                    <li><a href="#">ONDE ESTAMOS</a></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
};