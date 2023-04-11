require("dotenv").config();
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const { conn } = require('./DB_connection');

const PORT = process.env.PORT || 3001;

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use("/", router);

conn.sync().then ( () => {
  console.log("Gracias Carlitos")
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
})







// const http = require("http");
// const getCharById = require ("./controllers/getCharById");
// const getCharDetail = require ("./controllers/getCharDetail");

// http
//     .createServer((req, res) => {
//         res.setHeader('Access-Control-Allow-Origin', '*');

//         if (req.url.includes("onsearch")) {
//             const id =req.url.split("/").at(-1);
//             getCharById(res, Number(id));
        
//         }
//         if (req.url.includes("detail")) {
//             //console.log(req.url);
//             const id = req.url.split("/").slice(-1);
//             //console.log(id);
//             getCharDetail(res, Number(id));
//             //console.log(res);
        
//         }
//     })
      
//     .listen(3001, "localhost");