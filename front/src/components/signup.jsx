import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./header";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        localStorage.removeItem("token");
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError('');

        if (!username || !password || !email) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            console.log("Formulário submetido.");

            const response = await axios.post("http://127.0.0.1:8000/api/create_user/", {
                username: username,
                email: email,
                password: password
            });

            const tokenResponse = await axios.post("http://127.0.0.1:8000/api/token/", {
                username: username,
                password: password
            });

            const token = tokenResponse.data.access;
            localStorage.setItem("token", token);

            alert("Usuário cadastrado com sucesso!");
            setUsername("");
            setEmail("");
            setPassword("");
            setError("");

            const from = location.state?.from || "/";
            navigate(from);

        } catch (error) {
            console.error("Erro:", error);

            if (error.response) {
                console.log("Erro de resposta:", error.response.data);
                setError("Erro ao cadastrar usuário: " + JSON.stringify(error.response.data));
            } else {
                setError("Erro ao cadastrar o usuário: " + error.message);
            }
        }  
    };

    return (
        <>
            <Header/>

            <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-green-400 to-blue-500">
                <div className="bg-white shadow-2xl rounded-xl p-10 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Crie sua Conta</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">Usuário</label>
                            <input 
                                id="username"
                                type="text" 
                                placeholder="Insira seu Nome de Usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 border border-green-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <div className="mb-5">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                            <input 
                                id="email"
                                type="email" 
                                placeholder="Insira seu E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-green-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <div className="mb-5">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Senha</label>
                            <input 
                                id="password"
                                type="password" 
                                placeholder="Insira a sua Sennha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-green-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
                        >
                            Cadastrar
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">Já possui uma conta?</p>
                        <Link to="/login">
                            <button className="mt-2 w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition duration-300">
                                Faça Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
