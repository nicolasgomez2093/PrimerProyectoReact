import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavReactB from "./componentes/NavReactB";
import Card from "./componentes/Card";
import Contador from "./componentes/Contador";
import FormPersonas from "./componentes/FormPersonas";
import Photos from "./pages/Photos"
//Componente funcional que recibe el nombre con la primera en mayuscula

const articulos = [
  {
    image:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    titulo: "Corola",
    descripcion: "Modelo 2001",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618510120934-8e95e3ee8033?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    titulo: "Hilux",
    descripcion: "Modelo 2020",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618510120934-8e95e3ee8033?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    titulo: "Etios",
    descripcion: "Modelo 2021",
  },
];

function App() {
  // const images = [
  //   {image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
  //   {image: "https://images.unsplash.com/photo-1618510120934-8e95e3ee8033?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}
  // ]
  const [section, setSection] = useState('Cards');
  const [articles, setArticles] = useState(articulos);

  return (
    <div className=""> 
      <NavReactB setSection={setSection} />

      {section === 'Contador' && <Contador />}

      {section === 'Cards' && ( <div className="container d-flex">
        {articles.map((articulo) => (
          <Card
            articulo={articulo}
            // imagen={articulo.image}
            // titulo={articulo.titulo}
            // descripcion={articulo.descripcion}
          />
        ))}
      </div>
      )}

      {section === 'Formulario' && <FormPersonas />}
      {section === 'Fotos' && <Photos />}
    </div>

  );
}

export default App;
