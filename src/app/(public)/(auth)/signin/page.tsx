"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useAuth } from "@/context/auth";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

type FormData = z.infer<typeof schema>;

const SigninForm = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting},
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await login(data);
      console.log("Signin Form Data:", res);
    } catch (error) {
      console.error("Signin error:", error);
      alert("Signin failed. Please check your credentials.");
    }
  };

  return (
    <div className="bg-black/50 flex items-center justify-center min-h-screen relative py-18 ">
      <div className="bg-gray-300/80 p-4 md:p-8  md:shadow-md w-full max-w-md mx-auto border-5 border-blue-400">
        <div className="border-5 border-blue-500 border-dotted p-2 rounded-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                Enter Your Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("password")}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-blue-950 hover:bg-blue-900 text-slate-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {isSubmitting ? "Signing in..." : "Continue"}
              </button>
            </div>
          </form>
          <div className="flex justify-between mt-4 text-sm text-gray-500">
           <p>
            Don&apos;t have account?{" "}
            <Link href="/signup" className="text-blue-950 underline">
              Sign Up
            </Link>
            </p>
            <Link href="/forgot-password" className="text-blue-950 underline">
              Forgot Password?
            </Link>
          </div>
          <p className="text-black\100 text-xs text-center mt-4">
            By proceeding, you are agreeing to our <br />
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
    </div>
  );
};

export default SigninForm;
