import SearchBar from "./SearchBar"
import '../Nav/Nav.css'
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

export default function Nav(props){
    return(
        <div className="container">
            <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="" />
            </div>

            <div className="title">
            <SearchBar onSearch={props.onSearch} onRandom={props.onRandom}  />

      <button className="button">
        <NavLink 
        to="/about"
        className="link"
        >
         About
         </NavLink>
      </button>


      <button className="button">
         <NavLink 
         to= "/"
         className="link"
         >
            Home  
         </NavLink>
      </button>

      </div>

            
        </div>

    )
}
