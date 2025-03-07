import logoFace from '../../assets/images/logo-face.webp';
import logoIg from '../../assets/images/logo-ig.webp';
import logoNavbar from '../../assets/images/logo-navbar.webp';

import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="footer light-text">
            <div className="contenido-footer">
                <section className="footer-1">
                    <div className="redes-container">
                        <a href="https://www.instagram.com/proconsultores/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <img src={logoIg} alt="Instagram" loading="lazy" decoding="async" />
                        </a>

                        <a href="https://www.facebook.com/proconsultoresmx" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <img src={logoFace} alt="Facebook" loading="lazy" decoding="async" />
                        </a>
                    </div>

                    <NavLink to="/aviso-privacidad" title="Ver el aviso de privacidad">
                        Aviso de privacidad
                    </NavLink>
                </section>

                <section className="footer-2-1">
                    <div className="footer-2">
                        <NavLink to="/" aria-label="Ir a la página de inicio">
                            <img src={logoNavbar} alt="" />
                        </NavLink>
                    </div>
                </section>
            </div>
        </footer>
    );
};
