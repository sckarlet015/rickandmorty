const {Character} = require("../DB_connection")
const getAllChars = async (req, res) => {
    try {
      const characters = await Character.findAll();
      console.log('characters encontrados con éxito:', characters.map(p => p.toJSON()));
      res.status(200).json(characters);
    } catch (error) {
      console.error('Error al buscar characters:', error);
      res.status(500).json({ message: 'Error al buscar characters.' });
    }
  };

  module.exports = getAllChars;