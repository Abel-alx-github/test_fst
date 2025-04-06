"use client";
import React, { useState } from "react";

const monthlyPricingData = [
  {
    title: "Standard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    price: 99,
    features: [
      "Lorem ipsumt",
      "Consecteturg elit",
      "Sed non risus",
      "Suspendisse tortor",
      "Dignissim adipiscing",
      "Ultricies dolor",
    ],
  },
  {
    title: "Premium [Recommended]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    price: 299,
    features: [
      "Lorem ipsum amet",
      "Consectetur elit",
      "Sed non risus",
      "Suspendisse tortor",
      "Dignissim adipiscing",
      "Ultricies sed dolor",
    ],
  },
  {
    title: "Enterprise",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    price: "Custom Plan",
    features: [
      "Lorem ipsum ",
      "Consectetur  elit",
      "Sed non risus",
      "Suspendisse tortor",
      "Dignissim adipiscing",
      "Ultricies dolor",
    ],
  },
];

const yearlyPricingData = [
  {
    title: "Standard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    price: 999,
    features: [
      "Lorem ipsum ",
      "Consectetur  elit",
      "Sed non risus",
      "Suspendisse tortor",
      "Dignissim adipiscing",
      "Ultricies sed dolor",
    ],
  },
  {
    title: "Premium [Recommended]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    price: 2999, 
    features: [
      "Lorem ipsum ",
      "Consectetur elit",
      "Sed non risus",
      "Suspendisse tortor",
      "Dignissim dipiscing",
      "Ultricies dolor",
    ],
  },
  {
    title: "Enterprise",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    price: "Custom Plan",
    features: [
      "Lorem ipsum",
      "Consecteturelit",
      "Sed non risus",
      "Suspendisse tortor",
      "Dignissim adipiscing",
      "Ultricies olor",
    ],
  },
];

const Price = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const pricingData = isMonthly ? monthlyPricingData : yearlyPricingData;

  return (
    <div className="py-12 bg-black/30 min-h-screen sm:px-[10%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-200 sm:text-5xl">
            Flexible <span className="text-yellow-600">Plans</span>
          </h2>
          <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl">
            Choose a plan that works best for you & your team.
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="bg-sky-950 rounded-full flex p-2">
            <button
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "bg-yellow-600 text-slate-200"
                  : "text-slate-200 bg-transparent"
              } rounded-full py-3 px-6 font-semibold focus:outline-none`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`${
                !isMonthly
                  ? "bg-yellow-600 text-slate-200"
                  : "text-slate-200 bg-transparent"
              } rounded-full py-3 px-6 font-semibold focus:outline-none`}
            >
              Yearly [Save 60%]
            </button>
          </div>
        </div>

        <div className="mt-18 space-y-4 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-6">
          {pricingData.map((plan, index) => (
            <div
              key={plan.title}
              className={`relative flex flex-col  bg-white/10 backdrop-blur-lg hover:scale-105 transition-all duration-500 shadow-sm items-center ${
                index === 1 ? "lg:-translate-y-10" : ""
              }`}
            >
              <div className="flex-1 p-6 text-center">
                <h3 className="text-xl font-semibold text-slate-200">
                  {plan.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {plan.description}
                </p>
                <div className="mt-8">
                  <div className="flex items-center justify-center">
                    <span
                      className={`font-extrabold text-slate-200 ${
                        typeof plan.price === "number" ? "text-5xl" : "text-3xl"
                      }`}
                    >
                      {typeof plan.price === "number"
                        ? `$${plan.price}`
                        : plan.price}
                    </span>
                    {typeof plan.price === "number" && (
                      <span className="ml-1 text-xl text-slate-300">
                        {isMonthly ? "/per Month" : "/per Year"}
                      </span>
                    )}
                  </div>
                </div>
                <hr className="my-4 text-slate-100" />
                <div className="flex justify-center">
                  <ul role="list" className="mt-4 space-y-2 mx-auto ">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-300 flex items-center "
                      >
                        <span className="w-2 h-2 rounded-full bg-slate-200 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-6 w-full">
                <button
                  className={`w-full  rounded-full py-3 font-semibold  ${
                    plan.title === "Premium [Recommended]"
                      ? "bg-yellow-600 text-slate-200 hover:scale-105 transition-transform duration-500"
                      : "bg-sky-950 text-slate-200 hover:scale-105 transition-transform duration-500"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
