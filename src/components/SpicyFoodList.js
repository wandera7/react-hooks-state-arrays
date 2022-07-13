import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    setFoods((prevValue)=>{
      return [...prevValue,newFood]
    })
  }
  function handleRemove(id){
    return setFoods((prevValue)=>{
      prevValue.filter((food,index)=>{
        return index !==id
      })
    })
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={handleRemove(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
