import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import"../styles/New.css";

const API = import.meta.env.VITE_API_URL;

export default function New() {

    const navigate = useNavigate();

    const [coffee, setCoffee] = useState({
        name: "",
        origin: "",
        roast: "",
        price: 0,
        is_favorite: false,
        note: "",
        grind: ""

    })

    const addCoffee = () => {
        const coffeeData = {
           
            name: coffee.name,
            origin: coffee.origin,
            roast: coffee.roast,
            price: coffee.price,
            is_favorite: coffee.is_favorite,
            note: coffee.note,
            grind: coffee.grind
        }
    
        // fetch(`${API}/coffee`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(coffeeData),
        // })
        //     .then(() => {
        //         navigate(`/coffee`);
        //     })
        //     .catch((error) => console.error("catch", error));
    };

    const handleTextChange = (event) => {
        setCoffee({ ...coffee, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setCoffee({ ...coffee, is_favorite: !coffee.is_favorite });
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
                    value={coffee.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Coffee"
                    required
                />

                <label htmlFor="origin">Origin:</label>
                <input
                    id="origin"
                    value={coffee.origin}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Origin"
                    required
                />

                <label htmlFor="roast">Roast:</label>
                <input
                    id="roast"
                    value={coffee.roast}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Roast"
                    required
                />

                <label htmlFor="price">Price:</label>
                <input
                    id="price"
                    value={coffee.price}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="Price"
                    required
                />


                <label htmlFor="note">Note:</label>
                <input
                    id="note"
                    value={coffee.note}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Note"
                    required
                />

                <label htmlFor="grind">Grind:</label>
                <input
                    id="grind"
                    value={coffee.grind}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Grind"
                    required
                />
                <label htmlFor="isFavorite">Favorite:</label>
                <input
                    id="isFavorite"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={coffee.is_favorite ? "☕️" : ""}
                />
              
                <div className="submitButton">
                <button type="submit" >Submit</button>
                <Link to={`/coffee`} className="newLink" style={{ margin: '0', padding: '0' }}>
                    <button>↩︎</button>
                </Link>
                </div>
            </form>
            </div>
        </div>
    )
}
