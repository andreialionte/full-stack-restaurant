
"use client"
import React, { useEffect, useState } from 'react';

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/foods')
      .then((response) => response.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error('Error fetching foods:', error));
  }, []);

  return (
    <div id="menu" className="bg-stone-950 h-[100vh]">
      <h1>Food Items</h1>
      <ul>
        <div className="grid grid-cols-4 gap-5 mr-16 ml-8 mb-[5rem] ">
        {foods.map((food, index) => (
  <li key={food._id} className="shadow-sm bg-stone-900 flex justify-center items-center">  
  <div className="h-[530px] w-[500px] flex flex-col items-center text-center justify-center">
    <img src={food.photo} alt={food.name} className="h-[20rem] w-[20rem] object-cover mt-[1.2rem]" />
    <h2 className="text-white font-extrabold text-2xl ">{food.name}</h2>
    <p className="text-white">{food.ingredients}</p> 
    <div className="mt-auto mb-[3rem] ">
      <button className="bg-yellow-400 h-[3rem] w-[5rem] rounded-xl active:bg-yellow-200">{food.price}</button>
    </div>
  </div>
</li>
        ))}
        </div>
      </ul>
    </div>
  );
};

export default FoodList;