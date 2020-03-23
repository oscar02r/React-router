import React from 'react';
import { BrowserRouter, Route, NavLink, Link} from 'react-router-dom'
import queryString from 'query-string'
import '../App.css';

const Home = (props)=>{
 
  return(
    <h1>Home</h1>
  )
 
}
const Hola = ()=>( <h1>Hola mundo!</h1>)

const Productos = (props)=>(
 
  <div>
      <h1>Productos</h1> 
      <Link to='/productos/Hogar'> Hogar </Link>
      <Link to='/productos/Gamer/1'> Gamer </Link>
  </div>
  )

const Categoria = ({match})=>{
  
  return(
  <h1>Categoria: { match.params.categoria}</h1>
  )
}

const Ropa = ({location})=>{
      const {color, talla} = queryString.parse(location.search)
      return(
        <div>
          <h1>Ropa</h1>
          <div> Color: {color}</div>
          <div>Talla: {talla}</div>
        </div>
      )
}

const styles ={
       display:'flex',
       justifyContent:'space-around'
}

const NAVACTIVE = {
      color:'orangered'
}

const Navigation = ()=>(
      <nav
        style={ styles}
      >
        <NavLink 
          to= '/' 
          exact 
          activeStyle={NAVACTIVE}
        >
          Home 
        </NavLink>

        <NavLink 
          to= '/hola'
          activeClassName='navActive'
        > 
          Hola 
        </NavLink>

        <NavLink 
          to= '/productos' 
          activeStyle={NAVACTIVE}
          isActive = {(match,location)=>{
            if(!match) return false
            return !match.isExact
          }}
        > 
          Productos
        </NavLink>
        <NavLink to='/ropa' activeStyle={NAVACTIVE}>
          Ropa
        </NavLink>
      </nav>
)
      


export function AppRoute() {
  return (
   <BrowserRouter>
      <Navigation/>
      <Route path='/' exact component = {Home}/>
      <Route path='/hola' sensitive render = { Hola }/>
      <Route path='/productos' exact render={Productos}/>
      <Route path='/productos/:categoria/:id?' exact render={Categoria}/>
      <Route path='/ropa' render={Ropa}/>
   </BrowserRouter>
  )
}