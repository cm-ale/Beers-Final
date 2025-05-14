import axios from '../api/axios';

export const login = async (username, password) => {
  try {
    const res = await axios.get('/users'); // lee desde db.json, con la clave users (simulado con json-server)
    const user = res.data.find(
      u => u.username === username && u.password === password
    );

    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    // Simulamos un token JWT (opcional)
    const token = btoa(`${user.username}:${user.role}`); 

    return { token, user };
  } catch (err) {
    throw err;
  }
};
