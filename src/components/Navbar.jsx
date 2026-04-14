import { CiHome, CiTimer } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" mx-auto container flex justify-between p-4 shadow bg-white items-center ">
      <img src="/public/assets/logo.png" alt="" />
        <div className="flex gap-6 items-center justify-center">

  <NavLink
    to="/"
    className={({ isActive }) =>
      `flex items-center gap-2 px-4 py-2 rounded transition
      ${
        isActive
          ? "bg-[#244D3F] text-white"
          : "text-gray-600 hover:text-[#244D3F]"
      }`
    }
  >
    <CiHome className="text-lg" />
    <span>Home</span>
  </NavLink>

  <NavLink
    to="/timeline"
    className={({ isActive }) =>
      `flex items-center gap-2 px-4 py-2 rounded transition
      ${
        isActive
          ? "bg-[#244D3F] text-white"
          : "text-gray-600 hover:text-[#244D3F]"
      }`
    }
  >
    <CiTimer className="text-lg" />
    <span>Timeline</span>
  </NavLink>

  <NavLink
    to="/stats"
    className={({ isActive }) =>
      `flex items-center gap-2 px-4 py-2 rounded transition
      ${
        isActive
          ? "bg-[#244D3F] text-white"
          : "text-gray-600 hover:text-[#244D3F]"
      }`
    }
  >
    <ImStatsDots className="text-lg" />
    <span>Stats</span>
  </NavLink>

</div>
    </div>
  );
}