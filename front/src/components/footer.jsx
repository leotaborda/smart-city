import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AboutCard from './aboutCard';
import Logo from '../assets/Groovy.png'; // Certifique-se de que o caminho está correto
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(prevItem => (prevItem === item ? null : item));
  };

  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-start'>
        
        {/* Logo e Sobre */}
        <div className='mb-6 md:mb-0'>
          <Link to="/">
            <img src={Logo} alt="Groovy Logo" className='h-12 mb-4' />
          </Link>
          <p className='text-gray-400 max-w-xs'>
            O Smart City API Sensors está focado na criação de uma solução inteligente para monitoramento interno da Instituição SENAI "Roberto Mange".
          </p>
        </div>

        {/* Links de Navegação */}
        <div className='mb-6 md:mb-0'>
          <h3 className='text-xl font-semibold mb-4'>Navegação</h3>
          <ul>
            <li className='mb-2'>
              <Link to="/" className='hover:text-red-500 transition duration-200'>Home</Link>
            </li>
            <li className='mb-2'>
              <button
                onClick={() => handleItemClick('Criador')}
                className='hover:text-red-500 transition duration-200'
              >
                Criador
              </button>
            </li>
            <li className='mb-2'>
              <button
                onClick={() => handleItemClick('Ferramentas')}
                className='hover:text-red-500 transition duration-200'
              >
                Ferramentas
              </button>
            </li>
            <li className='mb-2'>
              <button
                onClick={() => handleItemClick('Professores')}
                className='hover:text-red-500 transition duration-200'
              >
                Professores
              </button>
            </li>
            <li className='mb-2'>
              <button
                onClick={() => handleItemClick('SENAI')}
                className='hover:text-red-500 transition duration-200'
              >
                SENAI
              </button>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className='text-xl font-semibold mb-4'>Siga-nos</h3>
          <div className='flex space-x-4'>
            <a href="https://instagram.com/_.taborda" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-red-500 transition duration-200'>
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/leonardo-taborda-de-oliveira-361019255/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-red-500 transition duration-200'>
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Condicional AboutCard */}
      {selectedItem && (
        <AboutCard item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

      {/* Linha Divisória */}
      <div className='container mx-auto px-4 my-6'>
        <hr className="border-t border-gray-700" />
      </div>

      {/* Direitos Autorais */}
      <div className='container mx-auto px-4 text-center text-gray-400'>
        <p>© {new Date().getFullYear()} Smart City. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
