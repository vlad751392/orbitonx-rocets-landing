import { FC, useState } from "react";
import {  useForm } from "react-hook-form";

import cn from "classnames";
import axios from "axios";
import telegram from '../../assets/svg/tg-button-icon.svg';

export const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [reqError, setReqError] = useState(false);
  const strapiURL = import.meta.env.VITE_STRAPI_URL 

  function openModal() {
    setIsOpen(true);
  }

  const customStyles = {
    content: {
      top: '10%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#000',
      border: '2px solid #5D4FFF'
    },
  };

  function closeModal() {
    setIsOpen(false);
  }



  const onSubmit = (data :any) => {
    
    console.log(data);
    

// Данные для отправки
const bearerToken = import.meta.env.VITE_STRAPI_TOKEN;

const data1 = {
  "data": {
    "Email": data.Email
  }  
};

// Запрос с заголовком Bearer токена
axios.post( `${strapiURL}/api/orbiton-users-emails`, data1, {
  headers: {
    'Authorization': `Bearer ${bearerToken}`,
    'Content-Type': 'application/json'
    // Другие заголовки при необходимости
  }
})
  .then(response => {
    console.log('Успешный ответ:', response.data);
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false); // Через 3 секунды устанавливаем isOpen в false
  }, 3000); 
  })
  .catch(error => {
    console.error('Ошибка запроса:', error);
    setReqError(true);
    setTimeout(() => {
      setReqError(false); // Через 3 секунды устанавливаем isOpen в false
  }, 3000); 
  });

  reset();

  }
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleButtonClick = () => {
    setFormSubmitted(true); 
    setTimeout(() => {
      setFormSubmitted(false);
    }, 500);
  };

  return (
    
    <section className="join-us mx-auto w-full sm:w-fit join-us flex items-center flex-col gap-6 mb-5 sm:mb-0">

      {/* <Modal
        isOpen={modalIsOpen}
        overlayClassName='fixed inset-[0]'
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <h2>Thank you for request! We will contact with you.</h2>
        </Modal> */}

      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="e-mail"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          className={cn("sm:w-[435px] w-[253px]", {
            "invalid-input": errors.Email && formSubmitted,
          })}
        />

        <button
          type="submit"
          onClick={handleButtonClick}
          className="text-white font-semibold px-8 py-2.5 rounded-lg font-lato"
        >
          Join Now
        </button>
      </form>
      {/* <div className="relative w-full min-h-[24px] justify-center flex">
        {modalIsOpen &&<p className="pb-2.5 sm:pb-0 thanks-text font-neue">Thank you for request! We will contact with you.</p>}
        {reqError &&<p className="pb-2.5 sm:pb-0 error-text font-neue">Your email is already exist</p>}
      </div> */}
    </section>
    
  );
};
