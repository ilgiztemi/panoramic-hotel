

const request = require('supertest')
const app = require('../server');

describe('Add a new booking', () => {
  it('should create a new booking', async () => {
    const res = await request(app)
      .post('/booking/add')
      .send({
        "_id":"ioioioioioiiiiii",
        "email": "oooooooooooooo",
        "firstName":"first name",
        "lastName":"last name",
        "numberOfPeople":"number of people",
        "checkInDate":"2023-01-15",
        "checkOutDate":"2023-01-20"
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('booking');
  });

//   it('should fetch a single booking', async () => {
//     const bookingId = "dawdwadawd";
//     const res = await request(app).get(`/booking/${bookingId}`);
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty('booking');
//   });

//   it('should fetch all bookings', async () => {
//     const res = await request(app).get('/bookings');
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty('bookings');
//     expect(res.body).toHaveLength(7);
//   });

//   it('should update a booking', async () => {
//     const res = await request(app)
//       .put('/booking/dawdwadawd')
//       .send({
//         "_id" : "dawdwadawd",
//         "firstName" : "first name",
//         "checkOutDate" : "check out date",
//         "numberOfPeople" : "number of people",
//         "email" : "pppppppppppppooooooooo",
//         "checkInDate" : "check in date",
//         "lastName" : "last name"
//       });

//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty('booking');
//     expect(res.body.post).toHaveProperty('email', 'updated email');
//   });

//   it('should return status code 500 if db constraint is violated', async () => {
//     const res = await request(app)
//       .post('/bookings')
//       .send({
//         title: 'test is cool',
//         content: 'Internal Server Error',
//       });
//     expect(res.statusCode).toEqual(500);
//     expect(res.body).toHaveProperty('error');
//   });

//   it('should delete a booking', async () => {
//     const res = await request(app).delete('/booking/lklklklklklklklkl');
//     expect(res.statusCode).toEqual(204);
//   });

//   it('should respond with status code 404 if resource is not found', async () => {
//     const bookingId = lklklklklklklklkl1;
//     const res = await request(app).get(`/api/posts/${bookingId}`);
//     expect(res.statusCode).toEqual(404);
//   });
});