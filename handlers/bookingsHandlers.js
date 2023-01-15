const moment = require( "moment" );
const { MongoClient } = require( "mongodb" );
require( "dotenv" ).config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const dbName = "panoramic-hotel";

const { sendResponse } = require( "./helperFunctions" );
//this function create api for importing all bookings from mongoDB database
const getBookings = async ( req, res ) => {
  const client = new MongoClient( MONGO_URI, options );
  try {
    await client.connect();
    const db = client.db( dbName );

    const bookings = await db.collection( "bookings" ).find().toArray();

    bookings
      ? sendResponse( res, 200, bookings, "Bookings are retrieved from database" )
      : sendResponse( res, 404, null, "Bookings are not found" );
  } catch ( error ) {
    sendResponse( res, 500, null, "Server Error" );
  }
  client.close();
};
//this function enables you to fetch a single booking based on id
const getBooking = async ( req, res ) => {
  const client = new MongoClient( MONGO_URI, options );

  try {
    await client.connect();
    const db = client.db( dbName );

    const _id = req.params.id;

    const booking = await db.collection( "bookings" ).findOne( { _id } );
    booking
      ? sendResponse( res, 200, booking, `A booking was found, id : ${ _id }` )
      : sendResponse( res, 404, null, `A booking was not found, id : ${ _id }` );
  } catch ( error ) {
    sendResponse( res, 500, null, "Server Error" );
  }
  client.close();
};
//this function creates api functionality for adding a new booking to database
const addNewBooking = async ( req, res ) => {
  const client = new MongoClient( MONGO_URI, options );
  const startDate = moment( req.body.checkInDate );
  const endDate = moment( req.body.checkOutDate );
  let days = endDate.diff( startDate, "days" );
  try {
    await client.connect();
    const db = client.db( dbName );

    let booking = {
      _id: req.body._id,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      numberOfPeople: req.body.numberOfPeople,
      checkInDate: req.body.checkInDate,
      checkOutDate: req.body.checkOutDate,
    };
    if ( parseInt( req.body.numberOfPeople ) <= 3 && days <= 3 ) {
      await db.collection( "bookings" ).insertOne( booking );
      sendResponse( res, 201, booking, "A booking was created" );
    }
    else {
      sendResponse( res, 201, booking, "Each booking allows up to 3 people for up to 3 days" );
    }
  } catch ( error ) {
    sendResponse( res, 500, null, "Server Error" );
  }
  client.close();
};
//this function enables you to create a new booking and save it into mongoDB database
const updateBooking = async ( req, res ) => {
  const client = new MongoClient( MONGO_URI, options );

  try {
    await client.connect();
    const db = client.db( dbName );

    const _id = req.body._id;

    const result = await db.collection( "bookings" ).findOneAndUpdate(
      { _id },
      {
        $set: req.body,
      }
    );
    result.value
      ? sendResponse( res, 200, req.body, `A booking was found and updated, id : ${ _id }` )
      : sendResponse( res, 404, result.value, `A booking was not found, id : ${ _id } ` );
  } catch ( error ) {
    sendResponse( res, 500, null, "Server Error" );
  }
  client.close();
};
//this function helps you to delete a single booking based on its id in mongoDB
const deleteBooking = async ( req, res ) => {
  const client = new MongoClient( MONGO_URI, options );

  try {
    await client.connect();
    const db = client.db( dbName );

    const _id = req.params.id;

    const result = await db.collection( "bookings" ).findOneAndDelete( { _id } );
    result.value
      ? sendResponse( res, 200, result.value, `A booking was found and deleted, id : ${ _id }` )
      : sendResponse(
        res,
        404,
        result.value,
        `A booking was not found, id : ${ _id }`
      );
  } catch ( error ) {
    sendResponse( res, 500, null, "Server Error" );
  }
  client.close();
};

module.exports = {
  getBookings,
  getBooking,
  addNewBooking,
  updateBooking,
  deleteBooking,
};
