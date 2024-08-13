import React, { useEffect } from 'react';
import projeto1 from '../images/projeto1.png';
import AOS from 'aos';

import '../styles/components/Projects.css';
import 'aos/dist/aos.css';

const Projects: React.FC = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="projects" data-aos="fade-up">
            <h2>Projetos</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <img src={projeto1} alt="Projeto 1" />
                    <h3>Projeto 1</h3>
                    <p>Descrição breve do projeto.</p>
                    <a href="#" className="btn">Ver Projeto</a>
                </div>
                {/* Adicione mais projetos aqui */}
            </div>
        </section>
    );
};

export default Projects;
