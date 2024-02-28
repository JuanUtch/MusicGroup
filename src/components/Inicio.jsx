import React from 'react';
import Carousel from './Carousel';
import datos from '../database/bands.json'
import Informacion from './Informacion'

export default function Inicio() {
  return (
    <>
      <Carousel />
      <main style={{ paddingLeft: 40, paddingRight: 40 }}>
        {datos.map((dato, i) => (
          <Informacion
            key={i}
            name={dato.name}
            desc={dato.desc}
            img={dato.img}
          />
        ))}
      </main>
    </>
  )
}


