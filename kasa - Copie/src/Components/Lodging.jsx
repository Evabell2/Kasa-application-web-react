import { useParams } from 'react-router-dom'
import { useState } from 'react'
import logements from "../data/logements.json"


function Lodging() {

    const param = useParams()
    const [logement, setLogement] = useState(logements.find((item) => item.id === param.id))
        
    return (
        <div>
            {logement != null && (
                <div>
                    <h1>{logement.title}</h1>
                    <span>{logement.location}</span>
                </div>
            )}
        </div>    
    )
}

export default Lodging







