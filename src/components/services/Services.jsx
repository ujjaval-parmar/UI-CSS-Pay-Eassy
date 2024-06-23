import React, { useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";

// Import Swiper styles
import "swiper/css";


const SERVICES = [
    {
        id: 1,
        title: 'Post Paid',
        text: 'Postpaid recharges of all the operators can be done instantly with our system.',
        icon: <RiMoneyDollarCircleFill />
    },
    {
        id: 2,
        title: 'Utility Payment',
        text: 'Utility Payment Information.',
        icon: <FaHtml5 />
    },
    {
        id: 3,
        title: 'AePS',
        text: 'Instant AePS across all the major banks in India can be done within seconds by registering with us.',
        icon: <HiSpeakerphone />
    },
    {
        id: 4,
        title: 'DTH',
        text: 'We are the most reliable online DTH recharge service provider. Our DTH service covers providers like Tata Sky, Dish TV, Sun Direct, Videocon d2h, Big TV. etc.',
        icon: <RiMoneyDollarCircleFill />
    },
    {
        id: 5,
        title: 'Data Card Recharge',
        text: 'All major data card operators like Airtel, Idea, Vodafone, MTS, Tata Indicom, Tata Docomo, Aircel, Reliance & Uninor can be recharged using our service.',
        icon: <RiMoneyDollarCircleFill />
    },

]



const Services = () => {


    const [swiper, setSwiper] = useState(null);

    // console.log(swiper);


    return (
        <section className='services' id='services'>


            <div className="services-container">


                <div className="services-info">

                    <div className="service-text">

                        <h2 className='services-subheading'>Services</h2>

                        <h1 className='services-heading'>We Provide Wide Range Services</h1>

                    </div>


                    <div className="services-btns">

                        <button className="btn-second"
                            onClick={() => swiper.slidePrev()}>&larr;</button>
                        <button className="btn-main" onClick={() => swiper.slideNext()}>&rarr;</button>


                    </div>




                </div>





                <Swiper
                    className="mySwiper"
                    loop={"true"}
                    onSwiper={setSwiper}
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                >

                    {SERVICES.map(service => {
                        return (
                            <SwiperSlide className='service-slider' key={service.id}>

                                <div className="swiper-icon-container">
                                    {service.icon}
                                </div>

                                <h2>{service.title}</h2>

                                <p>{service.text}</p>


                            </SwiperSlide>

                        )
                    })}

                </Swiper>



            </div>



        </section>
    )
}

export default Services