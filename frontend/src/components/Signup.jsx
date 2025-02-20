import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Login from "./Login";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3008/user/signup", {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
      });

      toast.success("Signup Successfully");
      <Navigate to="/"/>
      localStorage.setItem("Users", JSON.stringify(res.data.user));

      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1000);
    } catch (err) {
      console.error("Signup Error:", err);
      const errorMessage = err.response?.data?.message || "Signup failed!";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <Toaster /> {/* Toast Notifications */}
      <div className="flex h-screen items-center justify-center">
        <div className="w-[500px] bg-white shadow-lg rounded-lg p-6">
          {/* Close Button */}
          <button
            onClick={() => navigate("/")}
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>

          <h3 className="text-xl font-bold text-gray-700 text-center">Signup</h3>

          {/* Signup Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                {...register("fullname", { required: "Full name is required" })}
              />
              {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Signup
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <button
              className="text-blue-500 font-medium hover:underline"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
          </p>
          <Login />
        </div>
      </div>
    </>
  );
}

export default Signup;
