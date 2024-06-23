import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Contact = () => {
  return (
    <section className='contact' id='contact'>


        <div className="contact-wrapper">


            <div className="contact-info">

                <h2>Let's Connect</h2>

                <p className='contact-time'>Please fill out the form on this section to contact with me. Or call between 9 AM To 7 PM.</p>

                <p className='contact-address'><b>Address: </b>Pay Eassy,Pay Eassy Retail Private Limited, 3rd Floor, Nirmal Heights,,Nandi Stop, Ausa Road, Latur - 413512,Maharashtra,Latur.</p>

                <p className="contact-details">
                    <span>Contact No : 9021690216</span>
                    <span>Email ID : sales@payeassy.com</span>
                </p>

                <p className="contact-policy">
                    <span>Terms & Conditions / Terms Of Use</span>
                    <span>About Us</span>
                    <span>Shipping Policy</span>
                    <span>Privacy Policy</span>
                    <span>Refund & Cancellation Policy</span>
                </p>

                <div className="contact-icons">
                        <FaSquareInstagram />
                        <FaFacebookSquare />
                        <FaTwitter />
                </div>



            </div>






            <form action="" className="contact-form">

                <h2>Let's message me and make something together</h2>

                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Your Email' />

                <textarea rows={8} placeholder='Message' />

                <button className='btn-main'>Send Message</button>

            </form>






        </div>







    </section>
  )
}

export default Contact