import "../styles/About.css"

import github from "../assets/github-mark.svg"

export default function AboutCard({ engineers }) {

    return (
        <>

            return (

            <div className="profileCard">

                <h3>{engineers.name}</h3>
                <img className='profilePic' src={engineers.pic} alt={engineers.name} />
                <h3>{engineers.hometown}</h3>
                <a href={engineers.github}>
                    <img className="github" src={github} />
                </a>
            </div>


            )

        </>
    )
}