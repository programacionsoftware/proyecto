const express = require('express');
const { Pool } = require('pg');
const cors  = require('cors');

// configuracion de la conexion a postgreSQL

const conexion = new Pool({
    user: 'postgres',
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
app.get('/api/datos', async (req, res) => {
    try {
        const result = await conexion.query('SELECT * FROM nodo_galapa.articulo');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('error en la consulta');
    }
});

app.get('/api/stock', async (req, res) => {
    try {
        const result = await conexion.query('SELECT * FROM nodo_galapa.stock');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('error en la consulta');
    }
});
////////////////////////////////////////////////////////////////////////
app.post('/registrar', async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await pool.query(
        'INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, username, email, role',
        [username, email, hashedPassword, role || 'user']
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error en el registro');
    }
  });
// loguin
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      const user = result.rows[0];
  
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Credenciales incorrectas');
      }
  
      const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error en el login');
    }
  });
////////////////////////////////
///////////////////////////token/////////////////////////////////////
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).send('Acceso no autorizado');
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(400).send('Token no válido');
    }
  };

 // / rutas protegidas
  pp.get('/profile', verifyToken, (req, res) => {
    res.json({
      id: req.user.userId,
      role: req.user.role,
    });
  });
  

// se inicia el servidor
const port = 5000;

app.listen(port, () => {
    console.log(`el servidor esta corriendo en http://localhost:${port}`);
});


