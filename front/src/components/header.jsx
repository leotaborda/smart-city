import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from '../assets/do-utilizador.png';
import Logo from '../assets/Groovy.png'; // Importe sua imagem de logo
import { FiMenu, FiX } from 'react-icons/fi'; // Ícones para o menu hambúrguer

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className='flex justify-between items-center p-4 fixed top-0 left-0 right-0 bg-white shadow-md z-50'>
            <Link to="/" className="flex items-center">
                <img src={Logo} alt="SENAI Logo" className='h-10 w-auto' /> {/* Substituição do <h1> pela imagem */}
            </Link>

            {/* Menu Desktop */}
            <nav className="hidden md:flex">
                <ul className='flex space-x-6'>
                    <li className='font-poppins text-base text-gray-800 hover:text-red-600 transition duration-200'>
                        <Link to="/">Home</Link>
                    </li>
                    {token ? (
                        <>
                            <li className='font-poppins text-base text-gray-800 hover:text-red-600 transition duration-200'>
                                <button onClick={handleLogout} className='focus:outline-none'>
                                    Logout
                                </button>
                            </li>
                            <li>
                                <img src={Usuario} alt="Usuário" className='w-8 h-8 rounded-full' />
                            </li>
                        </>
                    ) : (
                        <li className='font-poppins text-base text-gray-800 hover:text-red-600 transition duration-200'>
                            <Link to="/login">Login</Link>
                        </li>
                    )}
                </ul>
            </nav>

            {/* Menu Mobile */}
            <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Dropdown Mobile Menu */}
            {isMobileMenuOpen && (
                <nav className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden">
                    <ul className='flex flex-col items-center space-y-4 py-4'>
                        <li className='font-poppins text-base text-gray-800 hover:text-red-600 transition duration-200'>
                            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        </li>
                        {token ? (
                            <>
                                <li className='font-poppins text-base text-gray-800 hover:text-red-600 transition duration-200'>
                                    <button onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} className='focus:outline-none'>
                                        Logout
                                    </button>
                                </li>
                                <li>
                                    <img src={Usuario} alt="Usuário" className='w-8 h-8 rounded-full' />
                                </li>
                            </>
                        ) : (
                            <li className='font-poppins text-base text-gray-800 hover:text-red-600 transition duration-200'>
                                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
