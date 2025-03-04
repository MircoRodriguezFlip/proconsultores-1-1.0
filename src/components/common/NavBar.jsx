import { NavLink } from 'react-router-dom';

import logoNavbar from '../../assets/images/logo-navbar.webp';

export const NavBar = () => {
    return (
        <header>
            <nav className="navbar" aria-label="Menú de navegación principal">
                <NavLink to="/" aria-label="Ir a la página principal">
                    <img src={logoNavbar} alt="Logo de Pro Consultores en la barra de navegación" className="logo-navbar" />
                </NavLink>
            </nav>
        </header>
    );
};
