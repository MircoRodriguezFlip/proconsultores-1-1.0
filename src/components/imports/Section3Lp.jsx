import { Form } from './Form';

import imgSection3lp from '../../assets/images/logo-section-3.webp';

export const Section3Lp = () => {
    return (
        <section className="section-3-lp">
            <div className="section-3-lp-1">
                <div>
                    <img src={imgSection3lp} alt="" />
                </div>

                <div>
                    <h2 className="bold-text">Déjanos tus datos y un asesor se comunicará contigo</h2>

                    <Form />
                </div>
            </div>
        </section>
    );
};
