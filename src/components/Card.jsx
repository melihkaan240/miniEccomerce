import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { drawerOff } from "../Redux/drawer/drawer.slice";
import { decrement } from "../Redux/productLength/lengthSlice";
const Card = () => {
  const dispatch = useDispatch();

  const selectID = useSelector((state) => state.basket.basket);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const myData = JSON.parse(localStorage.getItem("myData")) || [];
    setProductList(myData);
  }, []);

  useEffect(() => {
    const apiGet = () => {
      fetch(`https://fakestoreapi.com/products/${selectID}`)
        .then((res) => res.json())
        .then((json) => {
          setProductList((productList) => [...productList, json]);
        });
    };
    apiGet();
  }, [selectID]);
  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(productList));
  }, [productList]);

  const handleDelete = (id) => {
    const newData = productList.filter((product) => product.id !== id);
    setProductList(newData);
    localStorage.setItem("myData", JSON.stringify(newData));
  };

  return (
    <div className="w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3">
      <div className="flex items-center h-20 justify-between">
        <h1>SEPETİM:</h1>
        <AiOutlineClose
          onClick={() => dispatch(drawerOff())}
          size={25}
          className="cursor-pointer"
        />
      </div>
      {productList.map((i, index) => (
        <div
          key={index}
          className="h-28 flex items-center justify-between border-b p-4 mt-5 "
        >
          <img className="h-24 " src="" alt="" />
          <div className="w-44">
            <div className="font-bold text-sm">{i.id}</div>
            <div className="opecity-70 text-xs">{i.price}</div>
          </div>
          <div className="font-bold text-lg">199.99TL</div>
          <button
            onClick={() => {
              handleDelete(i.id);
              dispatch(decrement());
            }}
            className="bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer"
          >
            SİL
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
