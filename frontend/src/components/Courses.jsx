import React, { useEffect, useState } from "react";
import Cards from "./Cards";

import { Link } from "react-router-dom";
import axios from 'axios'

const Courses = () => {
  const [book,setBook ] = useState([])

  useEffect(()=>{
    const getBook  = async() =>{
      try{ 
         
    const response =  await axios.get("http://localhost:3008/book")
    console.log(response.data)
    setBook(response.data)

      }catch(error){
      console.log(error)
      }
    }
    getBook()
  },[])
  return (
    <>
      <div className="max-w-screen-2xl  mx-auto container md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-bold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            reprehenderit est eos reiciendis sequi magni soluta eaque delectus
            suscipit excepturi, deserunt ullam in rem officiis eveniet vero!
            Numquam, nisi corrupti?
          </p>
          <Link to="/"
           className="bg-pink-500 text-white px-4 py-2 outline-none  cursor-pointer rounded-md text-lg mt-10 ">
            Back
          </Link>
        </div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-4 my-5 ">
    {
      book.map((item)=>(
        <Cards key={item.id} item={item}/>
      ))
    }
</div>

      </div>
    </>
  );
};

export default Courses;
