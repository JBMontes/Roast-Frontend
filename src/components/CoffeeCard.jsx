import { Link } from "react-router-dom"
import "../styles/coffeeCard.css"
export default function CoffeeCard({ beans} ) {

    return (
        <div className="card">

           <Link to={`/coffees/${beans.id}`}> <p className="cardLink">{beans.name}</p></Link>

            <p>{beans.origin}</p>

            <p>{beans.roast}</p>

            <p>{beans.price}</p>

            <p>{beans.is_favorite ? "☕️" : "❌"}</p>

        </div>
    )
}