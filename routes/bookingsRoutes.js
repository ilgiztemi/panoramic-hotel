const router = require( "express" ).Router();
const {
  getBookings,
  getBooking,
  addNewBooking,
  updateBooking,
  deleteBooking,
} = require( "../handlers/bookingsHandlers" );

router.get( "/bookings", ( req, res ) => getBookings( req, res ) );

router.get( "/booking/:id", ( req, res ) => getBooking( req, res ) );

router.post( "/booking/add", ( req, res ) => addNewBooking( req, res ) );

router.put( "/booking/:id", ( req, res ) => updateBooking( req, res ) );

router.delete( "/booking/:id", ( req, res ) => deleteBooking( req, res ) );

module.exports = router;
