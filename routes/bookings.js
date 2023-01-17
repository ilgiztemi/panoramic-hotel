const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/bookings").get(function (req, res) {
 let db_connect = dbo.getDb("panoramic-hotel");
 db_connect
   .collection("bookings")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
recordRoutes.route("/bookings/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myQuery = { _id: req.params.id };
 db_connect
   .collection("bookings")
   .findOne(myQuery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new record.
recordRoutes.route("/bookings/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myObj = {
  _id: req.body._id,
  email: req.body.email,
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  numberOfPeople: req.body.numberOfPeople,
  checkInDate: req.body.checkInDate,
  checkOutDate: req.body.checkOutDate,
 };
 db_connect.collection("bookings").insertOne(myObj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
recordRoutes.route("/bookings/:id").put(function (req, response) {
 let db_connect = dbo.getDb();
 let myQuery = { _id: req.params.id };
 let newValues = {
   $set: {
    _id: req.body._id,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    numberOfPeople: req.body.numberOfPeople,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate,
   },
 };
 db_connect
   .collection("bookings")
   .updateOne(myQuery, newValues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// This section will help you delete a record
recordRoutes.route("/bookings/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myQuery = { _id: req.params.id };
 db_connect.collection("bookings").deleteOne(myQuery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = recordRoutes;