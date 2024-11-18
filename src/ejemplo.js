import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style/Reporte.css';

const Datos = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();  // Para redirigir al login si no está autenticado

    const columns = [
        { name: 'ID', selector: row => row.id_articulo, sortable: true },
        { name: 'CATEGORIA', selector: row => row.id_categoria, sortable: true },
        { name: 'DESCRIPCION', selector: row => row.descripcion, sortable: true },
        { name: 'ESTADO', selector: row => row.estado, sortable: true },
    ];

    // Verificamos si el token existe, si no, redirigimos al login
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');  // Redirigir al login si no hay token
        } else {
            const fetchData = async () => {
                try {
                    const response = await axios.get('http://localhost:5000/api/datos', {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    console.log('Datos recibidos:', response.data);
                    setData(response.data);
                } catch (e) {
                    console.error('Error de datos', e);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [navigate]);

    return (
        <div>
            <h1 className='mainReport'>Datos Históricos</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    fixedHeader
                    selectableRows
                />
            )}
        </div>
    );
};

export { Datos };
