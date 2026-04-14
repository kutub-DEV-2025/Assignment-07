import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#244D3F] text-white border-t mt-16">
      
      <div className=" ">

     
        <div>
          <h1 className="text-3xl font-bold text-white text-center">
            KeenKeeper
          </h1>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Stay connected with your friends and never lose touch again.
          </p>
        </div>

      </div>

      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} KeenKeeper. All rights reserved.
      </div>

    </footer>
  );
}