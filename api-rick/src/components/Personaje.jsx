import React from "react";

// componente para mostrar los personajes

const Personaje = ({ personaje }) => {
  // pasamos el props de PintarDatos

  const { name, species, image } = personaje; // desestructuramos los datos del objeto recibido que queremos mostrar

  return (
    // pintamos el personaje y le pasamos dinámicamente el nombre, el enlace de la imagen y la especie
    <div className="col-md-4 mb-2">
      <div className="card">
        <img src={image} alt={`imagen-${name}`} className="card-img-top" />
        <div className="card-body">
          <h5>{name}</h5>
          <p>{species}</p>
        </div>
      </div>
    </div>
  );
};

export default Personaje;
