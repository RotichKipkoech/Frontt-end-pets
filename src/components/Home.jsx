// import React from 'react';
// import { Link } from 'react-router-dom';
// import './styles.css'; // Import the external CSS file

// function Home() {
//   return (
//     <div className="container"> {/* Apply the container class */}
//       <h2 className="heading">Home Page</h2> {/* Apply the heading class */}
//       <nav className="navigation"> {/* Apply the navigation class */}
//         <ul>
//           <li>
//             <Link to="/shop">Shop</Link>
//           </li>
//           <li>
//             <Link to="/veterinary">Veterinary</Link>
//           </li>
//           <li>
//             <Link to="/services">Services</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact Us</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Home;
import React from 'react';
import NavBar from './NavBar';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <NavBar />
    </div>
  );
}

export default Home;
