import React from 'react'
import bgImg  from "./icon/Group1.png"
import appleimg from "./icon/Apple.png"
import googleplayimg from "./icon/Googleplay.png"
const FourthPage = () => {
  return (
    <div className='container'>
      <div className="FourthPage">
        <article className='fourpage-text'>
          <h1>Download Our<h2>Mobile App</h2></h1>
          <p>
            It's all at your fingertips -- the restaurants you love. Find the right food
             to suit your mood, and make the first bite last. Go ahead, download app and get 50% discount
          </p>
          <div className="btn-home">
            <article className="button1">
              <img src={appleimg} alt="" />
              <article className="text-btn">              
                <p id='p'>Download App Store</p>
              </article>
              
            </article>
            <article className="button1">
            <img src={googleplayimg} alt="" />
              <article className="text-btn">              
                <p id='p'><a href="https://play.google.com/store/apps?hl=ru&gl=US" target='blank'>Download Gogle Play </a></p>
              </article>
              </article>
          </div>
        </article>
        <article className="fourpage-icon">
          <img src={bgImg} alt="" />
        </article>
      </div>
    </div>
  )
}

export default FourthPage