import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Perfil = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    axios
      .get('http://localhost:5000/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setProfile(response.data))
      .catch((error) => console.log(error));
  }, []);

  return profile ? (
    <div className="profile-container">
      <div className="card profile-card">
        <div className="card-body">
          <h2 className="card-title text-center">Perfil de Usuario</h2>
          <p><strong>ID:</strong> {profile.id}</p>
          <p><strong>Rol:</strong> {profile.role}</p>
        </div>
      </div>
    </div>
  ) : (
    <p className="loading">Cargando...</p>
  );
};

export { Perfil };