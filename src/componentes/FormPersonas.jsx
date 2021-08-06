import React from 'react'
import { useState } from 'react'
import CustomForm from '../pages/CustomForm';

function FormPersonas() {
    const [personas, setPersonas] = useState([]);
    const [classBoton, setClassBoton] = useState('btn-primary')
    const [bool, setBool] = useState (true);

    const [nombre, setNombre] = useState('');
    const handleChange = (event) => {
        const {value} = event.target;   //DESESTRUCTURAR
        setNombre(value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setPersonas([...personas, nombre]);
        setClassBoton('btn-danger')    
    };

    const handleSwitch = () => {
        setBool(!bool);
    };

    return (
        <>
        <div className="card p-5 m-auto" style = {{width: '400px'}}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        onChange = {handleChange}
                    />
                </div>
                <div className="custom-control custom-switch">
                        <input 
                        checked ={bool} 
                        type="checkbox" 
                        className="custom-control-input" 
                        id="customSwitch1" 
                        onChange = {handleSwitch} />
                        <label className="custom-control-label" htmlFor="customSwitch1">
                            {bool && 'Presione para ocultar este mensaje'}
                        </label>
                </div>
  
                <button type="submit" className={`btn ${classBoton}`}>
                    ENVIAR
                </button>
            </form>
            <ul className="mt-3">
                {personas.map((persona) => (
                <li>{persona}</li>
                ))}
            </ul>
        </div>
        <CustomForm />
        </>
    );
}

export default FormPersonas
