import {FiSearch} from 'react-icons/fi';
// google ir state ou estado
import { useState } from 'react';
// import './App.css';
import './style.css';
// Importar API
import api from './service/api';

function App() {
  // Nome do estado #Input, funão para trocar io valor #setInput
  const [input, setInput] = useState('');

  // Buscar os dados e mandar para tela
  const[cep, setCep] = useState({});

  async function btnSearch(){
    // passamos a funçao async para
    
    if (input ==='') {
      alert('Digite o nº de B.I');
      return;
    }

    try {
      const response = await  api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Erro ao discar");
      // limpar apos pesquisa
      setInput("");
    }

  };

  return (
    <div className="container">
      {/* Titulo */}
      <h1 className='titles'>buap</h1>
      <h2 className='title'>Moradia de cidadão</h2>
      {/* Area de pesquisa */}
    <div className='containerInput'>
      <input type="text" placeholder="Digite o seu CEP ..."
      // Valor de input
      value={input}


      //Mudar o valor do input, recebemos um evento anónimo que chamaremos de #e, pegando o tudo escrito para o nosso useState
      onChange={(e)=>setInput(e.target.value)}
      >
        
      </input>
      <button className="buttonSearch" onClick={btnSearch}>
        {/* Procurar : */}
        <FiSearch size={20} color="#FFF"></FiSearch>
        </button>
    </div>
    {/* Area de resultado */}


    {/* renderização quando tiver, #verificador */}
    {Object.keys(cep).length > 0 && (

      <main className="main">
      <h2>BI :{cep.cep}</h2>
      <span>{cep.logradouro}</span>
      <span>Complemento{cep.complemento}</span>
      <span>{cep.bairro}</span>
      <span>{cep.localidade} - {cep.uf}</span>

    </main>
       )} 
    </div>
  );
}

export default App;
