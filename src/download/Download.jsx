import React from 'react'

const Download = () => {
  return (
    <div className='download'>

        <div className="download-container">

            <h2>Downloads</h2>


            <h1>You Can Download The Documents And Application From Here.</h1>

            <div className="download-item-container">

                <div className="download-item">

                    <div className="download-img-container">

                        <img src="android.svg" alt="" />

                    </div>

                    <div className="download-text">
                        <h2>Download Android App</h2>
                        <p>We Provide Android application to make transaction very quickly and easily.</p>
                    </div>

                </div>

                <div className="download-item">

                    <div className="download-img-container">

                        <img src="pdf.svg" alt="" />

                    </div>

                    <div className="download-text">
                        <h2>Download API Document</h2>
                        <p>We provide Soap Base API Document for secure payment.</p>
                    </div>

                </div>

                <div className="download-item">

                    <div className="download-img-container">

                        <img src="apidoc.svg" alt="" />

                    </div>

                    <div className="download-text">
                        <h2>Download SMS Format</h2>
                        <p>Provide Facility to recharge even without internet connection using SMS.</p>
                    </div>

                </div>



            </div>





        </div>


    </div>
  )
}

export default Download