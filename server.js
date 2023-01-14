const express = require( "express" );
const morgan = require( "morgan" );
const cors = require( "cors" );

const PORT = 8888;

express()
  .use(cors({    
    origin: ["http://localhost:3000"],
}))
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))
  .use(require("./routes/bookingsRoutes"))

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
