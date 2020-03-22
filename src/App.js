import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom'

const Home = (props)=>{
  console.log(props)
  return(
    <h1>Home</h1>
  )
 
}
const Hola = ()=>(
   <h1>Hola mundo!</h1>
)

const Productos = ()=>(
  <h1>Productos vendidos!</h1>
)

const styles ={
       display:'flex',
       justifyContent:'space-around'
}

const Navigation = ()=>(
      <nav
        style={ styles}
      >
        <Link to ={
              {
                pathname:'/',
                search:'?ordernar=nombre',
                hash:'#hash-otro',
                state:{
                  name:'Oscary Pro',
                  age:26
                }
              }
        }
          
        >
         Home
         </Link>
        <Link to='/hola'> Hola </Link>
        <Link to='/productos' replace> Productos </Link>
      </nav>
)
      


function App() {
  return (
   <BrowserRouter>
       <Navigation/>
      <Route path='/' exact component = {Home}/>
      <Route path='/hola' sensitive render = { Hola }/>
      <Route 
      path='/productos'
      >
      {
        ({match})=>{
          if(!match) return null
          
         return(
          <Productos/>
          )
      }
        
      }
        
      </Route>
   </BrowserRouter>
  )
}

export default App;
