import '../assets/css/style.css';
import logo from '../assets/img/Actual.png';


function Navbar() {
    return (

        <navbar>
            <div class="container">
                <div class="main-menu">
                    <div class="menu-logo">
                        <a href='#'><img src={ logo } alt='logo'/></a>
                    </div>
                    <div class="menu-select">
                        <ul>
                            <li><a href='/../App'>Home</a></li>
                            <li><a href='/pages/acercade'>Acerca De</a></li>
                            <li><a href='/pages/contacto'>Contacto</a></li>
                            <li><a href='/pages/blog'>Blog</a></li>
                            <li><a href='/pages/creditos'>Creditos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </navbar>
        
    );
}

export default Navbar;
