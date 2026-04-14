import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" mx-auto container flex justify-between p-4 shadow bg-white items-center ">
      <img src="/public/assets/logo.png" alt="" />
      <div className="flex gap-6 items-center justify-center ">
        <NavLink to="/" className={({isActive}) => isActive ? "mt-4 px-4 py-2 bg-[#244D3F] text-white rounded" : ""}>
          Home
        </NavLink>

        <NavLink to="/timeline" className={({isActive}) => isActive ? "mt-4 px-4 py-2 bg-[#244D3F] text-white rounded" : ""}>
          Timeline
        </NavLink>

        <NavLink to="/stats" className={({isActive}) => isActive ? "mt-4 px-4 py-2 bg-[#244D3F] text-white rounded" : ""}>
          Stats
        </NavLink>
      </div>
    </div>
  );
}