import UserCard from '../components/UserCard';
import { useUsers } from '../hooks/useUsers'

const HomePage = () =>{
    
  // inizializzo l'hook useUSers
  const {users,isLoading} = useUsers();
  if(isLoading){
    return <p>loading data...</p>
  }

  return <div>
    <h1>Robot Users</h1>
    {users.map((user, index) => {
      return  <UserCard key={index} user={user} detailPath={`/detail/${index}`} />
    })}
  </div>
   
}




export default HomePage