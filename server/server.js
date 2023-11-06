const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
const cors = require('cors'); 

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors()); 

app.post('/foods', async (req, res) => { //to post the items in database
  // const { name, photo, ingredients } = req.body;
  const foodItems = req.body;

  try {
    await client.connect();
    const collection = client.db('And').collection('food');

  const insertedFoodItems = await collection.insertMany(foodItems);
  res.json(insertedFoodItems.ops);

    // const result = await collection.insertOne(newFoodItem);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    await client.close();
  }
});

app.get('/foods', async (req, res) => { 
  try {
    await client.connect();
    const collection = client.db('And').collection('food');
    const foods = await collection.find({}).toArray();
    res.json(foods);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
