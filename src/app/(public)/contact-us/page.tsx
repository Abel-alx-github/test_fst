"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof schema>;

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission logic here (e.g., send data to an API)
  };

  return (
    <div className="min-h-screen bg-black/30 py-24 sm:px-[10%]">
      <div className="max-w-xl mt-[10%] mx-auto bg-white/10 backdrop-blur-md rounded-lg p-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-slate-200 mb-8 text-center">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-slate-200 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("name")}
              placeholder="Enter name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-slate-200 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("email")}
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-slate-200 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 
              bg-slate-100 text-gray-700 h-32 leading-tight focus:outline-none focus:shadow-outline"
              {...register("message")}
              placeholder="Write message..."
            />
            {errors.message && (
              <p className="text-red-500 text-xs italic">
                {errors.message.message}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-sky-950 hover:bg-sky-900 transiton-all duration-500 text-slate-200 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;