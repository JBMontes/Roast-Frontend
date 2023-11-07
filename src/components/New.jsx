import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import"../styles/New.css";

const API = import.meta.env.VITE_API_URL;

export default function New() {

    const navigate = useNavigate();

    const [coffees, setCoffees] = useState({
        name: "",
        origin: "",
        roast: "",
        note: "",
        grind: "",
        price: 0,
        is_favorite: false

    })

    const addCoffee = () => {
        const coffeeData = {
            name: coffees.name,
            origin: coffees.origin,
            roast: coffees.roast,
            note: coffees.note,
            grind: coffees.grind,
            price: coffees.price,
            is_favorite: coffees.is_favorite
        }
    
        fetch(`${API}/coffees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(coffeeData),
        })
            .then(() => {
                navigate(`/coffees`);
            })
            .catch((error) => console.error("catch", error));
    };

    const handleTextChange = (event) => {
        setCoffees({ ...coffees, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setCoffees({ ...coffees, is_favorite: !coffees.is_favorite });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addCoffee();
    }


    return (
        <div className="new">
            <div className="formBody">
            <form onSubmit={handleSubmit} className="newForm">
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    value={coffees.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Coffee"
                    required
                />

                <label htmlFor="origin">Origin:</label>
                <input
                    id="origin"
                    value={coffees.origin}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Origin"
                    required
                />

                <label htmlFor="roast">Roast:</label>
                <input
                    id="roast"
                    value={coffees.roast}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Roast"
                    required
                />


                <label htmlFor="note">Note:</label>
                <input
                    id="note"
                    value={coffees.note}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Note"
                    required
                />

                <label htmlFor="grind">Grind:</label>
                <input
                    id="grind"
                    value={coffees.grind}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Grind"
                    required
                />

                <label htmlFor="price">Price:</label>
                <input
                    id="price"
                    value={coffees.price}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="Price"
                    required
                />

                <label htmlFor="isFavorite">Favorite:</label>
                <input
                    id="isFavorite"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={coffees.is_favorite ? "☕️" : ""}
                />
              
                <div className="submitButton">
                <button type="submit" >Submit</button>
                <Link to={`/coffees`} className="newLink" style={{ margin: '0', padding: '0' }}>
                    <button>↩︎</button>
                </Link>
                </div>
            </form>
            </div>
        </div>
    )
}
