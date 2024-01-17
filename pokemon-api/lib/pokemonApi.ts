const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getGen1() {
  const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
  const data = await response.json();

  return data.results;
}

export async function getGen2() {
  const response = await fetch(POKEMON_API + "pokemon?limit=100&offset=151");
  const data = await response.json();

  return data.results;
}

export async function getGen3() {
  const response = await fetch(POKEMON_API + "pokemon?limit=135&offset=251");
  const data = await response.json();

  return data.results;
}

export async function getGen4() {
  const response = await fetch(POKEMON_API + "pokemon?limit=108&offset=386");
  const data = await response.json();

  return data.results;
}

export async function getGen5() {
  const response = await fetch(POKEMON_API + "pokemon?limit=155&offset=494");
  const data = await response.json();

  return data.results;
}

export async function getGen6() {
  const response = await fetch(POKEMON_API + "pokemon?limit=72&offset=649");
  const data = await response.json();

  return data.results;
}

export async function getGen7() {
  const response = await fetch(POKEMON_API + "pokemon?limit=88&offset=721");
  const data = await response.json();

  return data.results;
}

export async function getGen8() {
  const response = await fetch(POKEMON_API + "pokemon?limit=96&offset=809");
  const data = await response.json();

  return data.results;
}

export async function getGen9() {
  const response = await fetch(POKEMON_API + "pokemon?limit=120&offset=905");
  const data = await response.json();

  return data.results;
}

export async function getOtherForms() {
  const response = await fetch(
    POKEMON_API + "pokemon?limit=100000&offset=1025"
  );
  const data = await response.json();

  return data.results;
}

export async function getPokemon(name: string) {
  const response = await fetch(POKEMON_API + "pokemon/" + name);
  const data = await response.json();
  return data;
}
