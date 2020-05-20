import React from 'react'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import Navbar3 from './Navbar3'
import Navbar4 from './Navbar4'

class NavbarPage extends React.Component {
  state = {

  }


  render(){
    return (
      <>
      <h1>NAVBAR</h1>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <Navbar4 />
      </>
    )
  }
}

export default NavbarPage