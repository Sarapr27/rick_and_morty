const axios = require("axios");

const KEY = "679d35fad146.652aa97041e049ba56fe"
const URL = "https://be-a-rym.up.railway.app/api"

const succesH = (response, res) => {
    const { id, image, name, gender, species } = response.data;

    res.writeHead(200, { "Content-type": "application/json"});
    res.end(JSON.stringify({id, name, gender, species, image}))
};

const errorH = (error, res) => {
res.writeHead(500, {"Content-type": "text/plain"})
res.end(error.message)
};

const getCharById = (res, id) => {
    axios.get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => succesH(response, res))
    .catch ((error) => errorH(error, res));

    };

module.exports = getCharById;