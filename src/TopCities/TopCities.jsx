import { Fragment, useEffect, useState } from "react";
import burger from "./Burger.png"
import HomeFooter from "../HomeFooter/HomeFooter"
const TopCities = () => {
  const [url, setUrl] = useState("http://localhost:3000/images");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
      console.log(data);
    };
    fetchData();
  }, [url]);
  return (
    <div>

      <div className="container">
        <h1 className="fillials-h1">Fillials</h1>
        <div className="fillial-home">
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>002-Toshkent</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>003-Chilonzor</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>004-Buxoro</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>005-Namangan</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
          <div className="fillial-part1">
            <article className="items1">
              <img src={burger} alt="" />
              <h1>001-Yunsobod</h1>
            </article>
          <article className="items2">
            <div className="items-text">
            <p>vremya raboti</p>
            <p>09:00 - 3:00</p>
            </div>
            <p id="p"> {">"} </p>
          </article>
          </div>
        </div>
          
      </div>
      <HomeFooter/>
    </div>
  );
};

export default TopCities;