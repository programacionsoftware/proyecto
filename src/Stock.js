import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';


const Stock = () => {
    const [data, setData] = useState(
        []);
    const [loading, setLoading] = useState(true);

    const columns = [
        {name: 'ID', selector: row => row.id_articulo, sortable: true},
        {name: 'CENTRO DE COSTO', selector: row => row.id_centro_costo, sortable: true},
        {name: 'BODEGA', selector: row => row.id_bodega, sortable: true},
        {name: 'CANTIDAD', selector: row => row.cantidad, sortable: true},
    ];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/stock');
                console.log('Datos recibidos:', response.data);
                setData(response.data);
            }catch (e) {
                console.error('Error de datos', e);
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    
    return (
        <div>
            <h1 className='mainReport'>Datos De Stock</h1>
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

export { Stock };