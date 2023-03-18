import { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css";

export default function SearchBar(props) {
   console.log(props);

   const [id, setId] = useState("")

   const handleChange = (event) =>{
      const {value} = event.target;
      setId(value)
   }
   return (
      <div className={styles.container}>
         <input type='search' name='search' id='' onChange={handleChange} />
         <button onClick={()=>props.onSearch(id) }><b>Add</b></button>
      </div>
   );
}
