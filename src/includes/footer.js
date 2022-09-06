import Facebook from '../assets/icons/facebook.png'
import Instagram from '../assets/icons/instagram.png'
import Whatsapp from '../assets/icons/whatsapp.png'
import '../assets/css/style.css';


function Footer() {
    return (

        <footer>
            <div className='container'>
                <div className='footer-info'>

                    <div className='info-md1'>
                        {/* <p>Comercializadora <span>Arzat</span></p> */}

                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Acerca de</a></li>
                            <li><a href='#'>Contacto</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Creditos</a></li>
                        </ul>
                    </div>

                    <div className='info-md2'>
                        <p>¿Quieres recibir noticias y promociones? <br /> Ingresa tu correo a continuación...</p>

                        <div>
                            <input type='email' class='enter-email' placeholder='Ingresa tu correo...' />
                            <input type="submit" value="Enviar" class="btn-enviar" />
                        </div>

                    </div>

                    <div className='info-md3'>
                        <p>Seamos sociables.</p>

                        <ul>
                            <li><a href='https://www.facebook.com/muebleria.arzat/' target='_blank'><img src={ Facebook } /></a></li>
                            <li><a href='https://www.instagram.com/muebleria.arzat/' target='_blank'><img src={ Instagram } /></a></li>
                            <li><a href='#' target='_blank'><img src={ Whatsapp } /></a></li>
                        </ul>
                    </div>

                </div>
                

                <p className='copyright'> &copy; Copyright 2022. All Rights Reserved. <br />
                    Made by  Luxho Lopez - <a href='mailto:dj_97@outlook.com'>dj_97@outlook.com</a></p>

            </div>
        </footer>

    );
}

export default Footer
