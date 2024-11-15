import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Perfil = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    axios
      .get('http://localhost:5000/perfil', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setProfile(response.data))
      .catch((error) => console.log(error));
  }, []);

  return perfil ? (
    <div>
      <h2>Perfil</h2>
      <p>ID: {profile.id}</p>
      <p>Rol: {profile.role}</p>
    </div>
  ) : (
    <p>Cargando...</p>
  );
};

export { Perfil };