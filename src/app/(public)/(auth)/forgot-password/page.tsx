"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

type FormData = z.infer<typeof schema>;

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();
  const onSubmit = (data: FormData) => {
    console.log("Forgot Password Form Data:", data);
    // Handle forgot password logic here, e.g., send password reset email
  };

  return (
    <div className="bg-black/50 flex items-center justify-center min-h-screen relative py-18">
      <div className="bg-gray-300/80 p-4 md:p-8 md:shadow-md w-full max-w-md mx-auto border-5 border-blue-400">
        <div className="border-5 border-blue-500 border-dotted p-2 rounded-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
            Forgot Your Password?
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address <span className="text-red-500">*</span>
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
              <button
                type="submit"
                className="w-full bg-blue-950 hover:bg-blue-900 text-slate-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Reset Password
              </button>
            </div>
          </form>
          <div className="flex justify-center mt-4 text-sm text-gray-500">
            <Link href="/signin" className="text-blue-950 underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
