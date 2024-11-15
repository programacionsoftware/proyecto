import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registrar = () => {
  const [tipoDoc, setTipoDoc] = useState('');
  const [identification, setIdentification] = useState('');
  const [username, setUsername] = useState('');
  const [lastName, setlastName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', { tipoDoc, identification, username, lastName, gender, address, phone, email, password });
      navigate('/login');
    } catch (err) {
      setError('Error al registrar el usuario');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
      <input
          type="text"
          placeholder="Tipo Documento"
          value={tipoDoc}
          onChange={(e) => setTipoDoc(e.target.value)}
          required
        />
          <input
          type="text"
          placeholder="Documento"
          value={identification}
          onChange={(e) => setIdentification(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
          <input
          type="text"
          placeholder="Apellido de usuario"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          required
        />
          <input
          type="text"
          placeholder="Sexo"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        />
          <input
          type="text"
          placeholder="Direccion"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
          <input
          type="text"
          placeholder="Telefono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrar</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export { Registrar };