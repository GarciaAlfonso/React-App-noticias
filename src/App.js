import React, {Fragment, useState, useEffect} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListadoNoticias from './Components/ListadoNoticias';

function App() {

  //definir la categoria y noticias
  const [categoria, setCategoria] = useState('');

  //state de Noticias
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=4f5b631fbb234753a1e71341084e2c8a`;

      const respuesta = await fetch(url);

      const noticias = await respuesta.json();

      setNoticias(noticias.articles);


    }

    consultarAPI();

  }, [categoria]);
  return (
    <Fragment>
      
      <Header
        titulo="Últimas Noticias"
      />
      <div className="container">
        <Formulario
          setCategoria={setCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
