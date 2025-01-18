import React from 'react'
import { useState } from 'react';
import '../App.css'
const Navbar = () => {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="/images/logo.png" width={'100px'} alt="" className='logo-main' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Offers</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link " >Prices</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " >Cars List</a>
        </li>
      </ul>
       <form action="">
       <button className='contact-btn'><i class="bi bi-telephone-forward-fill"></i>Contact us</button>
       </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar