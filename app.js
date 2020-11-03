const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

//DB Config
const db = require("./config/keys").MongoURI;
mongoose.set('useFindAndModify', false);

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser:true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err));

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('views'));
//app.set('views', '/views');

//JSON
app.use(express.json());

//Body Parser
app.use(express.urlencoded({ extended:false }));

//Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error)=>{
    console.log("Server running...");
})