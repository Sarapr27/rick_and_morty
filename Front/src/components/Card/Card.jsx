import axios from "axios";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import {connect, useDispatch} from "react-redux";
import { getFavorites, removeFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";
import React from "react";

function Card({name, species, gender, image, id, onClose, myFavorites} ) {

   const [isFav,setIsFav] = useState(false);
   const dispatch = useDispatch();

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFavorite(id);
      }else{
         setIsFav(true);
         addFavorite({name, species, gender, image, id, onClose, addFavorite, removeFavorite});
      }
   };

   const addFavorite = (character) => {
      axios
        .post("http://localhost:3001/rickandmorty/favs", character)
        .then((res) => console.log("ok"));
    };
   const removeFavorite = async (id) => {
      await axios.delete(`http://localhost:3001/rickandmorty/favs/${id}`);
      dispatch(getFavorites());
      alert("Eliminado con éxito");
    };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      
      <div className={style.div}>
         {isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )}
   <hr></hr>
          <button className={style.closeButton} onClick={()=>onClose(id)}>X</button>
          <Link to={`/detail/${id}`}>
         <h2 className={style.h2}>{name}</h2>
         </Link>
         <img className={style.img} src={image} alt="" />
         <h2 className={style.h2}>{species}</h2>
         <h2 className={style.h2}>{gender}</h2>
        
      </div>
      
   );
}

const mapDispatchToProps = (dispatch) => {
   return {   

      removeFavorite: (id) => {
         dispatch(removeFavorite(id));
      },
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect (mapStateToProps, mapDispatchToProps)(Card);
