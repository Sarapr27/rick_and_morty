const { User } = require("../DB_connection");

const login = async (req, res) => {

    const {email, password} = req.query;

    try{
        if (!email || !password)
        return res.status(400).send("Missing data");

        const usuario = await User.findOne({where:{email:email}});

        if(!usuario)
        return res.status(404).json({message:"User not found"});

        if(usuario.password !== password) return res.status(403).send("Wrong password")
        return res.status (200).json({acces:true})
    }
    catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = login;