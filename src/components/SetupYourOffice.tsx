"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    companyName: z
      .string()
      .min(2, { message: "Company name must be at least 2 characters." }),
    companyWebsite: z.string().url({ message: "Invalid URL." }),
    companySize: z.enum(["0-10", "10-50", "50+"], {
      required_error: "Please select a company size.",
    }),
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

const SetupYourOffice = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const companySizeValue = watch("companySize");

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="w-full flex items-center justify-center min-h-screen relative py-20">
      <div className="bg-gray-300/80 p-4 md:p-8 rounded md:shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
          Set Up Your Office
        </h2>

        <div className="flex justify-center items-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-sky-950 flex items-center justify-center overflow-hidden">
              <span className="text-slate-200 text-sm">Logo Here</span>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="w-8 h-8 p-2 rounded-full bg-yellow-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6  text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7h2l2-2h10l2 2h2a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 12a3 3 0 100-6 3 3 0 000 6z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

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
              htmlFor="companyName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("companyName")}
              placeholder="Enter your company name"
            />
            {errors.companyName && (
              <p className="text-red-500 text-xs italic">
                {errors.companyName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="companyWebsite"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Company Website <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyWebsite"
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("companyWebsite")}
              placeholder="Enter your company website"
            />
            {errors.companyWebsite && (
              <p className="text-red-500 text-xs italic">
                {errors.companyWebsite.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="companySize"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Company Size <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="companySize"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                {...register("companySize")}
                value={selectedSize || ""}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Select company size </option>
                <option value="0-10">0 to 10 Employees</option>
                <option value="10-50">10 to 50 Employees</option>
                <option value="50+"> {">"} 50 Employees</option>
             
              </select>

              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>

              {errors.companySize && (
                <p className="text-red-500 text-xs italic">
                  {errors.companySize.message}
                </p>
              )}
            </div>
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
              placeholder="Create a password"
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
              type="submit"
              className="w-full bg-sky-950 hover:bg-sky-900 text-slate-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetupYourOffice;



