const axios = require("axios");
const { KEY, URL } = process.env;

const getCharDetail = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => {
      const { id, name, species, image, gender, origin } = response.data;
      res.status(200).json({ id, name, species, image, gender, origin });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharDetail;

// const succesH = (response, res) => {
//     console.log(response.data);
//     const { image, name, gender, species, origin } = response.data;
    
//     res.writeHead(200, { "Content-type": "application/json"});
//     res.end(JSON.stringify({name, gender, species, image, origin}))
// };

// const errorH = (error, res) => {
// res.writeHead(500, {"Content-type": "text/plain"})
// res.end(error.message)
// };

// const getCharDetail = (res, id) => {
//     axios.get(`${URL}/character/${id}?key=${KEY}`)
//     .then((response) => succesH(response, res))
//     .catch ((error) => errorH(error, res));

//     };

module.exports = getCharDetail;

// const axios = require('axios')
// const getCharDetail = (res,id) =>{
//     const KEY = "679d35fad146.652aa97041e049ba56fe"

//     axios(`https://be-a-rym.up.railway.app/api/character/${id}?key=${KEY}`)
//     .then(results => results.data)
//     .then(
//         (data)=>{
//      let obj = {
//                 image: data.image,
//                 name: data.name,
//                 gender: data.gender,
//                 status: data.status,
//                 origin: data.origin?.name,
//                 species: data.species
//                 } 
//                 console.log(obj);
//         res.writeHead(200, {"Content-Type":"application/json"})
//         res.end(JSON.stringify(obj))
        
//     })


//         }

// module.exports = getCharDetail;