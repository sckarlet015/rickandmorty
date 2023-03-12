const { Favorite } = require('../DB_connection');

const postFavorite = async (req, res) => {
    try {
        const {id, name, status, species, location, gender, origin, image} = req.body;
        if(!id, name, status, species, location, gender, origin, image)
        return res.status(404).json({message: "Complete all filds"})
        const favorite = await Favorite.create({
            id,
            name,
            status,
            species,
            gender,
            origin,
            location, 
            image
        })
        return res.status(200).json(favorite)
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
}

module.exports = postFavorite;