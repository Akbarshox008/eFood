
import React, { useEffect, useState } from 'react'
import logoImg from "./icon/eFood.png"
import location from "./icon/Location.png"
import calling from "./icon/Calling.png"
import facebook from "./icon/facebook.png"
import instagram from "./icon/instagram.png"
import twitter from "./icon/twitter.png"
const HomeFooter = () => {
  const[url,setUrl]=useState("http://localhost:3000/images");
  const [name,setName]=useState([])
  useEffect(()=>{
    const dataUrl=async()=>{
      const data=await fetch(url);
      const res=await data.json();
      setUrl(data)
    }
    dataUrl()
  },[])
  return (
    <> 
          <div className='container'>
              <div className="footer-home">
                <div className="footer1">
                  <img id='img' width={"150px"} src={logoImg} alt="" />
                  <article className='location'>
                      <img src={location} alt="" />
                      <h1>Toshkent,Qashqadaryo</h1>
                  </article>
                  <div className="connect">
                    <img src={calling} alt="" />
                    <h1>55-555-55-55</h1>
                  </div>
                  <div className="icons">
                      <img className='icons-img' src={facebook} alt="" />
                      <img className='icons-img' src={twitter} alt="" />
                      <img className='icons-img' src={instagram} alt="" />
                  </div>
                </div>
                <div className="footer2">
                  <h2>Company</h2>
                  <h3>About Us</h3>
                  <h3>News</h3>
                  <h3>Our trusted partner</h3>
                </div>
                <div className="footer2">
                  <h2>Supports</h2>
                  <h3>Help center</h3>
                  <h3>Feedbcak</h3>
                  <h3>Contact us</h3>
                </div>
                <div className="footer2">
                  <h2>Resources</h2>
                  <h3>Download app</h3>
                  <h3>Blog</h3>
                  <h3>What’s new</h3>
                </div>
              </div>
          </div>
          <div className="hr-home">
            <p className='hr'></p>
            <div className="container">
              <div className="footer-item">
              <p className='copy'>
              &copy; 2024 eFood - All rights reserved. 
              </p>
              <p>
                <p>
                Privacy
                </p>
                <p>
                Privacy
                </p>
                <p>
                Privacy
                </p>
              </p>
              </div>
            </div>
          </div>
          
  </>
  )
}

export default HomeFooter