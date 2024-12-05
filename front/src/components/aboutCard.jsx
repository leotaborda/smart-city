// AboutCard.js
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiReact, SiDjango, SiTailwindcss } from "react-icons/si";
import Leonardo from "../assets/eu mesmo.JPEG";
import Lindomar from "../assets/lindomar.jfif";
import Fernanda from "../assets/fernanda.png";

const AboutCard = ({ item, onClose }) => {
  const renderContent = () => {
    switch (item) {
      case "Criador":
        return (
          <div className="flex flex-col items-center">
            <img
              src={Leonardo}
              alt="Leonardo Taborda de Oliveira"
              className="w-32 h-32 rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Leonardo Taborda de Oliveira
            </h3>
            <p className="text-gray-600 mb-4 text-center">
              Leonardo é o criador e desenvolvedor principal do Smart City. Com
              ampla experiência em desenvolvimento front-end, ele domina
              tecnologias como React, Django e Tailwind CSS. Apaixonado por
              soluções inovadoras, Leonardo busca constantemente aprimorar suas
              habilidades para criar sistemas inteligentes que promovem a
              sustentabilidade e a eficiência nas instituições.
            </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.linkedin.com/in/leonardo-taborda-de-oliveira-361019255/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-200"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/leotaborda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition duration-200"
              >
                <FaGithub size={24} />
              </a>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Habilidades
              </h4>
              <div className="flex space-x-4">
                <SiReact className="text-blue-500" size={30} title="React" />
                <SiDjango className="text-green-700" size={30} title="Django" />
                <SiTailwindcss
                  className="text-teal-500"
                  size={30}
                  title="TailwindCSS"
                />
              </div>
            </div>
          </div>
        );

      case "Professores":
        return (
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Lindomar Batistão */}
            <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-64">
              <img
                src={Lindomar}
                alt="Lindomar Batistão"
                className="w-32 h-32 rounded-full mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Lindomar Batistão
              </h3>
              <p className="text-gray-600 mb-2">Programação Backend</p>
              <p className="text-gray-600 mb-4 text-center">
                Lindomar é responsável pela programação backend do projeto. Com
                vasta experiência em Django, ele garante que a API seja robusta,
                eficiente e escalável.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/lindomarbatistao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-200"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/lindomarbatistao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black transition duration-200"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>

            {/* Fernanda Fretes */}
            <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-64">
              <img
                src={Fernanda}
                alt="Fernanda Fretes"
                className="w-32 h-32 rounded-full mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Fernanda Fretes
              </h3>
              <p className="text-gray-600 mb-2">Programação Frontend</p>
              <p className="text-gray-600 mb-4 text-center">
                Fernanda lidera a programação frontend, utilizando React 
                para criar interfaces de usuário interativas e
                responsivas.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/fernanda-fretes-08762927/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-200"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/FernandaFretes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black transition duration-200"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        );

      case "Ferramentas":
        return (
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Tecnologias Utilizadas
            </h3>
            <div className="flex space-x-6">
              <div className="flex flex-col items-center">
                <SiReact className="text-blue-500" size={50} title="React" />
                <span className="mt-2 text-gray-700">React</span>
              </div>
              <div className="flex flex-col items-center">
                <SiDjango className="text-green-700" size={50} title="Django" />
                <span className="mt-2 text-gray-700">Django</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss
                  className="text-teal-500"
                  size={50}
                  title="TailwindCSS"
                />
                <span className="mt-2 text-gray-700">TailwindCSS</span>
              </div>
            </div>
          </div>
        );

      case "SENAI":
        return (
          <div className="flex flex-col items-center">
            <p className="text-lg text-gray-700 mb-4 text-center">
              O SENAI é uma instituição de educação profissional que oferece
              cursos técnicos, tecnologia e qualificação profissional,
              contribuindo para o desenvolvimento econômico e social.
            </p>
            <a
              href="https://www.sp.senai.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700 transition duration-200"
            >
              Ir para o SENAI
            </a>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-2xl relative overflow-y-auto max-h-screen">
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-200 text-2xl font-bold"
          aria-label="Fechar Modal"
        >
          &times;
        </button>

        {/* Conteúdo Dinâmico */}
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default AboutCard;
