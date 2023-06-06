import './Body.css'

const Body = ({ endereco, onType }) => {
    return (
        <div className='body'>
            <h1>Consulta CEP</h1>
            <input type='number' placeholder='Digite o cep' onChange={onType}></input>

            <ul>
                <li>Cep: {endereco.cep}</li>
                <li>Rua: {endereco.rua}</li>
                <li>Bairro: {endereco.bairro}</li>
                <li>Cidade: {endereco.cidade}</li>
                <li>Estado: {endereco.estado}</li>
            </ul>
      </div>
    );
}

export default Body