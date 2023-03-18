import style from "./About.module.css";

export default function About(props){
    return (
        <div className= {style.container}>
            <h1 className={style.h1}>About the Creator: </h1>
            <h2>Started as a teacher for kids, now looking to reskilling as Software Development.</h2>
            <img className={style.img} src= "img/unnamed.jpg" alt="Me"></img>
            <br></br>
            <h3><em>~ Sara Pinzón</em></h3>
        </div>
    )
}