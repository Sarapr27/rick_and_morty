const http = require("http");
const getCharById = require ("./controllers/getCharById");
const getCharDetail = require ("./controllers/getCharDetail");

http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');

        if (req.url.includes("onsearch")) {
            const id =req.url.split("/").at(-1);
            getCharById(res, Number(id));
        
        }
        if (req.url.includes("detail")) {
            //console.log(req.url);
            const id = req.url.split("/").slice(-1);
            //console.log(id);
            getCharDetail(res, Number(id));
            //console.log(res);
        
        }
    })
      
    .listen(3001, "localhost");