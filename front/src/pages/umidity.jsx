import Header from "../components/header";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Line } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'; 

// Registro dos componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Umidity = () => {
    const [umidityData, setUmidityData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUmidity = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/umidade/");
                console.log(response.data);
                setUmidityData(response.data);
            } catch (error) {
                console.error('Erro ao buscar os dados de Umidade: ', error);
                setError('Não foi possível carregar os dados de umidade.');
            } finally {
                setLoading(false);
            }
        };

        fetchUmidity();
    }, []);

    if (loading) {
        return (
            <>
                <Header />
                <div className="flex justify-center items-center h-screen bg-gray-100">
                    <div className="flex flex-col items-center">
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

    // Preparando dados para o gráfico
    const chartData = {
        labels: umidityData.map(data => new Date(data.timestamp).toLocaleDateString()),
        datasets: [
            {
                label: 'Valor de Umidade (%)',
                data: umidityData.map(data => data.valor),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 3,
            },
        ],
    };

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
                text: 'Evolução da Umidade ao Longo do Tempo',
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
                    text: 'Umidade (%)',
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
                top: 25, 
            },
        },
    };
    

    return (
        <>
            <Header/>
            <div className="flex flex-col items-center px-4 py-8 bg-gray-100 min-h-screen">
                {/* Gráfico */}
                <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-md mb-8">
                    <Line data={chartData} options={chartOptions}/>
                </div>

                {/* Tabela */}
                <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dados de Umidade</h2>
                    <table className="min-w-full table-auto">
                        <thead className="bg-blue-100">
                            <tr>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">ID</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Valor (%)</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Sensor ID</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-light">
                            {umidityData.map(data => (
                                <tr key={data.id} className="border-b border-gray-200 hover:bg-gray-50 transition duration-200">
                                    <td className="py-4 px-6 text-gray-700">{data.id}</td>
                                    <td className="py-4 px-6 text-gray-700">{data.valor}</td>
                                    <td className="py-4 px-6 text-gray-700">{data.sensor_id}</td>
                                    <td className="py-4 px-6 text-gray-700">{new Date(data.timestamp).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Umidity;
