const express    = require("express");        // initilizes express into my app
const app        = express();
const bodyParser = require("body-parser");
const cors       = require("cors");
const path       = require("path");
const mongoose   = require("mongoose")
const port       = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

//mongoose
mongoose.connect("mongodb+srv://neokage:<password>@cluster0.2xihgvj.mongodb.net/moviesDB?retryWrites=true&w=majority");

//data schema and model
const movieSchema = {
    title: String,
    genre: String,
    year : String,
}

const Movie = mongoose.model("Movie", movieSchema);

//API routes
app.get('/movies', function(req, res) {
    Movie.find().then(movies => res.json(movies));
})


app.listen(port,function() {
    console.log("express is acivated");
})
