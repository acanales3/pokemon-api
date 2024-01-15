import { PokemonCard } from "@/components/PokemonCard";
import { PokemonGrid } from "@/components/PokemonGrid";
import Image from "next/image";
import { getPokemonList } from "@/lib/pokemonApi";

export default async function Home() {
  const pokemonList = await getPokemonList();
  return <PokemonGrid pokemonList={pokemonList} />;
}
