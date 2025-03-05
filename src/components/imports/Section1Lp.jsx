import { BolasServicios } from './bolasServicios';

export const Section1Lp = () => {
    return (
        <section className="section-1-lp">
            <div className="section-1-lp-titulo">
                <h1 className="bold-text">
                    CONSULTORÍA <br />
                    FINANCIERA Y PATRIMONIAL
                </h1>

                <p className="light-text">Conoce nuestros servicios y toma el control de tu futuro financiero</p>
            </div>

            <BolasServicios />

            <div className="section-1-lp-2">
                <button
                    onClick={() => document.querySelector('#section-3-lp')?.scrollIntoView({ behavior: 'smooth' })}
                    title="Haz clic para cotizar con un agente"
                    className="bold-text boton-1"
                >
                    Pide asesoría aquí
                </button>

                <p className="light-text">
                    Somos especialistas en consultoría financiera y patrimonial. Te ayudamos a optimizar, proteger y hacer crecer tu patrimonio con
                    nuestras estrategias personalizadas.
                </p>
            </div>
        </section>
    );
};
