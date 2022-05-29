import React, { useState } from 'react';
import axios from 'axios';
import * as S from "./styled";
import { useNavigate } from 'react-router-dom';

function App(props) {
  const navigate = useNavigate();
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setError ] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setUsuario(value);
  };

  const handlePesquisa= () => {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setError(false);
      navigate('/repositories');
    }).catch(err => {
      setError(true);
    });
  }

  return (
    <S.Container>
      <S.Content>
        <S.Input className="usuarioInput" type="text" placeholder="Usuário" onChange={handleChange} value={usuario} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro && <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg>}
    </S.Container>
  );
}

export default App;
