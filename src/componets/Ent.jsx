// Selección de niño o adulto
import React from 'react';
import '../styles/Cover.css'
import { Link } from "react-router-dom";
import Puma from '../assests/GAV_Personaje09.png'
import Buho from '../assests/GAV_Personaje21.png'

const Ent = (props) => {
  return (
    <div className='containerCover'>
      <main className='mainEnt'>
        <h1 className='title'>¡Para comenzar elige tu perfil! </h1>
        <div className='adult-profile'>
          <img className='img' src={Buho} alt='buho' width="42%" />
          <Link to="/home">
            <button className='profileButton' >Soy Adulto</button>
          </Link>
        </div>
        <div className='child-profile'>
          <img className='img' src={Puma} alt='puma' width="42%" />
          <Link to="/home">
            <button className='profileButton'>Soy Niño</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Ent;