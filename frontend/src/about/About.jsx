import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="sm:flex items-center max-w-screen-2xl container mx-auto md:px-20 px-4 my-20">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
            <img src="https://img.freepik.com/free-photo/stack-books-black-wooden-table_93675-135413.jpg?t=st=1739698042~exp=1739701642~hmac=8c3309f19f1c24800c58e0243c7a7c76bda2b785196dce87d93fbb4c2e29120d&w=1060"/>
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-pink-500 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-pink-500">Our BookShala</span>
            </h2>
            <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                voluptatum.
            </p>
        </div>
    </div>
</div>
    <Footer/>
    </>
  )
}

export default About