import React from 'react';
import page2Img1 from "./icons/secondpage1.png";
import page2Img2 from "./icons/secondpage2.png";
  
const SeconPage = () => {
  return (
    <div className='container'>
     <div className="SecondPage">
        <article className="secondpage-text">
            <h1>Menu Categories</h1>
        </article>
        <article className='secondpage-icon'>
            <div className="icon-item">
                <img src={page2Img1} alt=""/>
                <div className="hover">
                <h1>SALADS</h1>
                <p>from <h1>8$</h1></p>
                <button>Order Now</button>
                </div>

            </div>
            <div className="icon-item">
                <img id='img4' src={page2Img2} alt=""/>
                <div className="hover">
                <h1>SALADS</h1>
                <p>from <h1>8$</h1></p>
                <button>Order Now</button>
                </div>

            </div>
            <div className="icon-item">
                <img  src={page2Img1} alt=""/>
                <div className="hover">
                <h1>SALADS</h1>
                <p>from <h1>8$</h1></p>
                <button>Order Now</button>
                </div>

            </div>
            <div className="icon-item">
                <img id='img4' src={page2Img2} alt=""/>
                <div className="hover">
                <h1>SALADS</h1>
                <p>from <h1>8$</h1></p>
                <button>Order Now</button>
                </div>

            </div>
        </article>
     </div>
    </div>
  )
}

export default SeconPage;
