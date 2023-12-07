import { useEffect, useState } from "react"
import { UserType } from "../repo/users.type"
import { getUsers } from "../repo"



export const useUsers = () => {
    //spazio di memomoria in cui dichiarare se l'api 
    //sta caricando o meno
    const [isLoading, setIsLoanding] = useState<boolean>(true);
    // spazio di memorya per caricare gli utenti ricevuti dall' API
    const [users, setUser] = useState<UserType[]>([]);
    // il seguente use effect applica la lista degli utenti
    // all'avvio del compnente (nessuna diependenza specificata) 
    useEffect(() => {
        // chimao la funzione per caricare gli utenti
        getUsers().then((users) => {
            //salvo la risposta (users: UserType[]) nello stato
            setUser(users);
            // imposto is loading a false perche il caricamento è terminato
            setIsLoanding(false);
        });
    }, []);

    // ritorno un oggetto contenente le informazioni che servono alla vista
    return {users, isLoading};
}