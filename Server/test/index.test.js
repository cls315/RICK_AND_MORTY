const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("GET /rickandmorty/character/:id", () => {
  it("Responde con status: 200", async () => {
    await agent.get("/rickandmorty/character/1").expect(200);
  });
  it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
    const response = await agent.get("/rickandmorty/character/1");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("species");
    expect(response.body).toHaveProperty("gender");
    expect(response.body).toHaveProperty("status");
    expect(response.body).toHaveProperty("origin");
    expect(response.body).toHaveProperty("image");
  });
  it("Si hay un error responde con status: 500", async () => {
    await agent.get("/rickandmorty/character/a").expect(500);
  });
});

describe("GET /rickandmorty/login", () => {
  it("Login correcto devuelve un objeto con propiedad access = true", async () => {
    const response = await agent.get(
      "/rickandmorty/login/?email=camilasaya315@gmail.com&password=cls0315"
    );
    expect(response.body).toEqual({ access: true });
  });
  it("Login incorrecto devuelve un objeto con propiedad access = false", async () => {
    const response = await agent.get(
      "/rickandmorty/login/?email=camilasaya15@gmail.com&password=cls035"
    );
    expect(response.body).toEqual({ access: false });
  });
});

describe("POST /rickandmorty/fav", () => {
  const character = { id: 1, name: "rick" };
  const character2 = { id: 2, name: "morty" };
  it("Agregar un favorito devuelve un array de favoritos", async () => {
    const response = await agent.post("/rickandmorty/fav").send(character);
    expect(response.body).toBeInstanceOf(Array);
  });
  it("Agregar otro favorito devuelve un array con todos los favoritos ya agregados", async () => {
    const response = await agent.post("/rickandmorty/fav").send(character2);
    expect(response.body).toContainEqual(character, character2);
  });
});

describe("DELETE /rickandmorty/fav/:id", () => {
  it("Si el character no existe devuelve todos los favs", async () => {
    const response = await agent.delete("/rickandmorty/fav/3").send(character2);
    expect(response.body).toContainEqual(character, character2);
  });
  it("Si el character existe devuelve todos los favs menos el eliminado", async () => {
    const response = await agent.delete("/rickandmorty/fav/3").send(character2);
    expect(response.body).not.toContainEqual(character);
  });
});
