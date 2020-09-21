const express = require("express");
const mongoose = require("mongoose");

const logger = require("morgan")

const PORT = process.env.PORT || 8080

const app = express();

// Logger
app.use(logger("dev"))

require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@unit-17-workout-tracker.4760h.mongodb.net/Workout_DB?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('were connected!')
});
require("./routes/html")(app)
require("./routes/api")(app);


app.listen(PORT, () => console.log(`serever started on http://localhost:${PORT}`));
