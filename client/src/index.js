import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import session from 'express-session'
import bcrypt from 'bcrypt'
import path from 'path'


const saltRounds = 10;
const http = require('http');
const PORT = require('PORT');
const psychopg2 = require('psychopg2');
const __dirname = path.resolve(); 
const server = http.createServer(process.env.PORT || 8000);

server.listen(process.env.PORT || 8000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [PORT],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.get('/*', (req, res) => {
  let url = path.join(__dirname, '../client/build', 'index.html');
  if (!url.startsWith('/app/'))
    url = url.substring(1);
  res.sendFile(url);
});

const db = psychopg2.createConnection({
  user: "rpojgsgfhigprq",
  host: "ec2-52-70-107-254.compute-1.amazonaws.com",
  password: "3e74d2ed51b8ad75dadd84b7404ac6761f19396439f75c48c4921cf97e4b2b88",
  database: "d1aldo6rvck7l1",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const access = req.body.access;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (username, password, email, access) VALUES (?,?,?,?)",
      [username, hash , email , access],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  var loggedIn = req.body.loggedIn;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].pass, (error, response) => {
          if (response) {

            req.session.user = result;
            console.log(req.session.user);
            res.send(req.session.user.username);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "build", "index.html"));
  });
}
server.listen(process.env.PORT || 5000)
