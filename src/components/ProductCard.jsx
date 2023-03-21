import React from "react";
import { useDispatch } from "react-redux";
import { setMyData } from "../Redux/basket/basketSlice";
import { drawerOn } from "../Redux/drawer/drawer.slice";
import { decrement, increment } from "../Redux/productLength/lengthSlice";
import AddButton from "./AddButton";
const ProductCard = ({ prd }) => {
  const dispatch = useDispatch();

  return (
    <div className="hover:border-indigo-600 w-1/5 h-[350px] border rounded-lg m-4 flex flex-col items-center p-1 space-y-2">
      <img
        onClick={() => (window.location = `Detail/${prd.id}`)}
        className="h-32 object-cover"
        src={prd?.image}
      ></img>
      <div className="font-bold h-16 text-center mt-2">
        {(prd?.title).substring(0, 25)}
      </div>
      <div className="text-center opacity-70 text-small">
        {(prd?.description).substring(0, 45)}...
      </div>
      <div className="text-center font-bold text-lg ">{prd?.price} TL</div>
      {/* <button
        onClick={() => {
          dispatch(drawerOn());
          dispatch(setMyData(prd.id));
          dispatch(increment());
        }}
        className="bg-indigo-600 w-full p-2 rounded-lg text-white"
      >
        Sepete Ekle
      </button> */}
      <AddButton id={prd.id} />
    </div>
  );
};

export default ProductCard;
