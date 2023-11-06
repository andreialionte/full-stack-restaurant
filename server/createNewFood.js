async function createNewFood() {
    const newFoodItem = [{
      name: 'Beef Burger',
      photo: 'https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9018.jpg?w=826&t=st=1699109041~exp=1699109641~hmac=960b463268cb5693c4d1a15e732a32eee168495579db851331cbb2f66a36fe43',
      ingredients: 'white roll, beef, cheddar, Mayonnaise, green salad, tomatoes, Onion, pickled cucumbers, ketchup',
    },
   {name: "Pizza Quattro Stagioni",
    photo: "https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg?w=826",
    ingredients: "SOS pizza, mozzarella, salami, mushrooms, ham, olives",
  },
  {
    name: "Pasta with shrimp",
    photo: "https://e7.pngegg.com/pngimages/822/65/png-clipart-pasta-pasta.png",
    ingredients: "pasta, shrimp, garlic, olive oil, butter, parmesan cheese, salt and pepper,"
  },
  {
    name: "Pizza Quattro Formaggi",
    photo: "https://w7.pngwing.com/pngs/88/578/png-transparent-sicilian-pizza-california-style-pizza-pizza-quattro-stagioni-quiche-pizza-food-recipe-cheese.png",
    ingredients: "pizza dough, pizza sauce, mozzarella, blue cheese, parmesan, emmental"
  }
  ];
  
    try {
      const response = await fetch('http://localhost:5000/foods', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFoodItem),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('New food item created:', data);
      } else {
        console.error('Error creating new food item:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error creating new food item:', error);
    }
  }
  
  createNewFood();
  