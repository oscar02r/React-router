import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'


const Users = () => {
    const [pueblo, setpueblo] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const obtenerDatos = async () => {
                const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
                const civilization = await data.json()
                setpueblo(civilization)
        }
        obtenerDatos()
      }, [id]
    )
   
    
    return (
        <div>
          <h1>{pueblo.name}</h1>
          <p>{pueblo.civilization_bonus}</p>
        </div>
    );
}

export default Users;