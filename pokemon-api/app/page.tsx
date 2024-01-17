import { PokemonCard } from "@/components/PokemonCard";
import { PokemonGrid } from "@/components/PokemonGrid";
import Image from "next/image";
import { getGen1, getGen2 } from "@/lib/pokemonApi";

export default async function Home() {
  const gen1 = await getGen1();
  const gen2 = await getGen2();
  return (
    <>
      <PokemonGrid generation={"One"} pokemonList={gen1} />
      <PokemonGrid generation={"Two"} pokemonList={gen2} />
    </>
  );
}
