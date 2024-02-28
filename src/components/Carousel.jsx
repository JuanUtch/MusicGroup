import React from 'react'
import './carousel.css'
import './carousel.rtl.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



export default function Carousel() {
  const imagenes = [
    {
      url: "imgs/Intocable.jpg",
      h1: "Intocable",
      p: "Intocable: Banda tejana-norteña icónica de Texas, fusiona pop y rock, con letras emotivas y gran éxito comercial."
    },
    {
      url: "imgs/recoditos2.jpg",
      h1: "Los Recoditos",
      p: "Recoditos: Banda mexicana de música banda con ritmos pegajosos y letras románticas, destacando en la escena regional."
    },

    {
      url: "imgs/gpomarrano.jpg",
      h1: "Grupo Marrano",
      p: "Grupo Marrano: Grupo Marrano, conocido por su estilo irreverente y canciones que sacan carcajadas, vio la luz a finales del 2002 y sus proyectos siguen siendo populares, especialmente en las fiestas y reuniones relajadas.."
    }


  ];


  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        {imagenes.map((e, i) => (
          <div key={i} className={i === 0 ? "carousel-item active" : "carousel-item"}>
            <img src={e.url} className="bd-placeholder-img" alt={`Slide ${i + 1}`} style={{ width: '100%', height: '100%' }} />
            <div className="container">
              <div className="carousel-caption">
                <h1>{e.h1}</h1>
                <p>{e.p}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
