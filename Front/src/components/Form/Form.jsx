import { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState ({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({ ...userData, [property]: value });
        validation ({...userData, [property]: value }, errors, setErrors);
    };
        
    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
    };

    return(
        <form className= {style.form} onSubmit={submitHandler}>
            <div className= {style.container}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
                <p>{errors.username}</p>
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" value={userData.password} onChange={handleInputChange}/>
                <hr></hr>
                <hr></hr>
            <button>LOG IN</button>
            </div>
        </form>
    );
};

export default Form;