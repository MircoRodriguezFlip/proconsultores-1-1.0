import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="footer light-text">
            <NavLink to="/aviso-privacidad" title="Ver el aviso de privacidad">
                Aviso de privacidad
            </NavLink>
        </footer>
    );
};
