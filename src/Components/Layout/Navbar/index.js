import logo from '../../../assets/images/Logo.png'
import open_respo from '../../../assets/images/burger-bar.png'
import close_respo from '../../../assets/images/fermer.png'
import React, { useState, useEffect  } from 'react';
import './index.scss';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = 'hidden'; // Prevent body scroll
    } else {
      document.body.style.overflowY = 'auto'; // Allow body scroll
    }

    return () => {
      document.body.style.overflowY = 'auto'; // Restore body scroll on component unmount
    };
  }, [isMenuOpen]);

  
  
  // const [isMenuOpen, setMenuOpen] = useState(false);
  const [megamenu1Open, setMegamenu1Open] = useState(false);
  const [megamenu2Open, setMegamenu2Open] = useState(false);
  const [megamenu3Open, setMegamenu3Open] = useState(false);
  const [megamenu4Open, setMegamenu4Open] = useState(false);
  const [megamenu5Open, setMegamenu5Open] = useState(false);
  const [megamenu6Open, setMegamenu6Open] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  // };

  const toggleMegamenu1 = () => {
    setMegamenu1Open(!megamenu1Open);
  };

  const toggleMegamenu2 = () => {
    setMegamenu2Open(!megamenu2Open);
  };

  const toggleMegamenu3 = () => {
    setMegamenu3Open(!megamenu3Open);
  };

  const toggleMegamenu4 = () => {
    setMegamenu4Open(!megamenu4Open);
  };

  const toggleMegamenu5 = () => {
    setMegamenu5Open(!megamenu5Open);
  };

  const toggleMegamenu6 = () => {
    setMegamenu6Open(!megamenu6Open);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
      <a href='#'><img src={logo} alt='logo'></img></a>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li className="navbar-menu-item"><a href='#' className='navbar_link'>Accueil</a>
        </li>
        <li className="navbar-menu-item">
          <div className='fle'>
            <a href='' className='navbar_link'>Notre École</a>
            <div className="navbar-toggle" onClick={toggleMegamenu1}>
              <span className="navbar-toggle-icon">+</span>
            </div>
          </div>
          <div className={`mega-menu megamenu1 ${megamenu1Open ? 'show' : ''}`}>
            <div className="mega-menu-left">
              <img src={logo} alt="Image 1" />
              <h3 className='title_megamenu'>Lorem</h3>
              <p>Some description here description <br/> description description description<br/> description here.</p>
            </div>
            <div className="mega-menu-center">
              <a href="#">Principal’s Welcome</a>
              <hr className='line_megamenu'/>
              <a href="#">About Us</a>
              <hr className='line_megamenu'/>
              <a href="#">Why choose Us</a>
              <hr className='line_megamenu'/>
            </div>
            <div className="mega-menu-right">
              <a href="#">Vision, Mission & values</a>
              <hr className='line_megamenu'/>
              <a href="#">Testimonials</a>
              <hr className='line_megamenu'/>
            </div>
          </div>
        </li>
        <li className="navbar-menu-item">
          <div className='fle'>
            <a href='' className='navbar_link'>Académique</a>
            <div className="navbar-toggle" onClick={toggleMegamenu2}>
              <span className="navbar-toggle-icon">+</span>
            </div>
          </div>
          <div className={`mega-menu megamenu2 ${megamenu2Open ? 'show' : ''}`}>
            <div className="mega-menu-left">
              <img src={logo} alt="Image 1" />
              <h3 className='title_megamenu'>Lorem</h3>
              <p>Some description here description <br/> description description description<br/> description here.</p>
            </div>
            <div className="mega-menu-center">
              <a href="#">Our Curriculum</a>
              <hr className='line_megamenu'/>
              <a href="#">Amazing Learning</a>
              <hr className='line_megamenu'/>
              <a href="#">Foundation Stages</a>
              <hr className='line_megamenu'/>
            </div>
            <div className="mega-menu-right">
              <a href="#">Primary School</a>
              <hr className='line_megamenu'/>
              <a href="#">Secondary School</a>
              <hr className='line_megamenu'/>
              <a href="#">Inclusion & Learning support</a>
              <hr className='line_megamenu'/>
            </div>
          </div>
        </li>
        <li className="navbar-menu-item">
          <div className='fle'>
            <a href='' className='navbar_link'>Admissions</a>
            <div className="navbar-toggle" onClick={toggleMegamenu3}>
                <span className="navbar-toggle-icon">+</span>
            </div>
          </div>
          <div className={`mega-menu megamenu3 ${megamenu3Open ? 'show' : ''}`}>
            <div className="mega-menu-left">
              <img src={logo} alt="Image 1" />
              <h3 className='title_megamenu'>Lorem</h3>
              <p>Some description here description <br/> description description description<br/> description here.</p>
            </div>
            <div className="mega-menu-center">
              <a href="#">Admissions Process</a>
              <hr className='line_megamenu'/>
              <a href="#">Admissions Policy</a>
              <hr className='line_megamenu'/>
              
            </div>
            <div className="mega-menu-right">
              <a href="#">Enquire Now</a>
              <hr className='line_megamenu'/>
            </div>
          </div>
        </li>
        <li className="navbar-menu-item">
          <div className='fle'>
            <a href='' className='navbar_link'>Vie Scolaire</a>
            <div className="navbar-toggle" onClick={toggleMegamenu4}>
                <span className="navbar-toggle-icon">+</span>
            </div>
            </div>
          <div className={`mega-menu megamenu4 ${megamenu4Open ? 'show' : ''}`}>
            <div className="mega-menu-left">
              <img src={logo} alt="Image 1" />
              <h3 className='title_megamenu'>Lorem</h3>
              <p>Some description here description <br/> description description description<br/> description here.</p>
            </div>
            <div className="mega-menu-center">
              <a href="#">School Day</a>
              <hr className='line_megamenu'/>
              <a href="#">Extra curricular Activitiess</a>
              <hr className='line_megamenu'/>
              <a href="#">Uniform</a>
              <hr className='line_megamenu'/>
            </div>
            <div className="mega-menu-right">
              <a href="#">Transport</a>
              <hr className='line_megamenu'/>
              <a href="#">School Policiess</a>
              <hr className='line_megamenu'/>
            </div>
          </div>
        </li>
        <li className="navbar-menu-item">
          <div className='fle'>
            <a href='' className='navbar_link'>Actualitées</a>
            <div className="navbar-toggle" onClick={toggleMegamenu5}>
                <span className="navbar-toggle-icon">+</span>
            </div>
          </div>
          <div className={`mega-menu megamenu5 ${megamenu5Open ? 'show' : ''}`}>
            <div className="mega-menu-left">
              <img src={logo} alt="Image 1" />
              <h3 className='title_megamenu'>Lorem</h3>
              <p>Some description here description <br/> description description description<br/> description here.</p>
            </div>
            <div className="mega-menu-center">
              <a href="#">School News</a>
              <hr className='line_megamenu'/>
              
            </div>
            <div className="mega-menu-right">
            <a href="#">Upcoming Events</a>
              <hr className='line_megamenu'/>
            </div>
          </div>
        </li>
        <li className="navbar-menu-item">
          <div className='fle'>
            <a href='' className='navbar_link'>Contactez nous</a>
            <div className="navbar-toggle" onClick={toggleMegamenu6}>
                <span className="navbar-toggle-icon">+</span>
            </div>
          </div>
          <div className={`mega-menu megamenu6 ${megamenu6Open ? 'show' : ''}`}>
            <div className="mega-menu-left">
              <img src={logo} alt="Image 1" />
              <h3 className='title_megamenu'>Lorem</h3>
              <p>Some description here description <br/> description description description<br/> description here.</p>
            </div>
            <div className="mega-menu-center">
              <a href="#">Administration</a>
              <hr className='line_megamenu'/>
              <a href="#">Enrollement</a>
              <hr className='line_megamenu'/>
              
            </div>
            <div className="mega-menu-right">
            <a href="#">Working with us</a>
              <hr className='line_megamenu'/> 
            </div>
          </div>
        </li>

      </ul>
      <a className="navbar-button">Inscriptions</a>
      <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="toggle-line"></div>
        <div className="toggle-line"></div>
        <div className="toggle-line"></div>
      </div>
      
      
    </nav>
  );
}

export default Navbar;


