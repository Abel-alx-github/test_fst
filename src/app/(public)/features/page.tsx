"use client";
import React, { useState } from "react";

const monthlyPlans = [
  {
    title: "Standard",
    description: "All the basics for starting a virtual office.",
    price: 99,
  },
  {
    title: "Premium",
    recommended: true,
    description: "Enhanced features for growing teams.",
    price: 299,
  },
];

const yearlyPlans = [
  {
    title: "Standard",
    description: "All the basics for starting a virtual office.",
    price: 999,
  },
  {
    title: "Premium",
    recommended: true,
    description: "Enhanced features for growing teams.",
    price: 2999,
  },
];

const FeaturesPage = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<string | null>("Premium");
  const plans = isMonthly ? monthlyPlans : yearlyPlans;

  return (
    <div className="relative min-h-screen bg-black/30 sm:px-[10%] py-24">
      <h2 className="text-3xl lg:text-5xl font-bold text-slate-200 mb-8 pl-5">
        Your order <span className="text-yellow-600">summary</span>
      </h2>
      <div className=" max-w-7xl min-h-[70vh]  bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-8">
        <div className="max-w-xl">
          {/* Toggle Buttons */}
          <div className=" flex items-center justify-between mb-6">
            <span className="text-slate-200 font-semibold text-lg md:text-3xl">
              Select plan
            </span>
            <div className="bg-sky-950 rounded-full flex p-1">
              <button
                onClick={() => setIsMonthly(true)}
                className={`${
                  isMonthly
                    ? "bg-yellow-600 text-slate-200"
                    : "text-slate-200 bg-transparent"
                } rounded-full py-1 md:py-2 px-2 md:px-4 font-semibold focus:outline-none`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className={`${
                  !isMonthly
                    ? "bg-yellow-600 text-slate-200"
                    : "text-slate-200 bg-transparent"
                } rounded-full py-1 md:py-2 px-2 md:px-4 font-semibold focus:outline-none`}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Pricing List */}
          <div className="">
            {plans.map((plan, index) => (
              <div
                key={plan.title}
                className={`bg-white/5 backdrop-blur-sm rounded-lg p-2 sm:p-4 mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between`}
                onClick={() => setSelectedPlan(plan.title)}
              >
                <div className="flex items-start sm:items-center">
                  <div
                    className={`mt-4 sm:mt-1 flex justify-center items-center w-4 h-4 md:w-8 md:h-8 rounded-full mr-4 border-3 sm:border-4 ${
                      selectedPlan === plan.title
                        ? " border-yellow-600 "
                        : "border-slate-200"
                    }`}
                  >
                    <div
                      className={`w-full h-full rounded-full  ${
                        selectedPlan === plan.title
                          ? "border-3 sm:border-4 border-slate-200 bg-yellow-600 "
                          : "border-3 sm:border-4 border-yellow-600 bg-slate-200"
                      }`}
                    ></div>
                  </div>
                  <div className="max-w-[15rem]">
                    <h3 className="text-xl font-semibold text-slate-200">
                      {plan.title}
                    </h3>
                    <p className="text-slate-300">{plan.description}</p>
                    <div className="sm:hidden">
                      <p className="text-slate-300 flex ">
                        <span className="font-bold text-slate-200 text-xl md:text-3xl ">
                          ${plan.price}
                        </span>
                        <span className=" text-black">
                          per {isMonthly ? "Month" : "Year"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    {plan.recommended && (
                      <span className="ml-2 bg-slate-100 text-black rounded-full px-2 py-1 text-xs font-medium">
                        Recommended
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right sm:text-left">
                  <div className="hidden sm:block">
                    <p className="text-slate-300 flex sm:flex-col flex-row items-center justify-end">
                      <span className="font-bold text-slate-200 text-xl md:text-3xl ">
                        ${plan.price}
                      </span>
                      <span className="  text-black">
                        per {isMonthly ? "Month" : "Year"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
