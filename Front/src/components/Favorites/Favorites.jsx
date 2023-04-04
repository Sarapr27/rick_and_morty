import { useSelector } from "react-redux";
import Card from "../Card/Card"
import style from "./Favorites.module.css"

const Favorites = () => {

    const favorites = useSelector((state)=>state.myFavorites);


    return (
        <div className={style.div}>
            {favorites.map( ({name, species, gender, image, id}) => {
                return ( 
                <Card 
                key={id}
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                />

                );
            })}
        </div>
    );
};

export default Favorites;