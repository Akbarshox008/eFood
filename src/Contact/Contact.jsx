import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import HomeFooter from "../HomeFooter/HomeFooter";
import search from "./searching.png";
// import AnyComponent from "../AnyComponent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [isVerified, setIsVerified] = useState(false);

  const handleCaptchaVerify = () => {
    setIsVerified(true);
  };
  
  const notify = () =>{
    if (!isVerified) {
      setError("Iltimos, siz odamsizligingizni tasdiqlang.");
      return;
    }

    // Bo'sh maydonlarni tekshirish
    if(
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      message.trim() === "" 
    ) {
      setError("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }else{
      toast('sucsess!');
    }

    // Ma'lumotlarni saqlash
    const newData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message
    };

    setSubmittedData([...submittedData, newData]);

    // Formani tozalash
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setIsVerified(false);
  }

  const showNotification = (message) => {
    const notification = new Notification("Murojaat muvaffaqiyatli jo'natildi!", {
      body: message,
      icon: "https://via.placeholder.com/150",
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
      
   

    // showNotification("Murojaat muvaffaqiyatli jo'natildi!");
  };
  


  return (
    <>
     <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
      <div className="container">
        <h1 className="contact-text">Contact Us</h1>
        <div className="form-home">
          <form onSubmit={handleSubmit} className="forma">
            <div className="part1">
              <label>
                Ism *
                <input
                  type="text"
                  placeholder="Ism"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label>
                Familiya *
                <input
                  type="text"
                  placeholder="Familiya"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </div>
            <div className="part2">
              <label>
                Elektron pochta manzili *
                <input
                  type="email"
                  placeholder="Elektron pochta"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Telefon raqami *
                <input
                  type="tel"
                  placeholder="Telefon"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
            </div>
            <div className="part2">
              <label id="label">
                Xabar *
                <textarea
                  cols="80"
                  rows="7"
                  placeholder="Xabar"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </label>
            </div>
            <div className="part3">
              <ReCAPTCHA
                sitekey="6LfIi4EpAAAAAKOHdIlRVAIU55rAryHROVO5xIeb"
                onChange={handleCaptchaVerify}
              />
              <button onClick={notify} className="btn">Yuborish</button>
              {/* {codeInput && (<AnyComponent/>)} */}
            </div>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="items-home">
             <div className="item">
               <img width={"40px"} src={search} alt="" />
               <article className="item-text">
                 <h1>Biz siz uchun shu yerda joylashganmiz</h1>
                 <p>Venture Centre, UWSP Sceince Park, Coventry, CV4 7EZ</p>
               </article>
             </div>
             <hr color="gray" width={"95%"} />
             <div className="item">
               <img width={"40px"} src={search} alt="" />
               <article className="item-text">
                 <h1>Biz siz uchun shu yerda joylashganmiz! Faqat javob oling</h1>
                 <p>Iltimos, sorovlaringizni yuboring</p>
               </article>
             </div>
             <hr color="gray" width={"95%"} />
             <div className="item">
               <img width={"40px"} src={search} alt="" />
               <article className="item-text">
                 <h1>Savollaringiz bormi? Bizga telefon orqali murojaat qiling</h1>
                 <p>+998-55-555-55-55</p>
               </article>
             </div>
             <hr color="gray" width={"95%"} />
             <div className="item">
               <img width={"40px"} src={search} alt="" />
               <article className="item-text">
                 <h1>Eng ko'p so'raladigan yordam mavzularini o'rganing</h1>
                 <p>Tez-tez so'raladigan savollarimizni ko'ring</p>
               </article>
             </div>
           </div>
        </div>
      </div>
      <HomeFooter />
      {submittedData.length > 0 && (
  <div>
    {submittedData.forEach((data, index) => (
      console.log(`${data.firstName} ${data.lastName} - ${data.email} - ${data.phone} - ${data.message}`)
    ))}
  </div>
)}
  {submittedData.length > 0 && (
  <div>
    {submittedData.forEach((data, index) => (
      console.log(`${data.firstName} ${data.lastName} - ${data.email} - ${data.phone} - ${data.message}`)
    ))}
  </div>
)}

    </>
  );
};

export default Contact;
