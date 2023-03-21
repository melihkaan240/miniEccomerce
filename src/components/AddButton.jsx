import React from "react";
import { useDispatch } from "react-redux";
import { setMyData } from "../Redux/basket/basketSlice";
import { drawerOn } from "../Redux/drawer/drawer.slice";
const AddButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(drawerOn());
        dispatch(setMyData(props.id));
      }}
      className="bg-indigo-600 w-full p-2 rounded-lg text-white"
    >
      Sepete Ekle
    </button>
  );
};

export default AddButton;
