import { Section1Lp } from '../imports/Section1Lp';
import { Section2Lp } from '../imports/Section2Lp';
import { Section3Lp } from '../imports/Section3Lp';

export const LandingPage = () => {
    return (
        <main className="landing-page-container">
            <section className="fondo-1">
                <Section1Lp />
            </section>

            <section>
                <Section2Lp />
            </section>

            <section id="section-3-lp">
                <Section3Lp />
            </section>
        </main>
    );
};
