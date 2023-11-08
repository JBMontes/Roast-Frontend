import CoffeeCard from "./CoffeeCard"
import { useState, useEffect } from "react";
import "../styles/FavList.css"

export default function FavList() {

    const [coffees, setCoffees] = useState([])

    const API = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${API}/coffees`)
            .then((response) => response.json())
            .then((responseJSON) => setCoffees(responseJSON))
            .catch((error) => console.error(error));
    });


    return (
        <div className="coffeeListF">

            <h1 className='listTitle'>My Favorite Coffees</h1>

            <div className='list'>
                {coffees.map((beans) => {
                    if(beans.is_favorite === true){
                    return <CoffeeCard key={beans.id} beans={beans} />
                    }
                })}
            </div>


        </div>
    )
}