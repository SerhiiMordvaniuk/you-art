import React from "react";
import s from "./StudentsExample.module.css";
import Sviper from "./Sviper";

const StudentsExample = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <h3 className={s.title}>
          Роботи моїх <span className={s.accent}>учнів</span>
        </h3>
        <Sviper />
      </div>
    </div>
  );
};

export default StudentsExample;
