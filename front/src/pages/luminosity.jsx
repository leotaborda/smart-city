import React, { useEffect, useState, useMemo } from "react";
import axios from 'axios';
import Header from "../components/header";
import Footer from "../components/footer";
import { Line } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'; 

// Registro dos componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Luminosity = () => {
    const [luminosityData, setLuminosityData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchLuminosity = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/luminosidade/");
                console.log(response.data);
                setLuminosityData(response.data);
            } catch (error) {
                console.error('Erro ao buscar os dados de luminosidade: ', error);
                setError('Não foi possível carregar os dados de luminosidade.');
            } finally {
                setLoading(false);
            }
        };

        fetchLuminosity();
    }, []);

    // **Hooks useMemo chamados no topo, antes de quaisquer retornos condicionais**
    const filteredData = useMemo(() => {
        return luminosityData.filter(sensor => {
            const search = searchTerm.toLowerCase();
            const idMatch = sensor.id?.toString().toLowerCase().includes(search) || false;
            const valorMatch = sensor.valor?.toString().toLowerCase().includes(search) || false;
            const sensorIdMatch = sensor.sensor_id?.toString().toLowerCase().includes(search) || false;
            const timestampMatch = sensor.timestamp 
                ? new Date(sensor.timestamp).toLocaleString().toLowerCase().includes(search)
                : false;

            return idMatch || valorMatch || sensorIdMatch || timestampMatch;
        });
    }, [luminosityData, searchTerm]);

    const chartData = useMemo(() => ({
        labels: filteredData.map(data => new Date(data.timestamp).toLocaleDateString()),
        datasets: [
            {
                label: 'Valor de Luminosidade (Lux)',
                data: filteredData.map(data => data.valor),
                borderColor: 'rgba(255, 206, 86, 1)', // Amarelo
                backgroundColor: 'rgba(255, 206, 86, 0.2)', // Amarelo com transparência
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 3,
            },
        ],
    }), [filteredData]);

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                    },
                },
            },
            title: {
                display: true,
                text: 'Evolução da Luminosidade ao Longo do Tempo',
                font: {
                    size: 18,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Luminosidade (Lux)',
                    font: {
                        size: 14,
                    },
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Data',
                    font: {
                        size: 14,
                    },
                },
            },
        },
        layout: {
            padding: {
                top: 15, // Adiciona 15px de padding no topo do gráfico
            },
        },
    };

    // **Retornos condicionais após todos os Hooks**
    if (loading) {
        return (
            <>
                <Header />
                <div className="flex justify-center items-center h-screen bg-gray-100">
                    <div className="flex flex-col items-center">
                        {/* Spinner SVG */}
                        <svg className="animate-spin h-10 w-10 text-blue-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8H4z"
                            ></path>
                        </svg>
                        <p className="text-xl text-gray-700">Carregando...</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Header />
                <div className="flex justify-center items-center h-screen bg-gray-100">
                    <p className="text-xl text-red-500">{error}</p>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header/>
            <div className="flex flex-col items-center px-4 py-8 bg-gray-100 min-h-screen">
                {/* Gráfico */}
                <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-md mb-8 mt-[15px]">
                    <Line data={chartData} options={chartOptions}/>
                </div>

                {/* Tabela com Barra de Busca */}
                <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Dados de Luminosidade</h2>
                        <input
                            type="text"
                            placeholder="Buscar sensores..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="mt-2 sm:mt-0 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <table className="min-w-full table-auto">
                        <thead className="bg-yellow-100">
                            <tr>
                                <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">ID</th>
                                <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Valor (Lux)</th>
                                <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Sensor ID</th>
                                <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-light">
                            {filteredData.map(data => (
                                <tr key={data.id} className="border-b border-gray-200 hover:bg-yellow-50 transition duration-200">
                                    <td className="py-4 px-6 text-gray-700">{data.id}</td>
                                    <td className="py-4 px-6 text-gray-700">{data.valor}</td>
                                    <td className="py-4 px-6 text-gray-700">{data.sensor_id}</td>
                                    <td className="py-4 px-6 text-gray-700">{new Date(data.timestamp).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filteredData.length === 0 && (
                        <div className="flex justify-center items-center mt-4">
                            <p className="text-gray-500">Nenhum dado encontrado.</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Luminosity;
