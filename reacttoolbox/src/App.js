import React from 'react'
import {BrowserRouter, Switch ,Route} from 'react-router-dom'
import Home from './Home'
import NavbarMain from './NavbarMain'
import NavbarPage from './components/navbars/NavbarPage'
import HeroPage from './components/heros/HeroPage'
import FooterPage from './components/footers/FooterPage'
import AdditionalsPage from './components/additionals/AdditionalsPage'
import FormsPage from './components/forms/FormsPage'

const App = () => {
    return(
      <BrowserRouter>
      <NavbarMain />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/navbars' component={NavbarPage} />
          <Route exact path='/heroes' component={HeroPage} />
          <Route exact path='/footers' component={FooterPage} />
          <Route exact path='/additionals' component={AdditionalsPage} />
          <Route exact path='/forms' component={FormsPage} />
        </Switch>

      </BrowserRouter>
    )
  
}
export default App


