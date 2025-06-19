// React Router is a standard library for routing in React.
//  It enables navigation between different components (pages) 
// in a single-page application (SPA) without reloading the page.
// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// function Home() {
//   return <h2>🏠 Home Page</h2>;
// }

// function About() {
//   return <h2>ℹ️ About Page</h2>;
// }

// function Contact() {
//   return <h2>📞 Contact Page</h2>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="home/">Home</Link> |{" "}
//         <Link to="/about">About</Link> |{" "}
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path="home/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import {BrowserRouter , Route, Routes, Link} from 'react-router-dom'

function Home(){
    return <h2>🏠 Home Page</h2>
}
function About(){
    return <h2>ℹ️ About Page</h2>
}
function Contact(){
    return <h2>📞 Contact Page</h2>
}

function App (){
    return(
        <BrowserRouter>
            <nav>
                <Link to='/home'>Home</Link>|{" "}
                <Link to='/about'>About</Link>|{" "}
                <Link to='/contact'>Contact</Link>
            </nav>

            <Routes>
                <Route path="/home" element = {<Home />}/>
                <Route path="/about" element = {<About />}/>
                <Route path="/contact" element = {<Contact />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;