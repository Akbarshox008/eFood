import React from 'react'
import page3img1 from "./icon/Delivery.png";
import page3img2 from "./icon/fooddelivery.png";
import page3img3 from "./icon/Resturenticon.png";
import page3img4 from "./icon/Timericon.png";

const ThirdPage = () => {
  return (
    <div className='container'>
      <div className="ThirdPage">
        <article className='thirdpage-img'>
        <img className='salom' src={page3img2} alt="" />  
        </article>
        <article className="thirdpage-text">
          <article className='item'>
            <span>Stay
            At Home, We Will Provide
          Good Food
            </span>
          </article>
          <p>
            We provide tasty food and superfast delivery at your home.  Let’s use our services right now and get discounts of up to 50%.
          </p>
          <article className="text-icon">
          <img src={page3img4} alt="" />
          <p>fasted delivery in 30 Minutes</p>
          </article>
          <article className="text-icon">
          <img src={page3img1} alt="" />
          <p>300+ delivery men</p>
          </article>
          <article className="text-icon">
          <img src={page3img1} alt="" />
          <p>500+ restaurant & cafe shop</p>
          </article>
          <button>See more</button>
        </article>
      </div>
    </div>
  )
}

export default ThirdPage