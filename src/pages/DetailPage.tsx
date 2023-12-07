import { useParams } from "react-router-dom";
import { useEffect} from "react";
import { useEventDetail } from "../hooks/useEventDetail";


const DetailPage = () => {
  const { id } = useParams();
  const { eventDetail, getDetail, isLoading } = useEventDetail();
  useEffect(() => {

       if (id) {
         //converto id in numero e salvo il valore all'indice id con setUser (usando parseInt)
         const idNum: number = parseInt(id);
        getDetail(idNum);
       
      }
    },[id] );
    if (isLoading  || !eventDetail) {
      return <p> caricamento ...</p>
    }
      console.log(eventDetail);
  return (
   <div>
        va {eventDetail.name}
    </div>
  );

  }
export default DetailPage;