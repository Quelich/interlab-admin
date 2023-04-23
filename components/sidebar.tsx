import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineTicket } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import theme from "../data/theme";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const dasboardMenuItems = [
    { name: "Home", link: "/", icon: AiFillHome },
    { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "Customers", link: "/customers", icon: BsPeople, margin: true },
    { name: "Tickets", link: "/", icon: HiOutlineTicket },
    { name: "Alarms", link: "/", icon: RiSettings4Line },
    { name: "Settings", link: "/", icon: RiSettings4Line },
    { name: "API", link: "/api/v1/hello", icon: RiSettings4Line },
  ];

  return (
    <>
      <div
        className={`bg-[#16181A] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-center">Interlab</div>
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {dasboardMenuItems?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-2"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold"></div>
    </>
  );
}
