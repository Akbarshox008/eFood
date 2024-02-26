import React, { useState, useEffect } from "react";
const Korzinka = () => {
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
  return (
    <div className="container">
      <h1 id="h2">now menu</h1>
      <div className="shop-home">
            <div className="shop-items">
              <h1>Burger</h1>
              {users.map((user) => (
                <img key={user.id} id="img" src={user.image11} alt="" />
              ))}
              <p>20 000 sum</p>
              <button>
                <h2>shop now</h2>
              </button>
            </div>
            <div className="shop-items">
              <h1>Burger</h1>
              {users.map((user) => (
                <img id="img" key={user.id} src={user.image13} alt="" />
              ))}
              <p>20 000 sum</p>
              <button>
                <h2>shop now</h2>
              </button>
            </div>
            <div className="shop-items">
              <h1>Burger</h1>
              {users.map((user) => (
                <img id="img" key={user.id} src={user.image12} alt="" />
              ))}
              <p>20 000 sum</p>
              <button>
                <h2>shop now</h2>
              </button>
            </div>
            <div className="shop-items">
              <h1>Burger</h1>
              {users.map((user) => (
                <img key={user.id} id="img" src={user.image13} alt="" />
              ))}
              <p>20 000 sum</p>
              <button>
                <h2>shop now</h2>
              </button>
            </div>
            <div className="shop-items">
              <h1>Burger</h1>
              {users.map((user) => (
                <img key={user.id} id="img" src={user.image12} alt="" />
              ))}
              <p>20 000 sum</p>
              <button>
                <h2>shop now</h2>
              </button>
            </div>
            <div className="shop-items">
              <h1>Burger</h1>
              {users.map((user) => (
                <img key={user.id} id="img" src={user.image11} alt="" />
              ))}
              <p>20 000 sum</p>
              <button>
                <h2>shop now</h2>
              </button>
            </div>

      </div>
    </div>
  );
};

export default Korzinka;
