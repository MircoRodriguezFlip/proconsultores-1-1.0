import { useState, useEffect } from 'react';

import logoProspera from '../../assets/images/logo-prospera.webp';
import logoProyecta from '../../assets/images/logo-proyecta.webp';
import ImgText1 from '../../assets/images/servicio-1.webp';
import ImgText2 from '../../assets/images/servicio-2.webp';
import ImgText3 from '../../assets/images/servicio-3.webp';
import ImgText4 from '../../assets/images/servicio-4.webp';
import ImgText5 from '../../assets/images/servicio-5.webp';
import Spiner from '../../assets/images/spiner-1.webp';

const images = [
    { id: 1, src: ImgText1, text: 'Texto 1' },
    { id: 2, src: ImgText2, text: 'Texto 2' },
    { id: 3, src: ImgText3, text: 'Texto 3' },
    { id: 4, src: ImgText4, text: 'Texto 4' },
    { id: 5, src: ImgText5, text: 'Texto 5' },
];

export const BolasServicios = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedText, setSelectedText] = useState('');
    const [selectedImageId, setSelectedImageId] = useState(null);
    const [disabledImages, setDisabledImages] = useState([]);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 1000);

        const imagesTimer = setTimeout(() => {
            setIsLoaded(true);
        }, 2000);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(imagesTimer);
        };
    }, []);

    const handleClick = (type) => {
        setIsLoaded(true);
        if (type === 'prospera') {
            setDisabledImages([3, 4]);
        } else if (type === 'proyecta') {
            setDisabledImages([1, 2, 5]);
        } else {
            setDisabledImages([]);
        }
    };

    return (
        <section>
            <div className="section-1-lp-botones">
                <button onClick={() => handleClick('prospera')}>
                    <img src={logoProspera} alt="" />
                </button>
                <button onClick={() => handleClick('proyecta')}>
                    <img src={logoProyecta} alt="" />
                </button>
            </div>

            <div className="section-1-lp-1">
                <div className="circle-menu">
                    {/* Spinner: solo se muestra si isLoaded es falso */}
                    {!isLoaded && !showText && (
                        <button onClick={handleClick}>
                            <img src={Spiner} alt="Cargando..." className="spinner" />
                        </button>
                    )}

                    {/* Texto en el centro con fade-in */}
                    <div className={`center-text light-text ${showText ? 'show' : ''}`}>{selectedText || 'Selecciona una opción'}</div>

                    {/* Imágenes: aparecen solo si isLoaded es true */}
                    {isLoaded &&
                        images.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setSelectedText(item.text);
                                    setSelectedImageId(item.id);
                                }}
                            >
                                <img
                                    src={item.src}
                                    alt=""
                                    className={`circle-item item-${index + 1} ${isLoaded ? 'show' : ''}  ${
                                        selectedImageId === item.id ? 'selected' : ''
                                    } ${disabledImages.includes(item.id) ? 'disabled' : ''}`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                />
                            </button>
                        ))}
                </div>
            </div>
        </section>
    );
};
