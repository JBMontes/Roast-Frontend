import { Link } from "react-router-dom"
import '../styles/Home.css'
export default function Home(){

return(
    <div className="home">
    <h1>Welcome To Roast</h1>



  <Link to="/coffees"> <button>Show Me The Beans</button></Link>
        
    </div>
 
)

}