import { useState } from 'react';

import ImgText from '../../assets/images/test.webp';
import Spiner from '../../assets/images/spiner-1.webp';

const images = [
    { id: 1, src: ImgText, text: 'Texto 1' },
    { id: 2, src: ImgText, text: 'Texto 2' },
    { id: 3, src: ImgText, text: 'Texto 3' },
    { id: 4, src: ImgText, text: 'Texto 4' },
    { id: 5, src: ImgText, text: 'Texto 5' },
];

export const Section1Lp = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedText, setSelectedText] = useState('');

    const handleClick = () => {
        setIsLoaded(true);
    };

    return (
        <section className="section-1-lp">
            <div className="section-1-lp-titulo">
                <h1>
                    CONSULTORÍA <br />
                    FINANCIERA Y PATRIMONIAL
                </h1>

                <p>Conoce nuestros servicios y toma el control de tu futuro financiero</p>
            </div>

            <div className="section-1-lp-1">
                <div className="circle-menu">
                    {/* Spinner: solo se muestra si isLoaded es falso */}
                    {!isLoaded && (
                        <button onClick={handleClick}>
                            <img src={Spiner} alt="Cargando..." className="spinner" />
                        </button>
                    )}

                    {/* Texto en el centro */}
                    {isLoaded && <div className="center-text">{selectedText || 'Selecciona una opción'}</div>}

                    {/* Imágenes: aparecen solo si isLoaded es true */}
                    {isLoaded &&
                        images.map((item, index) => (
                            <button key={item.id} onClick={() => setSelectedText(item.text)}>
                                <img
                                    src={item.src}
                                    alt=""
                                    className={`circle-item item-${index + 1} ${isLoaded ? 'show' : ''}`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                />
                            </button>
                        ))}
                </div>
            </div>
        </section>
    );
};
