import React, { useEffect, useState } from 'react'


const SECTION_IDS = ["home", "services", "about", "provider", "contact"];

const Header = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [activeSection, setActiveSection] = useState('home');

  const [isScrolled, setIsScrolled] = useState(false);

  const [showNav, setShowNav] = useState(false);



  useEffect(() => {

    const handleScroll = () => {

      // const element = document.getElementById(activeLink);

      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }


      for (let i = 0; i < SECTION_IDS.length; i++) {
        // console.log(SECTION_IDS[i])
        const sectionEle = document.getElementById(SECTION_IDS[i]);

        // console.log(sectionEle);

        let top = window.scrollY;
        let offset = sectionEle.offsetTop - 300;
        let height = sectionEle.offsetHeight;

        console.log(sectionEle.id, top, offset, height);

        if (top >= offset && top < offset + height) {
          setActiveLink(SECTION_IDS[i]);
          setActiveSection(SECTION_IDS[i])
          break;
        }

        
      }
      
      
    }
    
    window.addEventListener('scroll', handleScroll);
    
    
    return () => window.removeEventListener('scroll', handleScroll);
    
    
  }, [activeLink]);
  
  // console.log("active-Link:", activeLink);

  return (

    <header className='header' style={{
      backgroundColor: isScrolled ? 'white' : '#f9edf0'
    }}>

      <div className="nav-wrapper">

        <div className="header-logo">
          <img src="logo.png" alt="" />
        </div>

        <nav className={`navbar ${showNav && 'show'}`}>

          <ul className='navbar-list'>


            {SECTION_IDS.map(sectionId => {
              return (
                <li key={sectionId} className="navbar-list-item">
                  <a
                    href={`#${sectionId}`}
                    onClick={() => {
                      setActiveLink(sectionId)
                      setShowNav(false);
                    }}
                    style={{
                      color: (activeLink === sectionId) ? '#f01346 ' : '#15295f'
                    }}
                  >{sectionId}</a>
                </li>
              )
            })}

          </ul>



          <button className='btn-main login-btn'>Login</button>


        </nav>


        <div className="menu-btn"  onClick={()=> setShowNav(!showNav)}>

          
              <div className={`line line-1 ${showNav && 'show'}`}></div>
              <div className={`line line-2 ${showNav && 'show'}`}></div>
              <div className={`line line-3 ${showNav && 'show'}`}></div>
            

        </div>

      </div>




    </header>
  )
}

export default Header