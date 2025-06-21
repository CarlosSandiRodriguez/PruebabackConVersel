const express = require('express')
const app = express()
const cors = require('cors');


app.use(express.json())



app.use(express.urlencoded({extended:true}))

const login = require("../src/routes/teacher.routes")

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5175'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: false,
}));

// Ruta base para utilizar el servicio


app.get("/", (req, res) => res.send("Express on Vercel"));


app.use("/api/teacher", login);

 
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;

