"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const user = false; // Placeholder for user authentication state
    const logout = () => {
        console.log('User logged out');
    };
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between py-5 px-[5%] lg:px-[10%] bg-transparent shadow-md absolute top-0 left-0 right-0 z-10">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/logoWhite.png" alt="Logo" width={150} height={50} />
        </Link>
      </div>

      <div className="hidden lg:flex space-x-4 gap-5">
        {navItems.map((item) => (
          <React.Fragment key={item.name}>
            <Link
              href={item.path}
              className={`text-slate-200  ${
                pathname === item.path
                  ? "underline underline-offset-4"
                  : "hover:underline hover:underline-offset-2 transition-all duration-500"
              }`}
            >
              {item.name}
            </Link>
          </React.Fragment>
        ))}
      </div>

      <div className="hidden lg:flex items-center">
        {user ? (
          <>
            <span className="text-gray-800">{"user name"}</span>
            <button
              className="ml-4 px-4 py-2 text-slate-200 bg-red-500 rounded"
              onClick={() => {
                logout();
                router.push("/");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <div className="hidden lg:flex items-center">
            <Link
              href="/signin"
              className="px-2 py-1 lg:px-4 lg:py-2 text-slate-200 font-bold bg-yellow-600 rounded-md hover:bg-yellow-650 transition-colors duration-500"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="ml-2 px-2 py-1 lg:px-4 lg:py-2 text-slate-200 font-bold bg-yellow-600 rounded-md hover:bg-yellow-650 transition-colors duration-500"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <button onClick={handleMenuToggle} aria-label="Toggle Menu">
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full h-screen bg-black/50 text-slate-200 shadow-lg lg:hidden">
           <div className="fixed inset-0 z-[-1]">
                    {" "}
                    {/* Background Image */}
                    <Image
                      src="/heroBg.png" 
                      alt="Background Image"
                      fill
                      style={{ objectFit: "cover" }}
                    />
             </div>
          <div className="flex flex-col space-y-2 p-4 mx-auto bg-transparent">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-slate-200 mx-auto"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <button
                className="text-red-500"
                onClick={() => {
                  logout();
                  router.push("/");
                }}
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/signin"
                  className=" text-slate-200  mx-auto px-3 py-1 rounded-md bg-yellow-600 font-bold hover:bg-yellow-650 transition-colors duration-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className=" text-slate-200 font-bold mx-auto px-3 py-1 rounded-md bg-yellow-600 hover:bg-yellow-650 transition-colors duration-500"
                  onClick={() => setIsMenuOpen(false)}
               >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;