import React from 'react'
import { Link, withRouter } from 'react-router-dom'


function NavBarMain() {
  return (
    <div>
      <nav className="navbar is-dark mini-nav-bar" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <Link to='/navbars' className="navbar-item low-padding">Navbars</Link>
          <Link to='/footers' className="navbar-item low-padding">Footer</Link>
          <Link to='/heroes' className="navbar-item low-padding">Heros</Link>
          <Link to='/cards' className="navbar-item low-padding">Cards</Link>
          <Link to='/forms' className="navbar-item low-padding">Forms</Link>
          <Link to='/additionals' className="navbar-item low-padding">Additionals</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBarMain
//DONT FORGET TO PUT IN 'WITHROUTER' SO NAVBAR RE-RENDERS WHEN THE PAGE CHANGES