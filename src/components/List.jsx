import CoffeeCard from "./CoffeeCard"
export default function List() {

    const API = import.meta.env.VITE_API_URL;

    return (
        <div className='list'>
            {coffee.map((beans) => {
                return <CoffeeCard key={beans.id} beans={beans} />
            })};
        </div>
    )
}