import React from 'react'


import SupportItem from '../supportItem/SupportItem';

const Banner = () => {
  return (

    <div className="bg-banner" >
      <section className='banner' id='home'>

        <div className="banner-text-container">


          <h2>100% Secured</h2>

          <h1>Pay Eassy</h1>

          <h3>India's No. 1 Recharge Site</h3>

          <p>Pay Eassy is India's No. 1 recharge site that delivers next generation instant online pre-paid recharge solutions to end users.</p>

          <div className="banner-btns">

            <button className="btn-main">Login</button>

            <button className="btn-second">Contact</button>


          </div>


        </div>




        <div className="banner-img-container">

          <img src="hero-person-img.png" alt="hero" />

        </div>


        {/* <SupportItem /> */}


      </section>
    </div>






  )
}

export default Banner