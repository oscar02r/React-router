import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'

const Home = ()=>(
  <h1>Home</h1>
)
const Hola = ()=>(
   <h1>Hola mundo!</h1>
)

const Productos = ()=>(
  <h1>Productos vendidos!</h1>
)
function App() {
  return (
   <BrowserRouter>
      <Route path='/' exact component = {Home}/>
      <Route path='/hola' sensitive render = { Hola }/>

      <Route path='/productos'>
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
