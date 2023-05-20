import React from 'react'
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types'
/* data-bs-theme=${props.mode} */

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg bg-body-tertiary"`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
          {/* <button type="button" onClick={()=>{props.toggleMode('primary')}} className="btn btn-primary mx-2" style={{height: '20px', width: '20px', cursor: 'pointer', border: 'solid 2px', borderColor: 'black'}}></button>
          <button type="button" onClick={()=>{props.toggleMode('success')}} className="btn btn-success mx-2" style={{height: '20px', width: '20px', cursor: 'pointer', border: 'solid 2px', borderColor: 'black'}}></button>
          <button type="button" onClick={()=>{props.toggleMode('danger')}} className="btn btn-danger mx-2" style={{height: '20px', width: '20px', cursor: 'pointer', border: 'solid 2px', borderColor: 'black'}}></button>
          <button type="button" onClick={()=>{props.toggleMode('warning')}} className="btn btn-warning mx-2" style={{height: '20px', width: '20px', cursor: 'pointer', border: 'solid 2px', borderColor: 'black'}}></button>
          <button type="button" onClick={()=>{props.toggleMode('light')}} className="btn btn-light mx-2" style={{height: '20px', width: '20px', cursor: 'pointer', border: 'solid 2px', borderColor: 'black'}}></button>
          <button type="button" onClick={()=>{props.toggleMode('dark')}} className="btn btn-dark mx-2" style={{height: '20px', width: '20px', cursor: 'pointer', border: 'solid 2px', borderColor: 'black'}}></button> */}

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}


//Navbar.propTypes