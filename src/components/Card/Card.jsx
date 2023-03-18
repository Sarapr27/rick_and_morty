import { Link } from "react-router-dom";
import style from "./Card.module.css";
import {connect} from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState } from "react";

function Card({name, species, gender, image, id, onClose, addFavorite, removeFavorite} ) {

   const [isFav,setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFavorite(id);
      }else{
         setIsFav(true);
         addFavorite(name, species, gender, image, id, onClose, addFavorite, removeFavorite);
      }
   };

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
      addFavorite: (character) => {
         dispatch(addFavorite(character));
      },    

      removeFavorite: (id) => {
         dispatch(removeFavorite(id));
      },
   };
};

export default connect (null, mapDispatchToProps)(Card);
