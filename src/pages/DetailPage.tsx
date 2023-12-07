import { useParams } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { useEffect, useState } from "react";
import { UserType } from "../repo/users.type";
import UserCard from '../components/UserCard';


const DetailPage = () => {
  const { id } = useParams();
  const { users, isLoading } = useUsers();
  const [user, setUser] = useState<UserType>();
  useEffect(() => {
    try {
      //converto id in numero e salvo il valore all'indice id con setUser (usando parseInt)
      if (id) {
        const idNum: number = parseInt(id);
        setUser(users[idNum]);
      }
    } catch (e) {
      console.error(e);
    }
  }, [id, isLoading, users]);
  return (
    user && <div>
        <UserCard user={user} detailPath={`/`} />
    </div>
  );
};

export default DetailPage;