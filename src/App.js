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
    
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
     
    </div>
    

  );
}

export  { App };
