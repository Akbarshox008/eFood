import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "./icons/eFood.png";
import SearchIcon from "./icons/searchIcon.png";
import buy from "./icons/Buy.png"


const Navbar = () => {
  const [showList, setShowList] = useState(false);
  const [isHomeVisible, setIsHomeVisible] = useState(false);
  const [productsData, setProductsData] = useState("products");
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue == "burger") {
      const filteredProducts = products.filter(
        (data) => data.images === "burger"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue == "calling") {
      const filteredProducts = products.filter(
        (data) => data.images === "calling"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue == "location") {
      const filteredProducts = products.filter(
        (data) => data.images === "loation"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue == "logo") {
      const filteredProducts = products.filter(
        (logo) => item.category === "logo"
      );

      setProductsData(filteredProducts);
    }

      setProductsData(filteredProducts);
    }
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((data) =>
      data.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };
  const handleSearchIconClick = () => {
    setShowList(!showList);
  };

  const handleBuyIconClick = (e) => {
    e.preventDefault();
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
    console.log('salom');
  };

  

  const toggleHomeVisibility = () => {
      setIsHomeVisible(!isHomeVisible);
  };


  return (
    <div className="container">
      <header>
        <form
          onClick={handleFormClick}
          id="nav-forma"
          style={{ display: showList ? "block" : "none" }}
        >
          <input type="text" id="inp" placeholder="Search...." />
          <button type="submit" onClick={handleBuyIconClick}>Search...</button> 
        </form>
        <nav className="navbar">
          <article className="logo">
            <Link to="/">
              <img width={"200px"} src={Logo} alt="" />
            </Link>
          </article>
          <article className="list">
            <Link to="/">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/fillials">Fillials</Link>
            <Link to="/contact">Contact</Link>
          </article>
          <article className="icons">
            <img
              width={"22px"}
              src={SearchIcon}
              onClick={handleSearchIconClick}
              alt=""
            />
            <button><Link to="/contact">Sign Up</Link></button>
          <article className="burgers">
            <h1 id="h1">
              <img src={buy} alt="" onClick={toggleHomeVisibility} />
            </h1>
            <div className="home" style={{ display: isHomeVisible ? "block" : "none" }}>
              <div className="shop-homes">
                <h1>Shopping card</h1>
                <article className="items">
                  <article className="item">
                    <img src="" alt="burger" />
                    <p>sakin</p>
                    <p>2342342</p>
                  </article>
                  <article className="item">
                    <img src="" alt="burger" />
                    <p>sakin</p>
                    <p>2342342</p>
                  </article>
                  <article className="item">
                    <img src="" alt="burger" />
                    <p>sakin</p>
                    <p>2342342</p>
                  </article>
                  <article className="item">
                    <img src="" alt="burger" />
                    <p>sakin</p>
                    <p>2342342</p>
                  </article>
                  <article className="item">
                    <img src="" alt="burger" />
                    <p>sakin</p>
                    <p>2342342</p>
                  </article>
                  <article className="item">
                    <img src="" alt="burger" />
                    <p>sakin</p>
                    <p>2342342</p>
                  </article>
                </article>
                <article className="btn-home">
                  <button onClick={toggleHomeVisibility}>close</button>
                  <button>Shop now</button>
                </article>
              </div>
            </div>
          </article>
          </article>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
  };

export default Navbar;
