
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import  './style/Reporte.css';
import { useNavigate } from 'react-router-dom';

const Datos = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const columns = [
        {name: 'ID', selector: row => row.id_articulo, sortable: true},
        {name: 'CATEGORIA', selector: row => row.id_categoria, sortable: true},
        {name: 'DESCRIPCION', selector: row => row.descripcion, sortable: true},
        {name: 'ESTADO', selector: row => row.estado, sortable: true},
    ];


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        } else {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/datos', {
                    headers: { Authorization: `Bearer ${token}` },
            });
                console.log('Datos recibidos:', response.data);
                setData(response.data);
            }catch (e) {
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
            <h1 className='mainReport'>Datos Historicos</h1>
            {loading ? (
                <p>Cargando</p>
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

export {Datos};