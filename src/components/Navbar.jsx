import React from "react";
import { BsLightbulb, BsBasketFill, BsMoon } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawerOn } from "../Redux/drawer/drawer.slice";
const Navbar = () => {
  const dispatch = useDispatch();

  const [color, setColor] = useState(false);

  useEffect(() => {
    const root = document.getElementById("root");
    if (color) {
      root.style.backgroundColor = "black";

      root.style.color = "gray";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
  }, [color]);

  return (
    <div className="flex items-center justify-between px-3 h-28">
      <button onClick={() => (window.location = `/`)}>
        <div className="text-2xl font-bold tracking-wider">LOGO</div>
      </button>
      <div className="flex justify-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-slate-400 p-3 outline-none rounded-lg"
        />

        <div onClick={() => setColor(!color)}>
          {color ? (
            <BsLightbulb size={25} className="cursor-pointer" />
          ) : (
            <BsMoon size={25} className="cursor-pointer" />
          )}
        </div>
        <div className="relative">
          <BsBasketFill
            size={25}
            className="cursor-pointer"
            onClick={() => dispatch(drawerOn())}
          />

          <span className=" absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-small">
            {3}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
