import Header from "../components/header";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Registro dos componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SensorTable = () => {
    const [sensorData, setSensorData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSensor = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/sensors/");
                console.log(response.data);
                setSensorData(response.data);
            } catch (error) {
                console.error('Erro ao buscar os dados de Sensores: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSensor();
    }, []);

    if (loading) {
        return (
            <>
                <Header />
                <div className="flex justify-center items-center h-screen bg-gray-100">
                    <p className="text-xl text-gray-700">Carregando...</p>
                </div>
                <Footer />
            </>
        );
    }

    // Preparando dados para o gráfico
    const chartData = {
        labels: sensorData.map(sensor => `Sensor ${sensor.id}`),
        datasets: [
            {
                label: 'Tipos de Sensores',
                data: sensorData.map(sensor => {
                    // Exemplo: contando quantos tipos diferentes existem
                    // Ajuste conforme a necessidade real dos dados
                    return sensor.tipo.length; // Substitua por uma métrica relevante
                }),
                fill: false,
                backgroundColor: '#3b82f6',
                borderColor: '#3b82f6',
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Distribuição de Tipos de Sensores',
            },
        },
    };

    return (
        <>
            <Header />
            <div className="flex flex-col items-center px-4 py-8 bg-gray-100 min-h-screen">
                <div className="w-full max-w-5xl">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Tabela de Sensores</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">ID</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Tipo</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Localização</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Responsável</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-light">
                                {sensorData.map(data => (
                                    <tr key={data.id} className="border-b border-gray-200 hover:bg-gray-50 transition duration-200">
                                        <td className="py-4 px-6 text-gray-700">{data.id}</td>
                                        <td className="py-4 px-6 text-gray-700">{data.tipo}</td>
                                        <td className="py-4 px-6 text-gray-700">{data.localizacao}</td>
                                        <td className="py-4 px-6 text-gray-700">{data.responsavel}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Gráfico Opcional */}
                    {sensorData.length > 0 && (
                        <div className="w-full max-w-5xl mt-10">
                            <Line data={chartData} options={chartOptions} />
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SensorTable;
