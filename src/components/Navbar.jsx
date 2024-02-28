import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const handleMouseEnter = (event) => {
    event.target.style.color = 'black'; // Cambia el color del texto al colocar el cursor
  };

  const handleMouseLeave = (event) => {
    event.target.style.color = ''; // Restaura el color del texto al quitar el cursor
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Music Group</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/contact"} className="nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    Contacto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/acerca"} className="nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    Acerca de
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
