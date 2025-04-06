import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black/30 py-24 sm:px-[10%]">
      <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-8">
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-200 my-8 text-center">
            Our Story
          </h2>
          <div className="text-slate-300 leading-relaxed max-w-4xl">
            <p className="mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-4  text-center">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="fade-in flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold text-slate-200 mb-2">
              Our Mission
            </h3>
            <p className="text-slate-300 leading-relaxed  text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="fade-in flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold text-slate-200 mb-2 ">
              Our Vision
            </h3>
            <p className="text-slate-300 leading-relaxed  text-center">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </section>

        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-200 mb-4 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="team-member fade-in">
              <Image
                src="/person1.png"
                alt="Team Member"
                width={150}
                height={150}
                className="rounded-full mb-4 mx-auto"
              />
              <h4 className="text-xl font-semibold text-slate-200 mb-1 text-center">
                Navy A.
              </h4>
              <p className="text-slate-300 text-center">CEO</p>
            </div>
            <div className="team-member fade-in">
              <Image
                src="/person2.png"
                alt="Team Member"
                width={150}
                height={150}
                className="rounded-full mb-4 mx-auto"
              />
              <h4 className="text-xl font-semibold text-slate-200 mb-1 text-center">
                Abus B.
              </h4>
              <p className="text-slate-300 text-center">CTO</p>
            </div>
            <div className="team-member fade-in">
              <Image
                src="/person3.png"
                alt="Team Member"
                width={150}
                height={150}
                className="rounded-full mb-4 mx-auto"
              />
              <h4 className="text-xl font-semibold text-slate-200 mb-1 text-center">
                Abel T
              </h4>
              <p className="text-slate-300 text-center">CMO</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
