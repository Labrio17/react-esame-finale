import EventCard from '../components/EventCard';
import { useEvents } from '../hooks/useEvents'

const HomePage = () =>{
    
  // inizializzo l'hook useUSers
  const {events,isLoading} = useEvents();
  if(isLoading){
    return <p>loading data...</p>
  }

  return <div>
    <h1 className="text-3xl font-bold mb-4" >Eventi</h1>
    {events.map((event) => {
      return  <EventCard key={event.id} event={event} detailPath={`/detail/${event.id}`}/>
    })}
  </div>
   
}




export default HomePage