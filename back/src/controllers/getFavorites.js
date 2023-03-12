const { Favorito } = require('../DB_connection');

const getFavorites = async (req, res) => {
    try {
        const favorites = await Favorito.findAll();
        if(favorites.length === 0) return res.status(404).json({message: "no found"})
        return res.status(200).json(favorites)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
    
}

module.exports = getFavorites;