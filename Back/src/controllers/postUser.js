const { User } = require ("../DB_connection");

const postUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        if(!email || !password) {
            res.status(400).send("Data Incomplete")
        }else{
            const [newUser, created] = await User.findOrCreate({
                where: { email: email },
                defaults: { email: email, password: password },
            });
            if(created){
                res.status(200).json(newUser);
            }else{
                throw Error ("El usuario ya existe")
            }
        }
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = postUser;