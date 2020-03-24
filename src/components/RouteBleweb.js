import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Inicio from "./Inicio";
import Contacto from "./Contacto";
import Nosotros from "./Nosotros";
import Users from "./Users";

const Navegacion = () => (
  <div className='btn-group'>
  <NavLink 
    to='/' 
    className='btn btn-dark' 
    activeClassName='active'
  >
    Inicio
  </NavLink>
  <NavLink 
    to='/nosotros' 
    className='btn btn-dark' 
    activeClassName='active'
    >
    Nosotros
  </NavLink>
  <NavLink 
    to='/contacto' 
    className='btn btn-dark' 
    activeClassName='active'
  >
    Contacto
  </NavLink>
</div>
);


export const AppRouteBluweb = ()=>{
       return(
           <Router>
           <div className='container mt-5'>
            <Navegacion/>
             <hr/>
             <Switch>
                <Route path='/nosotros/:id'>
                  <Users/>
                </Route>
               <Route path='/contacto' >
                 <Contacto/>
               </Route>
               <Route path='/nosotros' >
                 <Nosotros/>
               </Route>
               <Route path='/' exact >
                 <Inicio/>
               </Route>
             </Switch>
             </div>
           </Router>
       )
}