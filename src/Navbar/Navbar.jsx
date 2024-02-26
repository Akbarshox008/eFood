import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'; 
import Logo from "./icons/eFood.png";
import SearchIcon from "./icons/searchIcon.png";

const Navbar = ({ addToDashboard }) => {
  const [showList, setShowList] = useState(false);

  const handleSearchIconClick = () => {
    setShowList(!showList);
  };

  const handleBuyIconClick = () => {
    const item = {
      name: 'Burger', 
      price: 20000,   
    };
    addToDashboard(item);
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='Container'>
      <header>
        <form onClick={handleFormClick} id="nav-forma" style={{ display: showList ? 'block' : 'none' }}>
          <input type="text" id='inp' placeholder='Search....' />
          <button type="submit">Search...</button> {/* Added type="submit" */}
        </form>
        <nav className='navbar'>
          <article className='logo'>
            <Link to="/">
              <img width={"200px"} src={Logo} alt="" /> 
            </Link>
          </article>
          <article className='list'>
            <Link to="/">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/fillials">Fillials</Link>
            <Link to="/contact">Contact</Link>
          </article>
          <article className='icons'>
            <img width={"22px"} src={SearchIcon} onClick={handleSearchIconClick} alt="" />
              <button>Sign Up</button>
          </article>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default Navbar;
