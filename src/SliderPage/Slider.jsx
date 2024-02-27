import React, { useState, useEffect, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg1 from "./icons/burger1.png";
import sliderImg3 from "./icons/dish1.png";
import sliderImg8 from "./icons/sandwich1.png";
import sliderImg4 from "./icons/burger2.png";
import sliderImg5 from "./icons/burger3.png";
import sliderImg6 from "./icons/burger4.png";
import sliderImg7 from "./icons/pizza1.png";
import sliderImg9 from "./icons/sandwich2.png";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
export default function Slider() {
  const [selectedItem, setSelectedItem] = useState(1);
  const [url, setUrl] = useState("http://localhost:3000/images");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, [url]);
  const handleItemClick = (itemNumber) => {
    setSelectedItem(itemNumber);
  };
  const getBackgroundColor = (itemNumber) => {
    return selectedItem === itemNumber ? "rgb(249, 62, 4)" : ""; // Change to the desired color
  };
  return (
    <div className="container">
      <div className="slider-iconpage">
        <article
          className="icon-item"
          style={{ backgroundColor: getBackgroundColor(1) }}
          onClick={() => handleItemClick(1)}
        >
          <>
            {users.map((user) => (
              <Fragment key={user.id}>
                <img src={user.image7} alt="" />
              </Fragment>
            ))}
          </>
          <h1>Burger</h1>
        </article>
        <article
          className="icon-item"
          style={{ backgroundColor: getBackgroundColor(3) }}
          onClick={() => handleItemClick(3)}
        >
          <>
            {users.map((user) => (
              <Fragment key={user.id}>
                <img src={user.image8} alt="" />
              </Fragment>
            ))}
          </>
          <h1>Sandvich</h1>
        </article>
        <article
          className="icon-item"
          style={{ backgroundColor: getBackgroundColor(8) }}
          onClick={() => handleItemClick(8)}
        >
          <>
            {users.map((user) => (
              <Fragment key={user.id}>
                <img src={user.image9} alt="" />
              </Fragment>
            ))}
          </>
          <h1>Sea Food</h1>
        </article>
      </div>
      <div className="homes">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {users.map((user) => (
            <Fragment key={user.id}>
              <img width={"300px"} src={user.image11} alt="" />
            </Fragment>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {users.map((user) => (
            <Fragment key={user.id}>
              <img width={"300px"} src={user.image11} alt="" />
            </Fragment>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {users.map((user) => (
            <Fragment key={user.id}>
              <img width={"300px"} src={user.image12} alt="" />
            </Fragment>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {users.map((user) => (
            <Fragment key={user.id}>
              <img width={"300px"} src={user.image13} alt="" />
            </Fragment>
          ))}
        </SwiperSlide>
      </Swiper>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {users.map((user) => (
            <Fragment key={user.id}>
              <img width={"300px"} src={user.image11} alt="" />
            </Fragment>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {users.map((user) => (
            <Fragment key={user.id}>
              <img width={"300px"} src={user.image11} alt="" />
            </Fragment>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {users.map((user) => (
            <Fragment key={user.id}>
              <img width={"300px"} src={user.image12} alt="" />
            </Fragment>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {users.map((user) => (
            <Fragment key={user.id}>
              <img width={"300px"} src={user.image13} alt="" />
            </Fragment>
          ))}
        </SwiperSlide>
      </Swiper>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {users.map((user) => (
            <Fragment key={user.id}>
              <img width={"300px"} src={user.image11} alt="" />
            </Fragment>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {users.map((user) => (
            <Fragment key={user.id}>
              <img width={"300px"} src={user.image11} alt="" />
            </Fragment>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {users.map((user) => (
            <Fragment key={user.id}>
              <img width={"300px"} src={user.image12} alt="" />
            </Fragment>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {users.map((user) => (
            <Fragment key={user.id}>
              <img width={"300px"} src={user.image13} alt="" />
            </Fragment>
          ))}
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}
