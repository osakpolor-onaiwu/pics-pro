import React from 'react';
import './mycsslibrary.css';
import Result from './components/results'
import Navbar from './components/navbar'
import Page from './components/page'
import BathRoom from './categories/bathrooms'
import BedRoom from './categories/bedrooms'
import Exterior from './categories/exterior'
import Kitchen from './categories/kitchens'
import LivingRoom from './categories/livingroom'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Page}/>
      <Route exact path='/results' component={Result}/>
      <Route exact path='/bathrooms' component={BathRoom}/>
      <Route exact path='/bedrooms' component={BedRoom}/>
      <Route exact path='/exterior' component={Exterior}/>
      <Route exact path='/kitchens' component={Kitchen}/>
      <Route exact path='/livingroom' component={LivingRoom}/>
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;
