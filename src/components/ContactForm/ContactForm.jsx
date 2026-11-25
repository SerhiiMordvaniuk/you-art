import { useRef } from "react";
import emailjs from "@emailjs/browser";

import s from "./ContactForm.module.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_1e91g6p", "template_3m2glov", form.current, {
        publicKey: "owIBVGqWomKhzLGvl",
      })
      .then(
        () => {
          console.log("Замовлення надіслано");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={s.form}>
      <input
        type="text"
        name="user_name"
        className={s.input}
        required
        placeholder="Ім'я"
      />
      <textarea
        name="message"
        className={s.textarea}
        placeholder="Повідомлення"
      />
      <input
        type="number"
        name="user_phone"
        className={s.input}
        placeholder="Контактний номер"
        required
      />
      <button onClick={sendEmail} className={s.subbutton}>
        Надіслати
      </button>
    </form>
  );
};

export default ContactForm;
