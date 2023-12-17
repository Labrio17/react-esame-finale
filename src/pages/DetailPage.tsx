import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useEventDetail } from "../hooks/useEventDetail";
import dayjs from "dayjs";


interface PrenotationItem {
  time: string;
  clicked: boolean;
}

interface FormData {
  name: string;
  email: string;
}

const DetailPage = () => {
  const { id } = useParams();
  const { eventDetail, getDetail, isLoading } = useEventDetail();
  const [prenotation, setPrenotation] = useState<PrenotationItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormData, setModalFormData] = useState({ name: "", email: "" });
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (id) {
      const idNum: number = parseInt(id);
      getDetail(idNum);
    }
  }, [id]);

      const handleFormSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData: FormData = {
    name: (form.name as unknown as HTMLInputElement).value,
    email: (form.email as HTMLInputElement).value,
    
  };
  setModalFormData({ ...modalFormData, ...formData });
  setIsModalOpen(true);
};

    

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalFormData({ name: "", email: "" });
  };

  useEffect(() => {
    if (isMounted && eventDetail) {
      const array: PrenotationItem[] = [];

      for (let i: number = 0; i < 6; i++) {
        const date = dayjs(eventDetail?.date).add(i * 15, "m");
        const formattedHour = date.format("HH:mm");

        array.push({ time: formattedHour, clicked: false });
      }

      setPrenotation(array);
    }
  }, [eventDetail, isMounted]);

  const handleButtonClick = (index: number) => {
    if (isMounted) {
      const updatedPrenotation: PrenotationItem[] = prenotation.map((item, i) => ({
        ...item,
        clicked: i === index ? !item.clicked : false,
      }));

      setPrenotation(updatedPrenotation);
    }
  };

  if (isLoading || !eventDetail) {
    return <p>caricamento ...</p>;
  }

  console.log(eventDetail);

  const {
    coverImage,
    name,
    dresscode,
    date,
    price,
    description,
    isAperitivoIncluded,
    includedDishes,
    includedDrinks
  } = eventDetail;
 return (
    <div className="bg-white rounded-lg shadow p-3 m-8  relative">
      <div className="text-black">
        <img
          src={coverImage}
          alt="Image"
          className="w-auto h-auto object-cover rounded-t-lg aspect-video "
        />
        <h1 className="text-2xl font-bold mb-2 bg-gray-200 px-3 py-1">{name}</h1>
      </div>
      <div className="text-black">
        <h2 className="text-xl font-semibold mb-2">Event Details</h2>

        <div className="text-center ">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="font-bold">Dress Code:</p>
              <p className="text-gray-500">{dresscode}</p>
            </div>

            <div className="text-center">
              <p className="font-bold">Date & Time:</p>
              <p className="text-gray-500">{date}</p>
            </div>

            <div className="text-center">
              <p className="font-bold">Price:</p>
              <p className="text-gray-500">{price}</p>
            </div>

            <div className="text-center">
              <p className="font-bold">Aperitive:</p>
              {isAperitivoIncluded ? (
                <p className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-black mb-2">
                  included
                </p>
              ) : (
                <p className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-black mb-2">
                  excluded
                </p>
              )}
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-2">Description:</h2>
        <p className="mb-4">
          {description.long.map((element, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 text-gray-500 text-sm font-semibold mr-2 mb-2"
            >
              {element}
            </span>
          ))}
        </p>

      <div className="text-center ">
        <h2 className="text-xl font-semibold mb-2">Food and drinks:</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="font-bold">Food:</p>
              {isAperitivoIncluded ?  (
                <p className="mb-4">
                {includedDishes.map((element, index) => (
                  <span key={index} className="inline-block px-3 py-1 text-gray-500 text-sm font-semibold mr-2 mb-2"
                  >
                    Plate : {element.name}
                    <br />
                    Description: {element.description}
                  </span>
                ))}
                </p>
              ) : (
                <p className="inline-block px-3 py-1 text-gray-500 text-sm font-semibold mr-2 mb-2">
                  No food included
                </p>
              )}
            </div>

            <div className="text-center">
              <p className="font-bold">drinks:</p>
              
                <p className="mb-4">
                {includedDrinks.map((element, index) => (
                  <span key={index} className="inline-block px-3 py-1 text-gray-500 text-sm font-semibold mr-2 mb-2"
                  >
                    {element}
                  </span>
                ))}
                </p>
            </div>
          </div>
      

      <h2 className="text-xl font-semibold mt-2 mb-2">Prenotation:</h2>
        {prenotation.map((element, index) => (
          <button
          key={index}
          className={`${
          element.clicked
          ? "bg-blue-500 text-gray-700 inline-block border-solid border rounded-full px-3 py-1 text-sm  font-semibold mr-2 mb-2"
          : "inline-block border-solid bg-slate-800 text-white border rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
          }`}
          onClick={() => handleButtonClick(index)}
          >
            {element.time}
          </button>
        ))}
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input type="text" name="name" className="border rounded w-full py-2 px-3 bg-slate-300" required/>

          <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
            Email:
          </label>
          <input type="email" name="email" className="border rounded w-full py-2 px-3 bg-slate-300" required/>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-full mt-4"
          >
            Submit
          </button>
        </form>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Prenotation reacap</h2>
              <p>
                <strong>Thanks </strong> {modalFormData.name} <strong> for your prenotation</strong>
              </p>
              <p>
                <strong>We have sent a mail to :</strong> {modalFormData.email} <strong> with all the the details of your reservation</strong>
              </p>
              <button
                onClick={handleModalClose}
                className="bg-slate-800 hover:bg-blue-500 hover:text-gray-700 text-white px-4 py-2 rounded-full mb-2 mt-2"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default DetailPage;
