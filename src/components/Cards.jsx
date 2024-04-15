import React from 'react'


const cards = ({name, imagen, location, ocupation, description}) => {
  return (
    <div className='card'>    
      <div className='container-photo'>
        <picture>
          <img 
            src={`../src/assets/images/${imagen}`}
            alt="foto de perfil"
          />
        </picture>
        <h4>{name} en {location}</h4>
      </div>

      <div className="information">
        <h5>{ocupation}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default cards
