import foodsArr from './foods.json';
import { Row } from "antd";
import { FoodBox} from "./components/interation3/interation3"
import { useState } from "react";
import {AddFoodForm} from "./components/interation4/interation4"
import { Search } from "./components/interation5"
function App() {
 
const [foods, setFoods] = useState(foodsArr);
const [filtredFood, setFiltredFoods] = useState(foods)
 
  return (
    <>
      <h1>Food List</h1>
      <div className="foodList">
      {filtredFood.map((currentElement) => {

      return <div>
       <p>{currentElement.name}</p>
       <img src={currentElement.image} alt="foods image" width={100}/>

      </div>
      })}
      </div>
    


      <AddFoodForm addFoods = {setFoods}/>


      <Search filtredFunction = {setFiltredFoods} allFoods = {foods} />
   
      <Row style={{ width: '100%', justifyContent: 'center' }}>
       
        {foods.map((currentElement) => {
          return( 
            <FoodBox 
            name={currentElement.name} 
          calories= {currentElement.calories}
          image = {currentElement.image} 
            servings = {currentElement.servings}
            deleteFunc={setFoods}
            attRenderFunc={setFiltredFoods}
            allFoods={foods}
          />
          )
        } )}
      </Row>
     
    </>
  );
}

export default App;
