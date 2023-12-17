import { useState } from "react"
import { EventDetailType } from "../repo/events.type"
import { getEventDetail } from "../repo"



export const useEventDetail = () => {
    //spazio di memomoria in cui dichiarare se l'api 
    //sta caricando o meno
    const [isLoading, setIsLoanding] = useState<boolean>(true);
    // spazio di memoria per caricare gli eventi ricevuti dall' API
    const [eventDetail, setEventDetail] = useState<EventDetailType>();
    // il seguente use effect applica la lista degli eventi
    // all'avvio del compnente (nessuna diependenza specificata) 
    const getDetail = (id : number) => {
        getEventDetail(id).then((eventDetail) =>{
            setEventDetail(eventDetail!);
            setIsLoanding(false);
        }
    
    )    }
        // chimao la funzione per caricare gli eventi
        
    // ritorno un oggetto contenente le informazioni che servono alla vista
    return {eventDetail, getDetail, isLoading};
}