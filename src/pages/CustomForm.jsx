import { Button } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";

const setLStorageItem = (key, value) => {
  localStorage.setItem(key , JSON.stringify(value))

}

const initialArticulos = JSON.parse(localStorage.getItem('articulos')) || [];

export default function CustomForm() {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({}) //Nuestro estado inicial es un objeto
    const [articulos, setArticulos] = useState(initialArticulos)  ///Con esta linea traemos los datos del local para que sea el valor inicial)

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === true) {
        event.stopPropagation();
        // const id = getID();
        const newArticulos = [...articulos, input];
        setArticulos(newArticulos) //{...input, id}
        setLStorageItem('articulos', newArticulos);
        form.reset(); //Para limpiar los campos del formulario
        setValidated(false); //Para que deje de validar cuando limpio los campos
      } else{
        setValidated(true);
      }
      
    };

    const handleChange = (event) => {
        const {value, name} = event.target;   //DESESTRUCTURAR
        
        setInput({ ...input, [name]: value })
    };

    return (
      <Form className="card p-4 mx-auto my-5" style={{maxWidth: '500px'}} noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group  controlId="validationCustom01">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="titulo"
              required
              type="text"
              placeholder="Escriba un titulo"
            //   defaultValue=""
            />
            <Form.Control.Feedback>Campo completo!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Campo incompleto!</Form.Control.Feedback>

          </Form.Group>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="imagen"
              required
              type="text"
              placeholder="Ingrese la imagen"
            //   defaultValue=""
            />
            <Form.Control.Feedback>Datos correctos</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Campo incompleto!</Form.Control.Feedback>

          </Form.Group>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="descripcion"
              required
              type="text"
              placeholder="Escriba una descripcion"
            //   defaultValue=""
            />
            <Form.Control.Feedback>Datos correctos</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Campo incompleto!</Form.Control.Feedback>

          </Form.Group>
        
        <Button type="submit">ENVIAR</Button>
      </Form>
    );
  };
  
 