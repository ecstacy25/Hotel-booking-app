// // Navbar.js
// import React from 'react';

// const Navbar = () => {
//   return (
//     <div>
//       <nav className="navbar">
//         <div className="nav-logo">Hotel Booking</div>
//         <ul className="nav-links">
//           <li>
//             <a href="#home">Home</a>
//           </li>
//           <li>
//             <a href="#hotels">Hotels</a>
//           </li>
//           <li>
//             <a href="#about">About Us</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </nav>
//       {/* <div className="reservation-form">
//         <input type="date" placeholder="Check-in" />
//         <input type="date" placeholder="Check-out" />
//         <select>
//           <option value="1">1 Guest</option>
//           <option value="2">2 Guests</option>
//           <option value="3">3 Guests</option>
//           <option value="4">4 Guests</option>
//           <option value="5">5 Guests</option>
//         </select>
//       </div> */}
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../Assets/logo.jpg";
// import "./Navbar.css";

// function NavBar() {
//   const [click, setClick] = useState(false);
//   const [activeNav, setActiveNav] = useState("#Home");
//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//           <NavLink exact to="/" className="nav-logo">
//           <img className='logo' src={logo} alt='logo' width={40} />
//             {/* <i className="fas fa-code"></i> */}
//           </NavLink>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//           <li className="nav-item">
//             <a
//                 href='#Home'
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Home
//               </a>
//               <a
//                 href='#about'
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 About Us
//               </a>
//               <a
//                 href='#services'
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Services
//               </a>
//               <a
//                 href='#contacts'
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Contacts
//               </a>
              
//             </li>
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Knessel
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/aboutUs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Hotels"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Hotels
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

