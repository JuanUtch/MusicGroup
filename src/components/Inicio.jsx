import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import datos from '../database/bands.json'; // Importar datos de bandas desde un archivo JSON local
import Informacion from './Informacion';

// Función asincrónica para obtener descripciones adicionales de las bandas
async function getBandDesc() {
  const newData = await Promise.all(
    datos.map(async (dato) => {
      try {
        const response = await fetch(dato.url); // Realizar una solicitud a la URL de cada banda
        if (response.ok) {
          const data = await response.text(); // Obtener el texto de la respuesta
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(data, 'text/xml'); // Parsear el texto de la respuesta como XML
          const areaName = xmlDoc.querySelector('area > name')?.textContent; // Obtener el nombre del área de la banda
          return { ...dato, areaName }; // Devolver un objeto con los datos originales de la banda más los datos adicionales obtenidos de la respuesta
        } else {
          console.error('Error al obtener datos de la banda:', response.status); // Mostrar un error si la respuesta no es exitosa
          return dato; // Devolver los datos originales de la banda si hay un error en la solicitud
        }
      } catch (error) {
        console.error('Error de red:', error); // Manejar errores de red
        return dato; // Devolver los datos originales de la banda en caso de error
      }
    })
  );
  return newData; // Devolver los datos de las bandas, incluyendo las descripciones adicionales obtenidas
}

// Componente principal de la página de inicio
export default function Inicio() {
  const [bandas, setBandas] = useState([]); // Estado para almacenar las bandas y sus descripciones

  // Efecto para cargar los datos de las bandas cuando el componente se monta
  useEffect(() => {
    const fetchData = async () => {
      const newData = await getBandDesc(); // Obtener datos actualizados de las bandas
      setBandas(newData); // Actualizar el estado con los nuevos datos de las bandas
    };

    fetchData(); // Llamar a la función fetchData al montar el componente
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return (
    <>
      <Carousel /> {/* Componente del carrusel */}
      <main style={{ paddingLeft: 40, paddingRight: 40 }}>
        {/* Iterar sobre las bandas y mostrar la información de cada una */}
        {bandas.map((banda, i) => (
          <Informacion
            key={i}
            name={banda.name} // Nombre de la banda
            desc={banda.desc} // Descripción de la banda
            img={banda.img} // URL de la imagen de la banda
            areaName={banda.areaName} // País de la banda
          />
        ))}
      </main>
    </>
  );
}
