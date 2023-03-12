const {Character} = require("../DB_connection")

const getCharDetail = async (req, res) => {
    
    try{
        const {id} = req.params;
        const char = await Character.findByPk(id);
        if(!char) return res.status(400).json({message: "Personaje no encontrado"})
        return res.status(200).json(char)
        }
    catch(error){
        return res.status(500).json({message: error.message})
    }
}

module.exports = getCharDetail;