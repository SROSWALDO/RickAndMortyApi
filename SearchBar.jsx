import { useState } from 'react';
import '../Nav/Search.css'

export default function SearchBar(props) {

   const [id,setId] = useState("")
   const handleChange = (event) => {
      const { value } = event.target;
      setId(value);
   }

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");

   }

   const handleRandomClick = () => {
      props.onRandom();
    }


   return (
      
      <div className="search">
         <input 
         type='search'
         name="search"
         id='search'
         onChange={handleChange}
         value={id}
          />
         <button onClick={handleClick}>Agregar</button>
         <button onClick={handleRandomClick}>Aleatorio</button>

         
      </div>
   );
}
