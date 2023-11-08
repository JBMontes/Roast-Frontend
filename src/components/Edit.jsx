import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../styles/Edit.css";

const API = import.meta.env.VITE_API_URL;

export default function Edit() {

    const navigate = useNavigate();
    let { id } = useParams();
    const [coffees, setCoffees] = useState({
        name: "",
        origin: "",
        roast: "",
        note: "",
        grind: "",
        price: 0,
        is_favorite: false

    })

    useEffect(() => {
        fetch(`${API}/coffees/${id}`)
            .then((response) => response.json())
            .then((responseJSON) => setCoffees(responseJSON))
            .catch(() => navigate("/not-found"));
    }, [id, navigate]);

    const update = () => {
        const coffeeData = {
            name: coffees.name,
            origin: coffees.origin,
            roast: coffees.roast,
            note: coffees.note,
            grind: coffees.grind,
            price: coffees.price,
            is_favorite: coffees.is_favorite
        }

        fetch(`${API}/coffees/${id}`, {
            method: "PUT",
            body: JSON.stringify(coffeeData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
                navigate(`/coffees/${id}`);
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
        update();
    }


    return (
        <div className="edit">
            <div className="formBody">
                <form onSubmit={handleSubmit} className="editForm">
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
