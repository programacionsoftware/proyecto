import React from 'react';
import './App.css';
import './style/main.css';
import './style/LoguinPrincipal.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Datos } from './Datos';
import { Stock} from './Stock';	
import { Login } from './Login';
import { Registrar } from './Registrar';
import { Perfil } from './Perfil';


function App() {
  return (
    <div className= 'App'>
    <h1 className='Main'>SISTEMA DE INVENTARIO MOBID+D</h1>
    <Datos />
    <Stock />
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Register />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </Router>
     
    </div>
    

  );
}

export default App;
