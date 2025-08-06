import AOS from "aos";
import React, { useEffect } from "react";

import "aos/dist/aos.css";
import "../styles/components/About.css";

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about">
      <h2 data-aos="fade-up">Sobre Mim</h2>
      <p data-aos="fade-up">
        Sou Kamilly, uma desenvolvedora web e mobile apaixonada por criar
        experiências digitais inovadoras e funcionais. Com uma sólida formação
        em desenvolvimento Full Stack e 3 anos de experiência na área. Ao longo
        da minha carreira, tive a oportunidade de trabalhar em diversos
        projetos, desde serviços corporativos até aplicações web dinâmicas,
        sempre focando na usabilidade e na performance. Estou sempre em busca de
        novos desafios que me permitam crescer profissionalmente e aplicar
        minhas habilidades para resolver problemas reais. Minha motivação é a
        constante evolução tecnológica e a possibilidade de impactar
        positivamente a vida das pessoas através da programação. Se você está em
        busca de uma desenvolvedora comprometida e detalhista, ficarei feliz em
        colaborar e transformar suas ideias em realidade.
      </p>
      <a
        href="/cv.pdf"
        download="Kamilly-Vitoria-Curriculo.pdf"
        className="btn"
        data-aos="fade-up"
      >
        Baixar Currículo{" "}
      </a>
      <hr></hr>
    </section>
  );
};

export default About;
