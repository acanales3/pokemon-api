import Link from "next/link";

interface PokemonCardProps {
  name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link
      href={name}
      className="group m-3 text-center rounded-lg px-5 py-4 transition-colors text-gray-600 bg-gradient-to-b from-blue-500 to-blue-100 border border-blue-800 hover:border-blue-100 exo2 "
      key={name + "Card"}
      rel="noopener noreferrer"
    >
      <h2 className="text-2xl font-semibold">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Link>
  );
}
