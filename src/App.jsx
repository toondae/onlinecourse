import { Route, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import CourseList from './components/CourseList'
import Login from './components/Login'
import Register from './components/Register'
import CoursePage from "./components/CoursePage";

function App() {

  return (
    <>
      <Navbar />      
      <Routes>
        <Route path='/' element={<CourseList />} />
        <Route path='/home' element={<CourseList />} />
        <Route path='/course' element={<CourseList />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path="/courses/:id" element={<CoursePage />} />
        <Route path="/home/courses/:id" element={<CoursePage />} />
        <Route path="/course/courses/:id" element={<CoursePage />} />
      </Routes>
    </>
  )
}

export default App
