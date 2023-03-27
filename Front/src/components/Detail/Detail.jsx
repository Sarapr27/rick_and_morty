import style from "./Detail.module.css";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const { detailId } = useParams();
    const [ character , setCharacter ] = useState({});
    console.log(character)
    
    useEffect(() => {
      const URL_BASE = "http://localhost:3001/rickandmorty";
      axios(`${URL_BASE}/detail/${detailId}`)
      .then((response) => {
        console.log(response)
        setCharacter(response.data)})
  },[detailId])


    // useEffect(() => {
    //     fetch(`http://localhost:3001/rickandmorty/${detailId}`)
    //       .then((response) => response.json())
    //       .then((char) => {
    //         console.log(char)
    //         if (char.name) {
    //           setCharacter(char);
    //         } else {
    //           window.alert("No characters with that ID");
    //         }
    //       })
    //       .catch((err) => {
    //         window.alert("No characters with that ID");
    //       });
    //     return setCharacter({});
    //   }, [detailId]);

    return (
        <div className={style.div}>
            <h2 className={style.h2}>Name: {character.name}</h2>
            <img className={style.img} src={character.image} alt={character.name}/>
            <h3 className={style.h3}>Gender: {character.gender}</h3>
            <h3 className={style.h3}>Origin: {character.origin?.name}</h3>
            <h3 className={style.h3}>Species: {character.species}</h3>
        </div>
    );
};

export default Detail;