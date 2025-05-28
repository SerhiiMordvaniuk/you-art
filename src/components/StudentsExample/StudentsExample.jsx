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
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo modi
              nulla voluptatibus omnis nobis adipisci natus voluptates suscipit!
              Error ad delectus, nemo deleniti suscipit blanditiis eaque quas
              quibusdam id pariatur?
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
