// Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
    FaBars, 
    FaTimes, 
    FaMicrochip, 
    FaWater, 
    FaTemperatureHigh, 
    FaLightbulb, 
    FaPlus, 
    FaTachometerAlt 
} from "react-icons/fa";
import Modal from "./Modal.js"; // Certifique-se de que o caminho está correto

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navigation = [
        { name: "Sensores", path: "/sensor", icon: <FaMicrochip /> },
        { name: "Umidade", path: "/umidity", icon: <FaWater /> },
        { name: "Temperatura", path: "/temperature", icon: <FaTemperatureHigh /> },
        { name: "Luminosidade", path: "/luminosity", icon: <FaLightbulb /> },
        { name: "Contador", path: "/counter", icon: <FaTachometerAlt /> },
    ];

    return (
        <nav className="bg-[#E4E4E5] p-4 shadow-md fixed w-full z-10">
            <div className="flex items-center justify-between">
                {/* Logo ou Título */}
                <Link to="/" className="text-2xl font-bold flex items-center">
                    <span className="mr-2">Sensores</span>
                    {/* Você pode adicionar um ícone ou logo aqui */}
                </Link>

                {/* Botão de Menu Hamburguer (Mobile) */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-2xl text-gray-700 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Links de Navegação (Desktop) */}
                <ul className="hidden md:flex space-x-6">
                    {navigation.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                onClick={closeMobileMenu}
                                className={`flex items-center text-xl hover:text-blue-600 transition-colors ${
                                    location.pathname === item.path ? "text-blue-600 font-semibold" : "text-gray-700"
                                }`}
                            >
                                <span className="mr-2">{item.icon}</span>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    {isAuthenticated && (
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsModalOpen(true);
                                    closeMobileMenu();
                                }}
                                className="flex items-center text-xl text-white bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-2 rounded-md"
                            >
                                <FaPlus className="mr-2" />
                                Novo Sensor
                            </button>
                        </li>
                    )}
                </ul>
            </div>

            {/* Menu de Navegação (Mobile) */}
            {isMobileMenuOpen && (
                <ul className="md:hidden mt-4 space-y-4">
                    {navigation.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                onClick={closeMobileMenu}
                                className={`flex items-center text-xl hover:text-blue-600 transition-colors ${
                                    location.pathname === item.path ? "text-blue-600 font-semibold" : "text-gray-700"
                                }`}
                            >
                                <span className="mr-2">{item.icon}</span>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    {isAuthenticated && (
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsModalOpen(true);
                                    closeMobileMenu();
                                }}
                                className="flex items-center text-xl text-white bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-2 rounded-md w-full text-left"
                            >
                                <FaPlus className="mr-2" />
                                Novo Sensor
                            </button>
                        </li>
                    )}
                </ul>
            )}

            {/* Modal para Adicionar Novo Sensor */}
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </nav>
    );
};

export default Navbar;
