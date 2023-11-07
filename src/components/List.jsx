import CoffeeCard from "./CoffeeCard"
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
        <div className='list'>
            {coffees.map((beans) => {
                return <CoffeeCard key={beans.id} beans={beans} />
            })};
        </div>
    )
}