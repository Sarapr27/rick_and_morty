import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import styles from "./Nav.module.css"
import { Link } from "react-router-dom"

class Nav extends React.Component {
    constructor(props){
        super(props);
        console.log(props)
    }

    render(){
        return(
            <div className={styles.container}>
                <Link className={styles.link} to="/">Home</Link>
                <Link className={styles.link} to="/about">About</Link>
            <SearchBar onSearch={this.props.onSearch} />
            </div>
        )
    }
}

export default Nav;