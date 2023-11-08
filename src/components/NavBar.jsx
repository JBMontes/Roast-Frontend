import '../styles/NavBar.css'
import { Link } from 'react-router-dom'
import FavCount from './FavCount'
export default function NavBar() {
    return (
        <div className="navbar">
            <Link to="/"> <h1>Roast </h1> </Link>

            <Link to='/coffees/about' className='h2Link'> <h2 className='h2Icon' >🧔🏿‍♂️    🧔🏻</h2></Link>

            <Link to='/coffees/favorite'><FavCount className="favCount"/></Link>

            <Link to="/coffees/new"> <button>New Coffee</button></Link>

        </div>
    )

}