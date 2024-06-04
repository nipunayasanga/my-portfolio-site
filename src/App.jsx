import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Myprojects from './components/myprojects/Myprojects';
import Myblog from './components/myblog/myblogs';



import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer' ;


const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Myprojects />
            <Myblog /> 
            <Contacts />
          </>
        } />
        
      
        
        
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
