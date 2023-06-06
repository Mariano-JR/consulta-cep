import { useState } from 'react';
import ParticlesBg from 'particles-bg'
import './App.css';
import Body from './components/Body';

function App() {

  const [endereco, setEndereco] = useState({});

  const onType = (event) => {
    const cep = event.target.value

    setEndereco({
      cep
    })

    if ( cep && cep.length === 8 ) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(dados => {
          setEndereco({
            ...endereco,
            rua: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          })
        })
    }
  }



  return (
    <div className="App">
      <ParticlesBg
        bg={true} 
        type='cobweb'
      />
      <Body 
        onType={onType}
        endereco={endereco}
      />
    </div>
  );
}

export default App;
