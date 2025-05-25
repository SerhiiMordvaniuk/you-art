import React from "react";

import s from "./About.module.css";

const About = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <h2 className={s.title}>
          <span className={s.accent}>Привіт</span>, друзі! <br />
          Мене звати <span className={s.accent}>Світлана</span>, я професійний
          художник, ілюстратор та засновник студії{" "}
          <span className={s.accent}>«YOU ART»</span>
        </h2>
        <img
          className={s.photo}
          src="../../../public/img/normpthoto.png"
          alt="teacher"
        />
      </div>
    </div>
  );
};

export default About;
