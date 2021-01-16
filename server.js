const express = require("express" );
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flush = require("connect-flash");

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

app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    cookie: {
      maxAge: 60000,
    },
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flush());

app.get("/", (req, res) => {
  res.redirect("https://bvpcsi.com/glitch.html");
});

app.use("/valorant", require("./routes/valorant"));
app.use("/minecraft", require("./routes/minecraft"));
app.use("/chess", require("./routes/chess"));
app.use("/cod", require("./routes/cod"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
