import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black/30 text-slate-200 py-4 px-[5%] lg:px-[10%] fixed bottom-0 left-0 w-full z-50">
      <div className="container mx-auto  flex  flex-col sm:flex-row justify-between items-center">
        <div className="text-sm">
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
        <div className="text-sm">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
