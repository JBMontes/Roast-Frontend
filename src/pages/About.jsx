import "../styles/About.css"
import team from "../team.json"
import AboutCard from "../components/AboutCard"

export default function About(){

    return(
        <div className="about">
            <h3>Meet The Creators</h3>
           <div className="profileList">
            {team.map((engineers)=>{
                return(
                    <AboutCard engineers={engineers} />

                )
            })}
        </div>

        </div>
    )
}