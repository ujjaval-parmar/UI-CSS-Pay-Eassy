import React from 'react';
import { FaMedal } from "react-icons/fa";
import { GrTable } from "react-icons/gr";
import { MdOutlineHeadsetMic } from "react-icons/md";

const SupportItem = () => {
  return (
    <section className='support-item-main'>

      <div className="support-item-container">

        <div className="support-item">

          <div className="support-item-icon-container">
            <FaMedal />

          </div>

          <div className="support-item-text">
            <h2>10 Years Experience</h2>

            <p>Experience</p>

          </div>


        </div>

        <div className="support-item">

          <div className="support-item-icon-container">
            <GrTable />

          </div>

          <div className="support-item-text">

            <h2>Fully Secured</h2>

            <p>Instantaneous payments</p>
          </div>



        </div>

        <div className="support-item">

          <div className="support-item-icon-container">
            <MdOutlineHeadsetMic />

          </div>

          <div className="support-item-text">

            <h2>Support</h2>

            <p>Online 24/7</p>

          </div>



        </div>




      </div>



    </section>
  )
}

export default SupportItem