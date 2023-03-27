import Card from '../Card/Card';
import style from '../Cards/Cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;
   
   return (
   <div className={style.div}>
      {
         characters.map(({name, species, gender, image, id})=>{
            return <Card
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            deatilId={id}
            onClose={onClose}
            ></Card>
         }
         )
      }
   </div>
   )
}
