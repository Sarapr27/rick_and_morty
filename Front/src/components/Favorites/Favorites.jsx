import { useSelector } from "react-redux";
import Card from "../Card/Card"

const Favorites = () => {

    const favorites = useSelector((state)=>state.myFavorites);


    return (
        <>
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
        </>
    );
};

export default Favorites;