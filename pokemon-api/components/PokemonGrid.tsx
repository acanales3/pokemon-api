"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PokemonCard } from "./PokemonCard";

interface PokemonGridProps {
  pokemonList: any;
  generation: string;
  special?: boolean;
}

export function PokemonGrid({
  pokemonList,
  generation,
  special,
}: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");

  const isSpecial = special;

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  const filteredPokemon = searchFilter(pokemonList);

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search</h3>
        <div className="grid w-full max-w-sm mx-auto items-center gap-1.5">
          <Label htmlFor="pokemonName">Pokemon Name</Label>
          <Input
            type="text"
            value={searchText}
            autoComplete="off"
            id="pokemonName"
            placeholder="Find Your Pokemon"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        {!isSpecial ? (
          <h3 className="text-3xl pt-12 pb-6 text-center">{`Generation ${generation} Pokemon`}</h3>
        ) : (
          <h3 className="text-3xl pt-12 pb-6 text-center">{`More Pokemon!`}</h3>
        )}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {filteredPokemon.map((pokemon: any) => {
          return (
            <PokemonCard name={pokemon.name} key={pokemon.name + "Card"} />
          );
        })}
      </div>
    </>
  );
}
