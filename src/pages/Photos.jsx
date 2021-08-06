import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from 'axios'
// 1- Consulta a la API JSONPlaceholder. Listado de fotos
// 2.1 - Mostrar el retorno del componente listado.
// 2.2- Mapear el listado para mostrarlo en cards.

function Photos() {
  const [photos, setPhotos] = useState([]);
  
  useEffect(() => {
     getPhotosAxios();
  }, []);  

  // const getPhotosFetch = () => {
  //   fetch("https://jsonplaceholder.typicode.com/photos")
  //     .then((response) => response.json())
  //     .then((photos) => setPhotos(photos));
  // };

  const getPhotosAxios = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => setPhotos(response.data));
  };

  return (
    <div>
      <button onClick={getPhotosAxios}>Fetch Photos</button>
      <div className="d-flex flex-wrap">
      {photos.slice(0, 4).map((photo) => (
        <Card style={{ width: "18rem" }} key={photo.id}>
          <Card.Img variant="top" src={photo.url} />
          <Card.Body>
            <Card.Title>{photo.title}</Card.Title>
            
          </Card.Body>
        </Card>
      ))}
      </div>
    </div>
  );
}

export default Photos;
