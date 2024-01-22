import { getPokemon } from "@/lib/pokemonApi";
import Image from "next/image";
import { PokemonImage } from "@/components/PokemonImage";
import { Progress } from "@/components/ui/progress";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemonObject = await getPokemon(pokemonName);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-bold pt-4 exo2-b">
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <div
        className="m-4 mx-auto"
        style={{ position: "relative", width: "300px", height: "300px" }}
      >
        <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonName}
        />
      </div>
      <h3 className="exo2-ib text-center">
        Weight: {((pokemonObject.weight / 10) * 2.2).toFixed(2)} lbs
      </h3>
      <div
        className="flex-col exo2 items-center px-4"
        style={{ width: "500px", textAlign: "center" }}
      >
        {pokemonObject.stats.map((statObject: any) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;
          return (
            <div className="flex items-center w-full" key={statName}>
              <h3 className="p-3 w-2/4">
                {statName}: {statValue}
              </h3>
              <Progress
                className="flex-grow-0 w-1/4 sm:w-full mx-auto"
                value={statValue}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
