const express = require('express');
const { Pool } = require('pg');
const cors  = require('cors');




// configuracion de la conexion a postgreSQL

const conexion = new Pool({
    user: 'carlos',
    host: 'localhost',
    database: 'SENA',
    password:  '123456',
    port: 5432,
   
});


  
conexion.connect();
const app = express();
//cors permitimos conexion con react-es decir el frontend
app.use(cors());
app.use(express.json());
//obtenemos datos de postgres
app.get('/api/reportes', async (req, res) => {
    try {
        const result = await conexion.query('SELECT * FROM nodo_galapa.articulo');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('error en la consulta');
    }
});
// se inicia el servidor
const port = 5000;

app.listen(port, () => {
    console.log(`el servidor esta corriendo en http://localhost:${port}`);
});