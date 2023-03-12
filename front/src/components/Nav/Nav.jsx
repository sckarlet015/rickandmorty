import React from "react";
import SearchBar from "../NavBar/SearchBar";
import style from "./Nav.module.css"
// import About from "../About/About";
import { NavLink } from "react-router-dom";

export default function Nav({ onSearch, misFavoritos }){

    return(
        <div className={style.NavBar}>
            <NavLink to={"/Home"} className={style.link}>Home</NavLink>
             <NavLink to={"/About"} className={style.link}>About</NavLink>
             { <NavLink 
                to={"/favorites"} 
                className={style.link}
                >Favorites</NavLink>}
             <SearchBar onSearch={onSearch} ></SearchBar>
        </div>
    )
}