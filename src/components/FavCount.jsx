
import { useEffect, useState } from "react";
import '../styles/FavCount.css'

export default function FavCount() {

    let sum = []
    const [coffees, setCoffees] = useState([]);

    const API = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${API}/coffees`)
            .then((response) => response.json())
            .then((responseJSON) => setCoffees(responseJSON))
            .catch((error) => console.error(error));
    });

    for (let fav of coffees) {
        sum.push(fav.is_favorite === true ? true : null)
    }
    let fav = sum.filter((outcome) => outcome === true)
    let total = fav.length
    return (
        <div className="favTotal">

            <h2>⭐️☕️ : <span>{total}</span></h2>

        </div>

    )
}