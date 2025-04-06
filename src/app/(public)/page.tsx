import Hero from "@/components/homepage/Hero";
import Price from "@/components/homepage/Price";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative">
     <Hero />
     <Price />
    </div>
  );
}
