const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(URL + id);
    const character = {
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
    };
    res.status(200).json(character);
  } catch (error) {
    if (error.response.status === 404) {
      res.status(404).send("Not fount");
    } else {
      res.status(500).json({ messagge: error.messagge });
    }
  }
};

module.exports = getCharById;
