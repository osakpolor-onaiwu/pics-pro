import React from 'react'
import {NavLink} from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize'


class Navbar extends React.Component{

    componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
    });
    }

    render(){
        return(
            <div className='navbar-fixed'>
                <nav className='navcolor'>
                    <div class="nav-wrapper container  ">
                      <NavLink to="/" className="brand-logo">Logo</NavLink>
                      <NavLink to="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></NavLink>
                      <ul class="right hide-on-med-and-down">
                        <li><a href="sass.html">Login</a></li>
                        <li><a href="sass.html">name</a></li>
                      </ul>
                    </div>
                </nav>

                <ul class="sidenav" id="mobile-demo">
                  <li><a href="sass.html">Login</a></li>
                  <li><a href="sass.html">name</a></li>
                </ul>
            </div>

        )
    }
}


export default Navbar
