import Home from "./Components/Home"
import ContactUs from "./Components/Contact"
import Students from "./Components/Students"
import AddStudents from "./Components/AddStudents"
import React, {Component} from 'react'
import './Components/Style.css';
import { BrowserRouter, Link, Route, Routes} from "react-router-dom"
import StudentsList from "./Components/StudentsList"
import UpdateStudents from "./Components/UpdateStudent"


class App extends Component {
  render(){
  return ( 
    <div>
      <StudentsList>
      <BrowserRouter>
      <div className="navBar">
        <div><Link to="" className="label">Home</Link></div>
        <div><Link to="/Students" className="label">Students</Link></div>
        <div><Link to="/ContactUs" className="label">Contact Us</Link></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Students/Details" element={<AddStudents />} />
        <Route path="/Student/:path" element={<UpdateStudents />} />
      </Routes>
      </BrowserRouter>
      </StudentsList>
    </div>

  );
  }
}

export default App;
