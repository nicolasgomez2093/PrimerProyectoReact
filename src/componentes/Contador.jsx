import { useState } from 'react'

function Contador() {

    const [counter, setCounter] = useState(0)
        const addCounter = () => {
            setCounter(counter + 1);
        };
        const extractCounter = () => {
            setCounter(counter - 1);
        };
        const reset = () => {
                setCounter(0);
        };
    

    return (
        <div className="text-center p-5">
            <h1>Contador: {counter}</h1>
            <button className="btn btn-primary m-2" onClick={addCounter}>+</button>
            <button className="btn btn-danger m-2" onClick={extractCounter}>-</button>
            <button className="btn btn-dark m-2" onClick={reset}>RESET</button>

        </div>
    )
}

export default Contador
