const express = require('express');
const { MongoClient } = require("mongodb");
const app = express();
const recordRoutes = express.Router();
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://karthickraja:Ben123456789@cluster0.h7hwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

app.get('/api/customer/list', (req, res) => {
  async function run() {
    try {
      await client.connect();
      const database = client.db('Restarents');
      const movies = database.collection('customers');
      // Query for a movie that has the title 'Back to the Future'
      // const query = { Username: 'Username' };
      const movie = await movies.find({}).toArray()
      res.send(movie);
      // console.log(movie)
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
});
app.post('/api/customer/new', (req, res) => {
  async function run() {
    try {
      await client.connect();
      const database = client.db("Restarents");
      const haiku = database.collection("customers");
      // create a document to insert
      const doc = {
        Username: req.Username,
        Password: req.Password,
        Email: req.Email,
        Phonenumber: req.Phonenumber,
        CreatedOn: req.Phonenumber,
        CreatedBy: req.CreatedBy
      }
      const result = await haiku.insertOne(doc);
      res.send({statusCode:200,message : `A document was inserted with the _id: ${result.insertedId}`});
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});



app.listen(4000, () => console.log("Server Running"))




// const express = require('express');
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
// const { MongoClient } = require("mongodb");
// const mongoose = require('mongoose');
// const app = express();
// dotenv.config();



// mongoose.connect("mongodb+srv://karthickraja:Ben123456789@cluster0.h7hwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true },
//     ()=>console.log("Connected to DB"));

// // app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))


// const uri = "mongodb+srv://karthickraja:Ben123456789@cluster0.h7hwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const client = new MongoClient(uri);


// const database = client.db('sample_mflix');
//     const movies = database.collection('comments');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = {name:"Mercedes Tyler"};
//     const movie =  movies.findOne(query);
//     console.log(movie);

// app.listen(3005,()=> console.log("Server Running"))




// var express = require('express');
// var bodyParser = require('body-parser');
// var mongo = require('mongodb');
// var monk = require('monk');
// const router = express.Router();
// const app = express();
// var db = monk("mongodb+srv://karthickraja:Ben123456789@cluster0.h7hwq.mongodb.net/Restarents?retryWrites=true&w=majority",);

// app.post('/adduser', function(req, res) {

//     var Username = req.body.Username;
//     var Password = req.body.Password;
//     var Email = req.body.Email;
//     var Phonenumber = req.body.Phonenumber;
//     var CreatedOn = req.body.CreatedOn;
//     var CreatedBy = req.body.CreatedBy;

//     var collection = db.get('customers');

//     collection.insert({

//         Username: Username,
//         Password: Password,
//         Email:Email,
//         Phonenumber:Phonenumber,
//         CreatedOn:CreatedOn,
//         CreatedBy:CreatedBy
//     }, function (err, doc) {
//         if (err) {
//             res.send("There was a problem adding the information to the database.");
//         }
//         else {
//             res.json(req.body); // <- here you could return the new object instead.
//             // res.json(doc);
//         }
//     });
// });


// app.listen(4000, () => console.log("Server Running"))