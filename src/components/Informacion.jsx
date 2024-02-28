import React from 'react'

export default function Informacion({name, desc, img}) {
  const style = {
    color:'black',
  }

  return (
    <>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 style={style} className="featurette-heading fw-normal lh-1">{name}</h2>
          <p style={style} className="lead">{desc}</p>
        </div>
        <div className="col-md-5">
        <img className="img-fluid mx-auto" src={img} alt={name} width="500" height="500"/>
        </div>
      </div>
    </>
  )
}
