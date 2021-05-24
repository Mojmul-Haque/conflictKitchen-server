const router = require("express").Router();
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zd8xq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    const foodCollection = client
      .db(`${process.env.DB_NAME}`)
      .collection("food");

    const orderCollection = client
      .db(`${process.env.DB_NAME}`)
      .collection("order");

    const reviewCollection = client
      .db(`${process.env.DB_NAME}`)
      .collection("reviews");

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

    // Checkout data
    router.post("/addOrder", (req, res) => {
      orderCollection.insertOne(req.body).then((result) => {
        console.log(result.insertedCount > 0);
        res.send(result.insertedCount > 0);
      });
    });

    // get all order and show to admin dashboard

    router.get("/allOrder", (req, res) => {
      orderCollection.find({}).toArray((err, documents) => {
        res.send(documents);
      });
    });

    // addReview from users
    router.post("/addReview", (req, res) => {
      reviewCollection.insertOne(req.body).then((result) => {
        console.log(result);
        res.send(result.insertedCount > 0);
      });
    });
  }
});

module.exports = router;
