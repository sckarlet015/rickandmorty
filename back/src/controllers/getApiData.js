const axios = require("axios");
const {Character} = require("../DB_connection.js")

const URL = "https://rickandmortyapi.com/api/character/"

const getApiData = async (req, res) => {
    try {
        let array = await axios.get("https://rickandmortyapi.com/api/character/")
        const characters = array.data.results.slice(0, 100).map(char => ({
            id: char.id,
            name: char.name,
            status: char.status,
            species: char.species,
            gender: char.gender,
            origin: char.origin.name,
            location: char.location.name,
            image: char.image
        }))
        return characters;
    } catch (err) {
        return { error: err.mesagge }
    }
}

const saveApiData = async () => {
    try {
        const nuevoArray = await getApiData();
        let num = 0;
        for (const char of nuevoArray) {
            const [resultado, creado] = await Character.findOrCreate({
                where: { id: char.id },
                defaults: {
                    name: char.name,
                    status: char.status,
                    species: char.species,
                    gender: char.gender,
                    origin: char.origin,
                    location: char.location,
                    image: char.image
                }
            });
            if (creado) {
                num++;
            }
        }
        console.log(`Se han guardado ${num} personajes en la base de datos.`);
    } catch (err) {
        console.error('Error al guardar personajes:', err);
    }
}

module.exports = saveApiData;