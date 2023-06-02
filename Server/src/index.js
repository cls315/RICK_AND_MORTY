const http = require("http");
//const data = require("./utils/data");
const getCharById = require("./controllers/getCharById");
const PORT = 3001;
http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;
    if (url.includes("/rickandmorty/character")) {
      const id = url.split("/").at(-1);
      //const character = data.find((character) => character.id === Number(id));
      return getCharById(res, id);
      //res.writeHead(200, { "Content-Type": "application/json" });
      //res.end(JSON.stringify(character));
    }
  })
  .listen(3001, () => {
    console.log(`Servidor escuchado en el puerto ${PORT}`);
  });
