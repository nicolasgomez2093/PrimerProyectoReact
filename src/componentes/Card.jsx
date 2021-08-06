import './card.css'

function Boton() {
    return (
        <button className="btn btn-primary">
            Leer mas...
          </button>
    );
}

export default function Card(props) {
    
    return (
        <div className="card mx-3 my-5 fondo style-card cardProducto" style={{width: "18rem"}}>
        <img src={props.articulo.image} className="card-img-top card-recorte" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.articulo.titulo}</h5>
          <p className="card-text">
            {props.articulo.descripcion}
          </p>
          <Boton />
        </div>
      </div>
    );
}


