import React from "react";
import s from "./StudentsExample.module.css";
import Sviper from "./Sviper";
import useDeviceType from "../../Hooks/screenwidth";
import { BsArrowRight } from "react-icons/bs";

const StudentsExample = () => {
  const device = useDeviceType();
  return (
    <div className="container" id="example">
      <div className={s.wrapper}>
        <h3 className={s.title}>
          Роботи моїх <span className={s.accent}>учнів</span>
        </h3>
        <div className={s.examples}>
          <div className={device === "mobile" ? s.hidden : s.info}>
            <p className={s.text}>
              Ми щодня створюємо щось нове. Ось кілька прикладів того, як мої
              учні вчаться, розвиваються і діляться своїм баченням світу через
              творчість. Якщо хочете побачити ще більше робіт — завітайте до
              мого Instagram
            </p>
            <a
              href="https://www.instagram.com/_you___art"
              target="_blank"
              className={s.link}
            >
              Більше робіт{" "}
              <span className={s.arrow}>
                <BsArrowRight size={30} />
              </span>
            </a>
          </div>
          <Sviper />
        </div>
      </div>
    </div>
  );
};

export default StudentsExample;
