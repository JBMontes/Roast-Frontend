export default function CoffeeCard({ beans} ) {

    return (
        <div className="card">

            <p>{beans.name}</p>

            <p>{beans.origin}</p>

            <p>{beans.roast}</p>

            <p>{beans.price}</p>

            <p>{beans.is_favorite ? "☕️" : ""}</p>

        </div>
    )
}