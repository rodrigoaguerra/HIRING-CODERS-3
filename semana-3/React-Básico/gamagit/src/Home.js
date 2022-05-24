import React, { useState } from 'react';
import axios from 'axios';

function App(props) {
  const [ usuario, setUsuario ] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setUsuario(value);
  };

  const handlePesquisa= () => {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }

  return (
    <>
      <input className="usuarioInput" type="text" placeholder="Usuário" onChange={handleChange} value={usuario} />
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;
