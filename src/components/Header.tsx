import React, { useState } from 'react';
import '../styles/components/Header.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header>
                <div className="logo">Portfólio</div>
                <button className="menu-button" onClick={toggleMenu}>
                    ☰
                </button>
                <nav className={isMenuOpen ? 'nav-open' : 'nav'}>
                    <ul>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#skills">Habilidades</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
