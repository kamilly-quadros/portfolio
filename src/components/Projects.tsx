import "aos/dist/aos.css";
import "../styles/components/Projects.css";
import AOS from "aos";
import stock from "../images/estoque.jpg";
import todoList from "../images/todo.jpg";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import React, { useEffect, useState } from "react";

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const openImage = (imgSrc: string) => {
    setModalImage(imgSrc);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <>
      <section id="projects" data-aos="fade-up">
        <h2>Projetos</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img
              src={project1}
              alt="Projeto 1"
              loading="lazy"
              onClick={() => openImage(project1)}
              style={{ cursor: "pointer" }}
            />
            <h3>Site de compra e venda</h3>
            <p>Sistema interno para compra e venda de produtos e serviços</p>
          </div>
          <div className="project-card">
            <img
              src={project2}
              alt="Monitoramento"
              loading="lazy"
              onClick={() => openImage(project2)}
              style={{ cursor: "pointer" }}
            />
            <h3>Service e interface de monitoramento</h3>
            <p>Serviço para monitoramento automático de serviços em execução</p>
          </div>
          <div className="project-card">
            <img
              src={project3}
              alt="Projeto 2"
              loading="lazy"
              onClick={() => openImage(project3)}
              style={{ cursor: "pointer" }}
            />
            <h3>Portal</h3>
            <p>
              Portal de integração entre sistemas estaduais e plataformas do
              governo
            </p>
          </div>
          <div className="project-card">
            <img
              src={stock}
              alt="Projeto 2"
              loading="lazy"
              onClick={() => openImage(stock)}
              style={{ cursor: "pointer" }}
            />
            <h3>Gerenciamento</h3>
            <p>
              Aplicativo que gerencia patrimônios, peças e ordens de serviço
            </p>
          </div>
          <div className="project-card">
            <img
              src={todoList}
              alt="To-Do List"
              loading="lazy"
              onClick={() => openImage(todoList)}
              style={{ cursor: "pointer" }}
            />
            <h3>To-Do List</h3>
            <p>
              Um aplicativo de Lista de Tarefas que permite se manter organizado
              e produtivo com facilidade!
            </p>
            <a
              href="https://kamilly-quadros.github.io/to-do-list/"
              className="btn"
            >
              Ver Projeto
            </a>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage!} alt="Imagem ampliada" />
            <button onClick={closeModal} className="close-button">
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
