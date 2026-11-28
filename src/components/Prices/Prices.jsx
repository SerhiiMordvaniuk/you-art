import React from "react";
import s from "./Prices.module.css";
import { IoTimeOutline } from "react-icons/io5";

// const Prices = () => {
//   return (
//     <div className="container" id="prices">
//       <div className={s.wrapper}>
//         <h3 className={s.title}>
//           Онлайн <span className={s.accent}>живопис</span>
//         </h3>
//         <p className={s.text}>Групові заняття:</p>
//         <div className={s.prices}>
//           <div className={s.price1}>
//             <ul className={s.list}>
//               <li className={s.children}>Молодша група (5-6 р.)</li>

//               <li>
//                 Час занять: <br />
//                 Понеділок 16:00
//               </li>
//               <li>
//                 Разове заняття: 300грн <br />
//                 Абонемент з 8 занять: 2000грн
//               </li>
//             </ul>
//           </div>
//           <div className={s.price2}>
//             <ul className={s.list}>
//               <li className={s.children}>Старша група (10-13 р.)</li>
//               <li>
//                 Малювання на бумазі: акварель, гуаш, маркери, кольорові олівці.
//               </li>
//               <li>
//                 Час занять: <br />
//                 Вівторок та черверг 16:00 - 17:30 <br />
//                 Субота 11:30-13:00
//               </li>
//               <li>
//                 Разове заняття: 300грн <br />
//                 Абонемент з 8 занять: 2000грн
//               </li>
//               <li></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const Prices = () => {
  return (
    <div className="container" id="prices">
      <div className={s.wrapper}>
        <h3 className={s.title}>
          Онлайн <span className={s.accent}>живопис</span>
        </h3>
        <p className={s.text}>Групові заняття:</p>
        <div className={s.prices}>
          <div className={s.new_price1}>
            <div>
              <h4 className={s.monday}>Понеділок</h4>
              <div className={s.monday_wrapper}>
                <div className={s.young}>
                  <div className={s.time_wrapper}>
                    <IoTimeOutline className={s.icon} />
                    <p className={s.time}>16:00</p>
                  </div>
                  <div className={s.time_info}>
                    <p>Молодша група</p>
                    <p>5-6 років</p>
                  </div>
                </div>
                <div className={s.old}>
                  <div className={s.time_wrapper}>
                    <IoTimeOutline className={s.icon} />
                    <p className={s.time}>17:30</p>
                  </div>
                  <div className={s.time_info}>
                    <p>Старша група</p>
                    <p>7-14 років</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className={s.saturday}>Субота</h4>
              <div className={s.saturday_wrapper}>
                <div className={s.young}>
                  <div className={s.time_wrapper}>
                    <IoTimeOutline className={s.saturday_icon} />
                    <p className={s.time}>10:00</p>
                  </div>
                  <div className={s.time_info}>
                    <p>Молодша група</p>
                    <p>6-9 років</p>
                  </div>
                </div>
                <div className={s.old}>
                  <div className={s.time_wrapper}>
                    <IoTimeOutline className={s.saturday_icon} />
                    <p className={s.time}>12:00</p>
                  </div>
                  <div className={s.time_info}>
                    <p>Старша група</p>
                    <p>10-14 років</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
