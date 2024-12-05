import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        localStorage.removeItem("token");
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        if (!username || !password) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const tokenResponse = await axios.post("http://127.0.0.1:8000/api/token/", {
                username: username,
                password: password
            });

            const token = tokenResponse.data.access;
            localStorage.setItem("token", token);
            alert("Login bem sucedido.");

            const from = location.state?.from || "/";
            navigate(from);
        } catch (err) {
            console.error("Erro ao fazer login:", err);
            setError("Erro ao fazer login. Verifique suas credenciais.");
        }
    };

    return (
        <>
            <Header />

            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Bem-vindo de Volta!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">Usuário</label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Seu nome de usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        <div className="mb-5">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Senha</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
                        >
                            Entrar
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">Ainda não tem uma conta?</p>
                        <Link to="/signUp">
                            <button className="mt-2 w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition duration-300">
                                Cadastre-se
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
