import { Card, Col, Button } from 'antd';



export function FoodBox(props) {
  
  const {name, calories, image, servings, deleteFunc, attRenderFunc, allFoods} = props;

  function handleDelete() {
      deleteFunc((prevState) => {
        return prevState.filter((currentElement) => {
          return currentElement.name !== name;
        })
      })
  }

  attRenderFunc(allFoods)



  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories:{calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="primary" onClick={handleDelete}> Delete </Button>
      </Card>
    </Col>
  );
}

