const { Favorite } = require ("../DB_connection");

const postFav = async (req, req) => {

    const {name, origin, status, image, species, gender } = req.body;

    if (!name || !origin || !status || !image || !species || !gender) {
        return res.status(401).send("Missing data");
        }
        
        try {
        const newFav = await Favorite.findOrCreate({
        where: { name, origin, status, image, species, gender },
        });
    } catch (error) {
        res.status(500).send(error.message);
        }
        }

module.exports = { postFav };