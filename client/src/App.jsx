import React, { useContext } from 'react';
import './App.css'
import TopBar from './components/topbar/topbar';
 import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Setting from './pages/settings/Setting';
import Login from './pages/login/Login';
import About from './pages/about/about';
import Contact from './pages/contact/Contact';

import Register from './pages/register/Register';
import {Routes,Route} from 'react-router-dom';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);
  return (
    
   
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Write' element={user ? <Write /> : <Register />}></Route>
      <Route path='/Login' element={user ? <Home/> : <Login />}></Route>
      <Route path='/Register' element={user ? <Home/> : <Register />}></Route>
      <Route path='/Single' element={<Single />}></Route>
      <Route path='/Setting' element={user ? <Setting/> : <Register />}></Route>
      <Route path='/post/:postId' element={<Single />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Contact' element={<Contact />}></Route>

    </Routes>

  );
}

export default App;

 // <>
    // <TopBar />
    // <Single/>
    // </>
