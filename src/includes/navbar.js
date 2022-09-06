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
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Acerca de</a></li>
                            <li><a href='#'>Contacto</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Creditos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </navbar>
        
    );
}

export default Navbar;
