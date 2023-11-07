import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Detail.css"

const API = import.meta.env.VITE_API_URL;
export default function Detail() {

    const [coffees, setCoffees] = useState({ name: "", });

    let navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        fetch(`${API}/coffees/${id}`)
            .then((response) => response.json())
            .then((responseJSON) => setCoffees(responseJSON))
            .catch(() => navigate("/not-found"));
    }, [id, navigate]);

    const handleDelete = () => {
        fetch(`${API}/coffees/${id}`, { method: "DELETE" })
            .then(() => {
                navigate(`/coffees`);
            })
            .catch((error) => console.error(error));
        }

    return (
        <div className="detail">
            <div className="detailCard">

                <h2>Name: {coffees.name}</h2>
                <h2>Origin: {coffees.origin}</h2>
                <h2>Roast: {coffees.roast}</h2>
                <h2>Note: {coffees.note}</h2>
                <h2>Grind: {coffees.grind}</h2>
                <h2>Price: ${coffees.price}.00 / lb</h2>
                <h2>Favorite:  {coffees.is_favorite ? "☕️":"❌"}</h2>

            <div className="detailButton">
                <Link to={`/coffees/${id}/edit`}>
                    <button>Edit</button>
                </Link>
                <Link to={`/coffees`}>
                    <button>↩︎</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>

            </div>
            </div>

        </div>
    )
}