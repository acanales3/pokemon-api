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
      <div className="text-center">
        <h3 className="text-2xl py-6 text-center exo2-ib">Search</h3>
        <div className="grid w-full max-w-sm mx-auto items-center gap-1.5">
          <Label htmlFor="pokemonName" className="text-center exo2">
            Pokemon Name
          </Label>
          <Input
            type="text"
            value={searchText}
            autoComplete="off"
            id="pokemonName"
            placeholder="Find Your Pokemon!"
            onChange={(e) => setSearchText(e.target.value)}
            className="exo2"
          />
        </div>
        {!isSpecial ? (
          <h3 className="text-3xl pt-12 pb-6 text-center exo2-b">{`Generation ${generation} Pokemon`}</h3>
        ) : (
          <h3 className="text-3xl pt-12 pb-6 text-center exo2-b">{`More Pokemon!`}</h3>
        )}
      </div>

      <div className="grid text-center lg:mb-0 lg:grid-cols-3">
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map((pokemon: any) => (
            <PokemonCard name={pokemon.name} key={pokemon.name + "Card"} />
          ))
        ) : (
          <div className="col-span-3 flex items-center justify-center">
            <div className="exo2-ib flex gap-2 rounded-lg px-4 text-2xl font-semibold">
              No Pokemon Match!
            </div>
          </div>
        )}
      </div>
    </>
  );
}
