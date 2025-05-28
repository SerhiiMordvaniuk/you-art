import React from "react";

import s from "./Benefits.module.css";

import { IoIosColorPalette } from "react-icons/io";
import { IoMdColorFill } from "react-icons/io";
import { RiSpeakFill } from "react-icons/ri";
import { MdInsertPhoto } from "react-icons/md";
import { RiBrain2Fill } from "react-icons/ri";
import { IoBook } from "react-icons/io5";
import useDeviceType from "../../Hooks/screenwidth";

const Benefits = () => {
  const device = useDeviceType();

  return (
    <div className="container">
      <div className={s.wrapper}>
        <h3 className={s.title}>
          Навчаю бачити, <span className={s.accent}>відчувати й малювати</span>
        </h3>
        <p className={s.slogan}>
          У своєму стилі <span>викладання</span> я акцентую увагу на розвитку
          таких якостей учня
        </p>
        <ul className={s.list}>
          <li className={s.item}>
            <div className={s.iconbg1}>
              <IoBook size={30} color="fff" />
            </div>
            <p className={s.text}>
              Грамотна побудова <br />
              малюнка
            </p>
          </li>
          <li className={s.item}>
            <div className={s.iconbg2}>
              <IoIosColorPalette size={30} color="fff" />
            </div>
            <p className={s.text}>Відчуття перспективи та композиції малюнка</p>
          </li>
          <li className={s.item}>
            <div className={s.iconbg3}>
              <IoMdColorFill size={30} color="fff" />
            </div>
            <p className={s.text}>
              Відчуття кольору та <br /> світло-тіні
            </p>
          </li>
          <li className={device === "mobile" ? s.hidden : s.item}>
            <div className={s.iconbg1}>
              <MdInsertPhoto size={30} color="fff" />
            </div>
            <p className={s.text}>
              Правильна анатомія в <br />
              художній фігурі
            </p>
          </li>
          <li className={device === "mobile" ? s.hidden : s.item}>
            <div className={s.iconbg2}>
              <RiBrain2Fill size={30} color="fff" />
            </div>
            <p className={s.text}>
              {" "}
              Розвиток художнього <br />
              мислення та уяви
            </p>
          </li>
          <li className={device === "mobile" ? s.hidden : s.item}>
            <div className={s.iconbg3}>
              <RiSpeakFill size={30} color="fff" />
            </div>
            <p className={s.text}>
              Комунікація та отримання задоволення від процесу
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
