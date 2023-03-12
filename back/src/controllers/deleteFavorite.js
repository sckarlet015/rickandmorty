const { Favorite } = require('../DB_connection');

const deleteFavorite = async (req, res) => {
    try{
        const {id} = req.params;
        const favoritoDelete = await Favorite.findByPk(id);
        if(!favoritoDelete) return res.status(400).json({message: `There is not character with id ${id}`})
        favoritoDelete.destroy();
        return res.status(200).json({message: "Eliminado de favoritos"})
    }
    catch(error){
        return res.status(404).json({message: error.message})
    }
}

module.exports = deleteFavorite;

