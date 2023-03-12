const {Character} = require("../DB_connection")

const getCharById = async (req, res) => {
    const {id} = req.params;
    try{
        const char = await Character.findByPk(id)
        if(!char) return res.status(404).json({message: "Personaje no encontrado"})
        return res.status(200).json(char)
    }
    catch(error){
        res.status(500).json({mesagge: error.message})
    }
}

module.exports = getCharById;