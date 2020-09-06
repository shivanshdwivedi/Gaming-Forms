const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const connectDB = require("./config/db");

//CONNECT TO DATABASE
connectDB();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// app.use(cookieParser("secret"));

app.use(
  session({ secret: "mysecret", resave: false, saveUninitialized: true })
);

app.use(flash());

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

app.get("/", (req, res) => {
  res.redirect("https://bvpcsi.com/glitch.html");
});

app.use("/valorant", require("./routes/valorant"));
app.use("/minecraft", require("./routes/minecraft"));
app.use("/chess", require("./routes/chess"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
