import { EventsType } from "./events.type";

const URL = "https://its-events.davide-mantovani.workers.dev/events/"

export const getEvents = async (): Promise<EventsType[]> => {
    const res: Response = await fetch(URL);
    if(res.status === 200){
        const data = (await res.json()) as  EventsType[];
        return data;
    }
    return [];
}

export const getEventDetail = async (eventID : number): Promise<EventsType[]> => {
    const res: Response = await fetch(`${URL}${eventID}`);
    if(res.status === 200){
        const data = (await res.json()) as  EventsType[];
        return data;
    }
    return [];
}