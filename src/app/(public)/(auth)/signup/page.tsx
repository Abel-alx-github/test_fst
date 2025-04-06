"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useAuth } from "@/context/auth";
const schema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], 
  });

type FormData = z.infer<typeof schema>;


const SignupForm = () => {
const {register:create} = useAuth()  

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  
  const onSubmit = async (data: FormData) => {
    try {
      const res = await create(data);
    } catch (error) {
      console.error("Signin error:", error);
    }
  };

  return (
    <div className="bg-black/50 flex items-center justify-center min-h-screen relative py-18 ">
      <div className="bg-gray-300/80 p-4 md:p-8 rounded md:shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
          Complete Your Signup
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Enter Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("name")}
              placeholder="First and Last Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
               Enter Your Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("email")}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Create Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("password")}
              placeholder="Type a password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("confirmPassword")}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs italic">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div>
            <button
            disabled={isSubmitting}
              type="submit"
              className="w-full bg-blue-950 hover:bg-blue-900 text-slate-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isSubmitting ? "Signing up..." : "Continue"}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-500 ">
            Already have an account? <Link href="/signin" className="text-blue-950 underline">Login</Link>
          </p>
        </div>
        <p className="text-black\100 text-xs text-center mt-4">
          By proceding, you are agreing to our{" "}
          <br/>
          <Link href="/terms" className="text-blue-950 underline ">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-blue-950 underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
