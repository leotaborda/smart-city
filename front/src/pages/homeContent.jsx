import React from "react";

const Content = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      
      {/* Introdução */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Bem-vindo ao Smart City
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sensores de Monitoramento"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg text-gray-700 text-justify">
              O <strong>Smart City</strong> é uma solução inovadora
              desenvolvida para o monitoramento inteligente das instalações da
              Instituição SENAI "Roberto Mange". Utilizando uma rede de sensores
              distribuídos estrategicamente, o sistema coleta dados em tempo
              real sobre diversas variáveis ambientais, permitindo uma gestão
              eficiente e sustentável das instalações. Esses dados são armazenados
              e disponibilizados através de uma API robusta, desenvolvida com
              Django Rest Framework, facilitando o acesso e a análise por parte
              de docentes, funcionários e alunos.
            </p>
          </div>
        </div>
      </section>

      {/* Funcionalidades: Sensores */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sensores Implementados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Sensor 1: Monitoramento de Temperatura */}
          <div className="flex flex-col items-center">
            {/* Fundo com Gradiente e Texto Sobreposto */}
            <div className="rounded-lg shadow-lg mb-4 w-full h-48 flex items-center justify-center bg-gradient-to-r from-red-400 to-orange-500">
              <span className="text-2xl font-semibold text-white">
                Monitoramento de Temperatura
              </span>
            </div>
            <p className="text-gray-600 text-center">
              Os sensores de temperatura coletam dados contínuos sobre as variações
              térmicas nas instalações, permitindo identificar problemas de
              climatização ou necessidades de manutenção preventiva.
            </p>
          </div>

          {/* Sensor 2: Monitoramento de Umidade */}
          <div className="flex flex-col items-center">
            {/* Fundo com Gradiente e Texto Sobreposto */}
            <div className="rounded-lg shadow-lg mb-4 w-full h-48 flex items-center justify-center bg-gradient-to-r from-blue-400 to-teal-500">
              <span className="text-2xl font-semibold text-white">
                Monitoramento de Umidade
              </span>
            </div>
            <p className="text-gray-600 text-center">
              Sensores de umidade ajudam a manter um ambiente saudável e prevenir
              danos estruturais, controlando a umidade em áreas críticas das
              instalações.
            </p>
          </div>

          {/* Sensor 3: Monitoramento de Luminosidade */}
          <div className="flex flex-col items-center">
            {/* Fundo com Gradiente e Texto Sobreposto */}
            <div className="rounded-lg shadow-lg mb-4 w-full h-48 flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600">
              <span className="text-2xl font-semibold text-white">
                Monitoramento de Luminosidade
              </span>
            </div>
            <p className="text-gray-600 text-center">
              Os sensores de luminosidade avaliam a intensidade da luz nas
              áreas monitoradas, permitindo ajustes automáticos no sistema de
              iluminação para otimizar o consumo energético e garantir conforto
              visual.
            </p>
          </div>

          {/* Sensor 4: Contador */}
          <div className="flex flex-col items-center">
            {/* Fundo com Gradiente e Texto Sobreposto */}
            <div className="rounded-lg shadow-lg mb-4 w-full h-48 flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500">
              <span className="text-2xl font-semibold text-white">
                Contador de Ocupação
              </span>
            </div>
            <p className="text-gray-600 text-center">
              O contador de ocupação rastreia a quantidade de pessoas nas áreas
              monitoradas, auxiliando na gestão de espaços, garantindo segurança
              e otimizando recursos conforme a demanda.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Benefícios do Smart City
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <img
              src="https://blogs.uninassau.edu.br/sites/blogs.uninassau.edu.br/files/crop/capa/2020/02/sem_titulo.jpg"
              alt="Eficiência Energética"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 text-justify">
              A implementação do Smart City API Sensors traz uma série de
              benefícios para a gestão da Instituição SENAI "Roberto Mange":
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>
                <strong>Eficiência Energética:</strong> Monitoramento contínuo
                permite otimizar o consumo de energia, reduzindo custos e
                promovendo a sustentabilidade.
              </li>
              <li>
                <strong>Manutenção Preventiva:</strong> Identificação de
                falhas antes que se tornem críticas, garantindo a longevidade
                das instalações.
              </li>
              <li>
                <strong>Segurança:</strong> Detecção de condições adversas
                que possam comprometer a segurança de alunos e funcionários.
              </li>
              <li>
                <strong>Tomada de Decisões Informadas:</strong> Acesso a dados
                em tempo real facilita a análise e a implementação de melhorias
                estratégicas.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tecnologias Utilizadas */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Tecnologias Utilizadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tecnologia 1: Django Rest Framework */}
          <div className="flex flex-col items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DNq5QatCejVIwC7dpvAUfGHCXBHSLjUrJQ&s"
              alt="Django Rest Framework"
              className="rounded-lg shadow-lg mb-4 w-24 h-24 object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Django Rest Framework
            </h3>
            <p className="text-gray-600 text-center">
              Framework poderoso para construir APIs robustas e escaláveis,
              facilitando a integração dos sensores com o sistema.
            </p>
          </div>

          {/* Tecnologia 2: React */}
          <div className="flex flex-col items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
              alt="React"
              className="rounded-lg shadow-lg mb-4 w-24 h-24 object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              React
            </h3>
            <p className="text-gray-600 text-center">
              Biblioteca JavaScript para construção de interfaces de usuário
              interativas e responsivas.
            </p>
          </div>

          {/* Tecnologia 3: Tailwind CSS */}
          <div className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
              alt="Tailwind CSS"
              className="rounded-lg shadow-lg mb-4 w-24 h-24 object-contain"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Tailwind CSS
            </h3>
            <p className="text-gray-600 text-center">
              Framework CSS utilitário para estilização rápida e responsiva,
              garantindo um design consistente e moderno.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
