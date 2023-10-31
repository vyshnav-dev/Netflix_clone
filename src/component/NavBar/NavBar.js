import React from 'react';
import  { useState, useEffect } from 'react';
import "./NavBar.css"

function NavBar() {
 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
      <div className="lists">
        <ul>
            <li className="list1">Home</li>
            <li className="list1">Tv Shows</li>
            <li className="list1">Movies</li>
            <li className="list1">New & Popular</li>
            <li className="list1">My List</li>
        </ul>
      </div>
      
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  );
}

export default NavBar;

