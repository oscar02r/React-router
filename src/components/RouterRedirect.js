import React from 'react';
import {Route, Redirect, BrowserRouter, NavLink} from 'react-router-dom';
import '../App.css';

const Navigation = () =>(
    <nav className='nav'>
      <NavLink 
        to='/' 
        activeClassName='active'
        exact
      >
        Home
      </NavLink>

      <NavLink 
        to='/perfil'
        activeClassName ='active'
      >
        Perfil
      </NavLink>
      <NavLink 
        to='/login'
        activeClassName ='active'
      >
        Login
      </NavLink>
    </nav>
)



const Home = () => (
    <h1>Home</h1>
  )

const Login = ({location}) =>{
      if (location.state) {
          return <h1>{location.state.message}</h1>
      }

      return( 
          <h1>Login</h1>
      )
}

const isAuth = false

const Perfil = () =>{
      return isAuth
             ? <h2>Bienvenido a tu perfil</h2>
             : <Redirect to={
                 {
                     pathname:'/login',
                     state:{
                         message:'Debes de hacer login para acceder a tu perfil'
                     }
                 }
             }/>
}



export const RedirectRouter = () =>{
    return(
        <BrowserRouter>
          <Navigation/>
          <Route path='/' exact render={Home}/>
          <Route path='/perfil' render={Perfil}/>
          <Route path='/login' render={Login}/>
          <Redirect from='/p' to='/perfil' />
          
        </BrowserRouter>
    )
}