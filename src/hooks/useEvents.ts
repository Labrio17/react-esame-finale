import { useEffect, useState } from "react"
import { EventsType } from "../repo/events.type"
import { getEvents } from "../repo"



export const useEvents = () => {
    //spazio di memomoria in cui dichiarare se l'api 
    //sta caricando o meno
    const [isLoading, setIsLoanding] = useState<boolean>(true);
    // spazio di memoria per caricare gli eventi ricevuti dall' API
    const [events, setEvent] = useState<EventsType[]>([]);
    // il seguente use effect applica la lista degli eventi
    // all'avvio del compnente (nessuna diependenza specificata) 
    useEffect(() => {
        // chimao la funzione per caricare gli eventi
        getEvents().then((events) => {
            //salvo la risposta (events: EventsType[]) nello stato
            setEvent(events);
            // imposto is loading a false perche il caricamento è terminato
            setIsLoanding(false);
        });
    }, []);

    // ritorno un oggetto contenente le informazioni che servono alla vista
    return {events, isLoading};
}