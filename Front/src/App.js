import Cards from './components/Cards/Cards.jsx'
import Nav from "./components/Nav/Nav.jsx"
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Form from "./components/Form/Form"
import style from "./App.module.css";
import Favorites from './components/Favorites/Favorites.jsx';

function App () {

//HOOKS
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // CREDENCIALES FAKE
  const username = "sara@mail.com";
  const password = "sara123";


// EVENT HANDLERS
const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001"
   // const KEY = "679d35fad146.652aa97041e049ba56fe"
    
   if(characters.find((char) => char.id === id)) {
    return alert ("Repeated character");
   }

    fetch (`${URL_BASE}/onsearch/${id}`)
    .then((response)=>response.json())
    .then(data=>{
      if(data.name){
        setCharacters((oldChars) => [...oldChars, data]);
      }else{
        alert("Not found character")
      }
    });
  }; 

 /* function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          (data.name)?setCharacters((oldChars) => [...oldChars, data])
                    :window.alert('No hay personajes con ese ID');
       });
 }*/

  const onClose = (id) =>{
    setCharacters(characters.filter((char)=> char.id !== id))
  };

  const login = (userData) => {
    if(userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    
    }else{
      alert("Incorrect credentials")
    }
  };
  
  //RENDER

  return (
    <div className='App' style={{ padding: '25px' }}>
      
      <div className = {style.logo}>
        <img src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png" alt= "rym"></img>
      </div>
      <div className={style.nav}>
      {pathname !== "/" && <Nav onSearch ={onSearch}/>}
      </div>
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route 
        path="/home" 
        element={<Cards onClose={onClose} characters={characters} />} 
        />
        <Route path="/about" element={<About />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/detail/:detailId" element={<Detail />}/>
      </Routes>
      <div>
        
      </div>
      </div>
  );
}

export default App;
