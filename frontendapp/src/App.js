import React from 'react'
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './components/common/heading/Header';
import Home from './components/home/hero/Home';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';

const App = () => {
  return (
    <>
        
        <Router>
        <Header/>
            <Routes>
                <Route path='/' exact Component={Home}/>
                <Route path='/about' exact Component={About}/>
                <Route path='/courses' exact Component={CourseHome}/>
            </Routes>          
        </Router>
    </>
  );
}

export default App