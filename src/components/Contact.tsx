import React, { useEffect, useState } from 'react';
import AOS from 'aos';

import '../styles/components/Contact.css';
import 'aos/dist/aos.css';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica para envio do formulário
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="contact" data-aos="fade-up" >
            <h2>Contato</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Mensagem"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit" className="btn">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;
