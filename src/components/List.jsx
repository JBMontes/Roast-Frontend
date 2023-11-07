import CoffeeCard from "./CoffeeCard"
import { useState,useEffect } from "react";
import "../styles/List.css"

export default function List() {

    const [coffees,setCoffees] = useState([])

    const API = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${API}/coffees`)
          .then((response) => response.json())
          .then((responseJSON) => setCoffees(responseJSON))
          .catch((error) => console.error(error));
      });
    
    
    return (
       <div className="coffeeList">
        Coffee List
        <div>
        <div className='list'>
            {coffees.map((beans) => {
                return <CoffeeCard key={beans.id} beans={beans} />
            })};
        </div>
        </div>
        </div>
    )
}