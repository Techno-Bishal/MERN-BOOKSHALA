import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthProvider"; // Import useAuth

function Login() {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth(); // Use global auth state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3008/user/login", {
        email: data.email,
        password: data.password,
      });
  
      // ✅ Store user in local storage
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      
      // ✅ Show toast message before closing modal
      toast.success("Logged in Successfully", { duration: 3000 });
  
      // ✅ Delay modal close & navigation so toast is visible
      setTimeout(() => {
        document.getElementById("my_modal_3").close();
        navigate("/"); // Redirect to Home
      }); // Wait 2 seconds before navigating
    } catch (err) {
      console.error("Login Error:", err);
      const errorMessage = err.response?.data?.message || "Invalid credentials!";
      toast.error(errorMessage);
    }
  };
  
  

  return (
    <div>
      <Toaster />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box rounded-lg shadow-lg bg-white p-6">
          <button
            onClick={() => document.getElementById("my_modal_3").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>

          <h3 className="text-xl font-bold text-gray-700 text-center">Login</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
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

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-4">
            Not registered?{" "}
            <Link to="/signup" className="text-blue-500 font-medium hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
