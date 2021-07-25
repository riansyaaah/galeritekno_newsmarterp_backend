let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let passport = require('passport');
let helmet = require('helmet');
let fs = require('fs');
let https = require('https');
let smartErp = require('./routes/smartErpRoute');

//declare express
let app = express();

//declare middleware for express
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: 'SAMEORIGIN' }))
app.use(cors());
app.use(express.json());
app.use(smartErp);
require("./routes/AuthRoutes")(app);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to prom application." });
});

//declare customs middleware
require('dotenv').config();

//declare PORT
const PORT = process.env.PORT || 8001;

//create http server using express
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})

