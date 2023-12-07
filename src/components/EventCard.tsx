import { EventsType } from "../repo/events.type"
import {Link} from "react-router-dom" 
import "./EventCard.css"
// tiizzazione specifica per la card, non utilizzata per
// altre parti di codice quindi integrata nel file componente
type EventCardType = {
    event : EventsType
    detailPath : string
}

// componente che deve renderizzare una card dato uno 
// specifico utente
const EventCard = ({event, detailPath} : EventCardType) => {

    const {
        name,
        coverImage,
        date,
        tags,
    } = event

    //reinderizzo il componente relativo a un singolo utente
    return( 
    <div className="bg-white rounded-lg shadow p-3 m-11">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="col-span-1">
            <img src={coverImage} alt="Image" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="col-span-1 flex items-center justify-center">
            <div className="text-center">
    <h1 className="text-xl font-bold mb-4 text-black">{name}</h1>
    <p className="text-gray-500 mb-4">
       Orario : {date}
    </p>
    <div className="mb-6">
        {tags.map((element, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{element}
            </span>
        ))}
    </div>
    <Link to={detailPath}>
        <p className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2">Scopri di più</p>
    </Link>
   
</div>
        </div>
    </div>
</div>
    )
        

            


  
    
}

// export del componente
export default EventCard