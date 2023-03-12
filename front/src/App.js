//librerias:
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from "axios"
//componenetes
import Cards from './components/Cards/Cards.jsx'
import Form from './components/Form/Form'
import Nav from './components/Nav/Nav'
import Favorites from './components/Favorites/Favorites'
//Estilo
import './App.css';


function App() {

  //Declaración de constantes y funciones
    //Usuario del login
  const username1 = "sckarlet015@gmail.com"
  const password1 = "Eric123"
  //const prueba
  const isFav = false
  //useState del acceso a resto de la pagina
  const [access, setAcces] = useState(false);
  //useState del array de personajes a mostrar
  const [characters, setCharacters] = useState([]);
  //useState del arrya de personajes de favoritos
  const [arrayfavoritos, setArrayFavoritos] = useState([])
  //Declaración de lafunción useLocatión
  const location = useLocation();
  //Declaración de la función useNavigate
  const navigate = useNavigate();
  //Función login del componente form
  function login(userData) {
    if(userData.username === username1 && userData.password === password1){
      setAcces(true);
      navigate("/Home");
    } else {
      alert("El usuario no existe")
    }
  }
  //useEffec para redireccionar a login siempre que no se haya iniciado sesion
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  //Función para buscar personajes
  const onSearch = async (character) => {
    if(character === characters.map(ele => ele.id)){
      window.alert("El personaje ya existe")
    } else {
        await axios(`http://localhost:3001/rickandmorty/onsearch/${character}`)
        .then((response) => response.data)
        .then((data) => {
           if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
    }
  }
  //Función para obtener el array de personajes favoritos
  const misFavoritos = async () => {
    await axios("http://localhost:3001/rickandmorty/fav")
    .then((response)=> response.data)
    .then((data)=>{
      setArrayFavoritos((arrayfavoritos) => {
        setArrayFavoritos(
          data
        )
      })
    })
  }
  //Función Post favoritos
  async function postFav(id){
    const char = characters.filter(ele => ele.id === id)
    await axios.post("http://localhost:3001/rickandmorty/fav", char[0])
}
//Función delete favorito
async function deleteFav(id){
  await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
  await misFavoritos();
}
//Funcion para cerrar la tarjeta del personaje
const onClose = (id) => {
  setCharacters(characters.filter(ele => ele.id !== id))
}
//Función para obtener datos del personaje
async function getChar(id){
  await axios(`http://localhost:3001/rickandmorty/detail/${id}`)
  .then(obj => obj.data)
  .then(data =>  console.log(data))
}

  return (
    <div className="App">
      {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      <Routes>
        <Route exact path='/' element={<Form login={login}/>}/>
        <Route path='/Home' 
          element={<Cards 
          characters={characters} 
          isFav={isFav}
          onClose={onClose}
          postFav={postFav}
          deleteFav={deleteFav}
          />}
        />
        <Route path='/favorites' 
        element={<Favorites 
        arrayfavoritos={arrayfavoritos} 
        misFavoritos={misFavoritos} 
        deleteFav={deleteFav}/>}/>
      </Routes>
    </div>
  );
}

export default App;
