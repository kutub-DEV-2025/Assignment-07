import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#244D3F] text-white mt-16 mx-auto">


      <div className=" max-w-xl mx-auto px-6 py-12 text-center justify-center ">
        <img src="/public/assets/logo-xl.png" alt="" />

        
        <p className="text-sm mt-3 text-gray-200 max-w-md mx-auto">
          Stay connected with your friends and never lose touch again.
        </p>

       
        <p className="text-sm mt-6 text-gray-300">
          Follow us
        </p>

        <div className="flex justify-center gap-4 mt-4">

          <img
            src="/assets/instagram.png"
            alt="instagram"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />

          <img
            src="/assets/facebook.png"
            alt="facebook"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />

          <img
            src="/assets/twitter.png"
            alt="twitter"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />

        </div>

      </div>

     
      <div className=" flex justify-between border-t border-white/20 py-4 text-center text-sm text-gray-300">
        <div>
            © {new Date().getFullYear()} KeenKeeper. All rights reserved.
        </div>
        <div>
        Privacy Policy           Terms of Service           Cookies
      </div>
      </div>
      

    </footer>
  );
}