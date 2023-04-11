import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card"
import style from "./Favorites.module.css"
import { useEffect } from "react";
import { getFavorites } from "../../redux/actions";

const Favorites = () => {

    const dispatch = useDispatch();

    const favorites = useSelector((state)=>state.myFavorites);

    useEffect(() => {
        dispatch(getFavorites());
    }, []);

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