const router = require("express").Router();
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zd8xq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const foodCollection = client.db(`${process.env.DB_NAME}`).collection("food");
  const cartCollection = client.db(`${process.env.DB_NAME}`).collection("cart");

  // add  foood from admin panel with form post  data
  router.post("/addFood", (req, res) => {
    foodCollection.insertOne(req.body).then((result) => {
      res.send(result.insertedCount > 0);
    });
  });

  // show  all foods on ui with
  router.get("/allFoods", (req, res) => {
    foodCollection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });

  // search food by name/word
  //localhost:4000/allFoods/search?name=${searchValue}
  // router.get("/showFoods", (req, res) => {
  //   console.log(req.query);
  //   const searchValue = req.query.search;
  //   foodCollection.find({ mealName: searchValue }).toArray((err, document) => {
  //     res.send(document);
  //   });
  // });

  // router.post("/addCart", (req, res) => {
  //   console.log(req.body);
  //   cartCollection.insertOne(req.body).then((result) => {
  //     // console.log(result);
  //     res.send(result.insertedCount > 0);
  //   });
  // });

  // router.get("/showCart", (req, res) => {
    
  //   cartCollection.find({}).toArray((err, documents) => {
  //     res.send(documents);
  //   });
  // });





});

module.exports = router;
