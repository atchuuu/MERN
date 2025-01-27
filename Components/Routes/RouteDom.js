import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import User from './User';
function RouteDom() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={Increment}>Increment</button>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouteDom;