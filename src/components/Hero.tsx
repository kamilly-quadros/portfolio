import React, { useEffect, useState } from 'react';
import AOS from 'aos';

import '../styles/components/Hero.css';
import 'aos/dist/aos.css';

const Hero: React.FC = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div id="hero">
            <div className="hero-background"></div>
            <div className="hero-content" data-aos="fade-up">
                <h1>Olá, eu sou [Seu Nome]</h1>
                <p>Desenvolvedor Web & Criador de Experiências Digitais</p>
                <a href="#projects" className="btn">Veja meus projetos</a>
            </div>
        </div>

    );
};

export default Hero;
