import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { drawerOn } from "../Redux/drawer/drawer.slice";
import { setMyData } from "../Redux/basket/basketSlice";
import { increment } from "../Redux/productLength/lengthSlice";
import AddButton from "../components/AddButton";
const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const apiGet = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  useEffect(() => {
    apiGet();
  });

  // useEffect(() => {
  //   dispatch(setMyData(id));
  // }, [id]);

  const increment = (stock) => {
    if (count <= stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="w-full flex items-center justify-center space-x-5">
      <img className="w-1/3" src={product?.image}></img>
      <div className="w-2/3 space-y-5">
        <div className="font-bold text-xl">{product?.title}</div>
        <div className="opacity-70">{product?.description}</div>
        <div className="opacity-70">Category: {product?.category}</div>
        <div className="opacity-70">
          Rate: {product?.rating?.rate}- Stock: Rate: {product?.rating?.rate}
        </div>
        <div className="font-bold text-xl">Fiyat: {product?.price} TL</div>

        <div className="flex items-center space-x-4">
          <CgMathMinus
            onClick={() => decrement()}
            className="cursor-pointer border rounded-full p-1"
            size={30}
          />
          <span className="text-2xl">{count}</span>
          <CgMathPlus
            onClick={() => increment(product?.rating?.rate)}
            className="cursor-pointer border rounded-full p-1"
            size={30}
          />
        </div>
        {/* <button
          onClick={() => {
            dispatch(drawerOn());
            dispatch(increment());
          }}
          className="p-3 w-full text-center rounded-lg text-white text-lg bg-indigo-600"
        >
          Sepete Ekle
        </button> */}
        <AddButton id={id} />
      </div>
    </div>
  );
};

export default Detail;
