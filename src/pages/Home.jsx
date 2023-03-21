import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
const Home = () => {
  // const arr = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  };
  useEffect(() => {
    apiGet();
    console.log(data);
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {data && data.map((prd, i) => <ProductCard key={i} prd={prd} />)}
    </div>
  );
};

export default Home;
