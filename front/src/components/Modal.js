// Modal.jsx
import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        if (modalRef.current) {
            modalRef.current.focus();
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" aria-modal="true" role="dialog">
            <div
                className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md relative"
                role="document"
                tabIndex="-1"
                ref={modalRef}
            >
                {/* Botão de Fechar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-200 text-xl"
                    aria-label="Fechar Modal"
                >
                    <FaTimes />
                </button>

                {/* Conteúdo do Modal */}
                <h2 className="text-2xl font-bold mb-4">Adicionar Novo Sensor</h2>
                {/* Formulário ou conteúdo adicional aqui */}
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sensorName">
                            Nome do Sensor
                        </label>
                        <input
                            type="text"
                            id="sensorName"
                            name="sensorName"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Digite o nome do sensor"
                            required
                        />
                    </div>
                    {/* Adicione mais campos conforme necessário */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Adicionar Sensor
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
