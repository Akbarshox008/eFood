import HomeFooter from "../HomeFooter/HomeFooter";
import search from "./searching.png"
const Contact = () => {
  const res=(e)=>{
      e.preventDefault()
  }
  return (
    <>
    <div className='container'>
        <h1 className='contact-text'>Contact Us</h1>
        <div className="form-home">
        <form onSubmit={res} className='forma' >
          <div className="part1">
            <label>
                First Name *
                <input type="text" placeholder='First Name'/>
            </label>
            <label>
                Last Name *
                <input type="text" placeholder='Last Name'/>
            </label>
          </div>
          <div className="part2">
            <label>
                Email Addrees *
                <input type="email" placeholder='Email'/>
            </label>
            <label>
                Phone Number *
                <input type="number" placeholder='Phone'/>
            </label>
          </div>
          <div className="part2">
            <label id='label'>
              Message *
                <textarea name="" id="" cols="80" rows="7" placeholder='Message'></textarea>
            </label>
          </div>
          <div className="part3">
            <button className="btn">Submit</button>
          </div>
        </form>
        <div className="items-home">
              <div className="item">
                <img width={"40px"} src={search} alt="" />
                <article className="item-text">
                <h1>We are located here for you</h1>
                <p>Venture Centre, UWSP Sceince Park, Coventry, CV4 7EZ</p>
                </article>
              </div>
              <hr color="gray" width={"95%"}/>
              <div className="item">
                <img width={"40px"} src={search} alt="" />
                <article className="item-text">
                <h1>We're here for you! Just get answers</h1>
                <p>Please send us your enquiry</p>
                </article>
              </div>
              <hr color="gray" width={"95%"}/>
              <div className="item">
                <img width={"40px"} src={search} alt="" />
                <article className="item-text">
                <h1>Have any questions? Reach us by phone</h1>
                <p>+998-55-555-55-55</p>
                </article>
              </div>
              <hr color="gray" width={"95%"}/>
              <div className="item">
                <img width={"40px"} src={search} alt="" />
                <article className="item-text">
                <h1>Explore most popular help topics</h1>
                <p>View our Frequently Asked Questions</p>
                </article>
              </div>
        </div>
        </div>

    </div>
    <HomeFooter/>
    </>
  )
}

export default Contact