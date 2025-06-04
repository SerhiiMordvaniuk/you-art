import React from "react";

import s from "./About.module.css";
import useDeviceType from "../../Hooks/screenwidth";

const About = () => {
  const device = useDeviceType();

  return (
    <div className="container">
      <div className={s.wrapper}>
        <img
          className={
            device === "tablet" || device === "laptop" ? s.photo : s.hidden
          }
          src="/img/normpthoto.webp"
          alt="teacher"
          width={492}
        />
        <h2 className={s.title}>
          <span className={s.accent}>Привіт</span>, друзі! <br />
          Мене звати <span className={s.accent}>Світлана</span>, я професійний
          художник, ілюстратор та засновник студії{" "}
          <span className={s.accent}>«YOU ART»</span>
        </h2>
      </div>
    </div>
  );
};

export default About;
