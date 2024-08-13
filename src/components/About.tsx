import React, { useEffect } from 'react';
import AOS from 'aos';

import '../styles/components/About.css';
import 'aos/dist/aos.css';

const About: React.FC = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="about">
            <h2 data-aos="fade-up">Sobre Mim</h2>
            <p data-aos="fade-up">Sou [Seu Nome], um desenvolvedor web apaixonado por criar experiências digitais inovadoras e funcionais. Com uma sólida formação em [Sua Formação] e [X] anos de experiência na área, tenho me especializado no desenvolvimento frontend, utilizando tecnologias como React, TypeScript, e CSS moderno para construir interfaces responsivas e intuitivas.
                Ao longo da minha carreira, tive a oportunidade de trabalhar em diversos projetos, desde sites corporativos até aplicações web dinâmicas, sempre focando na usabilidade e na performance. Estou sempre em busca de novos desafios que me permitam crescer profissionalmente e aplicar minhas habilidades para resolver problemas reais.
                Minha motivação é a constante evolução tecnológica e a possibilidade de impactar positivamente a vida das pessoas através da programação. Se você está em busca de um desenvolvedor comprometido e detalhista, ficarei feliz em colaborar e transformar suas ideias em realidade.</p>
            <a href="/cv.pdf" className="btn" download data-aos="fade-up">Baixar CV</a>
            <hr></hr>
        </section>
    );
};

export default About;
