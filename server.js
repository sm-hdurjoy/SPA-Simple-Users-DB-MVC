const express = require("express");
const app = express();
const cors = require("cors");
let ejs = require('ejs');
const dotenv = require("dotenv");
dotenv.config();

const dbService = require('./dbService');
const getAllData = require('./controller/getUsers')

const PORT = 9000

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/css", express.static("./views/css"))
app.use("/js", express.static("./views/js"))

app.get('/', function(req, res) {
  getAllData().then(data => {
    res.render('pages/index', {data})
  })
});

// app.get('/', function(req, res) {
//   searchUser().then(data => {
//     console.log(data);
//   })
// });

app.listen(PORT, () => console.log("App is running..."));
