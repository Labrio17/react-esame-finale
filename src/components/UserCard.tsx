import { UserType } from "../repo/users.type"
import { useState } from "react"
import {Link} from "react-router-dom" 
import "./UserCard.css"
// tiizzazione specifica per la card, non utilizzata per
// altre parti di codice quindi integrata nel file componente
type UserCardType = {
    user : UserType
    detailPath : string
}

// componente che deve renderizzare una card dato uno 
// specifico utente
const UserCard = ({user, detailPath} : UserCardType) => {
     const [expanded, setexpanded] = useState(false)
    // destrutturo l'oggetto user per estrarre le chiavi
    // che voglio reinderizzare.
    const {
        first_name,
        last_name,
        email,
        avatar,
        phone_number,
        address
    } = user

    //reinderizzo il componente relativo a un singolo utente
    return <div className="user-card justify-between items-center flex flex-col gap-y-3"
    onClick={() => setexpanded(!expanded)} tabIndex={0} aria-aria-expanded={expanded}>
        <img src={avatar} alt={`${first_name} ${last_name} avatar`}></img>
        <h2>{first_name} {last_name}</h2>
         {expanded && (
            <>
                <h3>Contatti: </h3>
                <h4><a href={`mailto:${email}`}>{email}</a></h4>
                <h4>{phone_number}</h4>
                <h3>Indirizzo </h3>
                <h4> Citta : {address.city}</h4>
                <h4> Via : {address.street_name}, {address.street_address}</h4>
                <h4> Stato : {address.state} </h4>
                <Link to={detailPath}>Dettaglio</Link>
            </>
         )}
        
    </div>
}

// export del componente
export default UserCard