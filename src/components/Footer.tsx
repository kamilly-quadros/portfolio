import React from 'react';

import '../styles/components/Footer.css';

const Footer: React.FC = () => {

    return (
        <footer>
            <p>&copy; 2024 MeuPortfólio. Todos os direitos reservados.</p>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/kamilly-quadros-418554260/"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/kamilly-quadros"><i className="fab fa-github"></i></a>
            </div>
        </footer>
    );
};

export default Footer;
