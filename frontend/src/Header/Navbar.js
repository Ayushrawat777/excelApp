import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ArrowRightStartOnRectangleIcon,
  ArrowLeftStartOnRectangleIcon,
  Square3Stack3DIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
const Navbar = () => {
  let naviagte = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    naviagte("/login");
  };

  return (
    <nav
      class="fixed w-full flex relative justify-between items-center mx-auto px-8 h-24"
      style={{
        position: "fixed",
        zIndex: "1",
        top: "0",
       background: "rgb(206 210 216)"
      }}
    >
      <div class="inline-flex">
        <Square3Stack3DIcon className="h-10 w-10 text-gray" /> 
      </div>

      <div class="flex-initial">
        <div class="flex justify-end items-center relative">
          <div class="flex mr-4 items-center">
            {!localStorage.getItem("token") ? (
              <form>
                <NavLink
                  className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
                  to={"/signup"}
                >
                  <div class="flex items-center relative cursor-pointer whitespace-nowrap">
                    <UserCircleIcon className="h-8 w-8 text-gray-900" />
                  </div>
                </NavLink>
                <NavLink
                  className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
                  to={"/login"}
                >
                  <div class="flex items-center relative cursor-pointer whitespace-nowrap">
                    <ArrowRightStartOnRectangleIcon className="h-8 w-8 text-gray-900" />
                  </div>
                </NavLink>
              </form>
            ) : (
              <>
                <NavLink
                  className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
                  to={"/"}
                >
                  <div class="flex items-center relative cursor-pointer whitespace-nowrap">
                    Home
                  </div>
                </NavLink>
                <NavLink
                  className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
                  to={"/all"}
                >
                  <div class="flex items-center relative cursor-pointer whitespace-nowrap">
                    Data
                  </div>
                </NavLink>
                <NavLink
                  className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
                  to={"/clients"}
                >
                  <div class="flex items-center relative cursor-pointer whitespace-nowrap">
                    Clients
                  </div>
                </NavLink>
                <button
                  className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
                  onClick={() => handleLogout()}
                >
                  <div class="flex items-center relative cursor-pointer whitespace-nowrap">
                    <ArrowLeftStartOnRectangleIcon className="h-8 w-8 text-gray-900" />
                  </div>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
