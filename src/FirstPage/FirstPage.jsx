import React from 'react';
import smallimg1 from "./icons/Group 15.png";
import smallimg2 from "./icons/Group 17.png";
import smallimg3 from "./icons/Group 12 (1).png";


const FirstPage = () => {
  return (
    <div className='container'>
        <div className="First-page">
        <div className='First-page-part1'>
          <div className="First-page-part1_text">
            <h1>
              Meat, Eat & Enjoy
            </h1>
            <h2>
              the true taste
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus porro error repellat vel sapiente repellendus
              explicabo.
            </p>
          </div>
          <button>Buy Now</button>
        </div>
        <div className="First-page-part2">
          <article className='part2-img' >
            <img src={smallimg2} alt="" />
            <img src={smallimg3} alt="" />
            <img src={smallimg1} alt="" />
          </article>
        </div>
      </div>
    </div>
  )
}

export default FirstPage
