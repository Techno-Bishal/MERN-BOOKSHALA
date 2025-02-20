import React from 'react'
import Navbar from '../components/Navbar'
import Courses from '../components/Courses'
import Footer from '../components/Footer'


const CoursesHaru = () => {
   
  return (
    <>
    <Navbar/>
    <div className='min-h-screen '>
    <Courses/>
    </div>
    <Footer />
    </>
  )
}

export default CoursesHaru