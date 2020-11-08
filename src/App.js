import React from 'react';
import './mycsslibrary.css';
import Result from './components/results'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Page from './components/page'
import People from './categories/people'
import Food from './categories/food'
import Interiors from './categories/interior'
import Music from './categories/music'
import Tech from './categories/tech'
import {HashRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <HashRouter>
    <div>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Page}/>
      <Route exact path='/results' component={Result}/>
      <Route exact path='/people' component={People}/>
      <Route exact path='/food' component={Food}/>
      <Route exact path='/interior' component={Interiors}/>
      <Route exact path='/music' component={Music}/>
      <Route exact path='/tech' component={Tech}/>
      </Switch>
      <Footer/>
    </div>
    </HashRouter>
  )
}

export default App;
