const { Character } = require("../DB_connection");
const axios = require('axios');

const getCharById = async (req, res) => {
    const { id } = req.params;
    try {
        let char = await Character.findByPk(id);
        if (!char) {
            const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`);
            char = await Character.create({
                id: data.id,
                name: data.name,
                status: data.status,
                species: data.species,
                gender: data.gender,
                origin: data.origin.name,
                location: data.location.name,
                image: data.image
            });
        }
        return res.status(200).json(char);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = getCharById;