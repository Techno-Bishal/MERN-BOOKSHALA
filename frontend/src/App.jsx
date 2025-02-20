
import About from "./about/About";
import Signup from "./components/Signup";

import Contact from "./contact/Contact";

import CoursesHaru from "./courses/CoursesHaru";
import Home from "./home/Home";

import { Navigate, Route, Routes } from 'react-router-dom'


function App() {
 
  return (
    <>
  
     <Routes>
     
        <Route path="/"  element={<Home/>}/>
        <Route path="/course" element={ <CoursesHaru/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
