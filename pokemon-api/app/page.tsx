import { PokemonCard } from "@/components/PokemonCard";
import { PokemonGrid } from "@/components/PokemonGrid";
import Image from "next/image";
import {
  getGen1,
  getGen2,
  getGen3,
  getGen4,
  getGen5,
  getGen6,
  getGen7,
  getGen8,
  getGen9,
  getOtherForms,
} from "@/lib/pokemonApi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function Home() {
  const gen1 = await getGen1();
  const gen2 = await getGen2();
  const gen3 = await getGen3();
  const gen4 = await getGen4();
  const gen5 = await getGen5();
  const gen6 = await getGen6();
  const gen7 = await getGen7();
  const gen8 = await getGen8();
  const gen9 = await getGen9();
  const otherForms = await getOtherForms();

  return (
    <>
      <Accordion className="w-full" type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="w-full bg-red-200 rounded-lg overflow-hidden my-4 border-b-0"
        >
          <AccordionTrigger className="ml-2 exo2-ib">
            Generation One
          </AccordionTrigger>
          <AccordionContent className="mx-auto max-w-screen-md text-center">
            <PokemonGrid generation={"One"} pokemonList={gen1} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="w-full bg-orange-200 rounded-lg overflow-hidden my-4 border-b-0"
        >
          <AccordionTrigger className="ml-2 exo2-ib">
            Generation Two
          </AccordionTrigger>
          <AccordionContent className="mx-auto max-w-screen-md text-center">
            <PokemonGrid generation={"Two"} pokemonList={gen2} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="w-full bg-orange-300 rounded-lg overflow-hidden my-4 border-b-0"
        >
          <AccordionTrigger className="ml-2 exo2-ib">
            Generation Three
          </AccordionTrigger>
          <AccordionContent className="mx-auto max-w-screen-md text-center">
            <PokemonGrid generation={"Three"} pokemonList={gen3} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="w-full bg-yellow-200 rounded-lg overflow-hidden my-4 border-b-0"
        >
          <AccordionTrigger className="ml-2 exo2-ib">
            Generation Four
          </AccordionTrigger>
          <AccordionContent className="mx-auto max-w-screen-md text-center">
            <PokemonGrid generation={"Four"} pokemonList={gen4} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="w-full bg-green-200 rounded-lg overflow-hidden my-4 border-b-0"
        >
          <AccordionTrigger className="ml-2 exo2-ib">
            Generation Five
          </AccordionTrigger>
          <AccordionContent className="mx-auto max-w-screen-md text-center">
            <PokemonGrid generation={"Five"} pokemonList={gen5} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-6"
          className="w-full bg-blue-200 rounded-lg overflow-hidden my-4 border-b-0"
        >
          <AccordionTrigger className="ml-2 exo2-ib">
            Generation Six
          </AccordionTrigger>
          <AccordionContent className="mx-auto max-w-screen-md text-center">
            <PokemonGrid generation={"Six"} pokemonList={gen6} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-7"
          className="w-full bg-blue-300 rounded-lg overflow-hidden my-4 border-b-0"
        >
          <AccordionTrigger className="ml-2 exo2-ib">
            Generation Seven
          </AccordionTrigger>
          <AccordionContent className="mx-auto max-w-screen-md text-center">
            <PokemonGrid generation={"Seven"} pokemonList={gen7} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-8"
          className="w-full bg-purple-200 rounded-lg overflow-hidden my-4 border-b-0"
        >
          <AccordionTrigger className="ml-2 exo2-ib">
            Generation Eight
          </AccordionTrigger>
          <AccordionContent className="mx-auto max-w-screen-md text-center">
            <PokemonGrid generation={"Eight"} pokemonList={gen8} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-9"
          className="w-full bg-purple-300 rounded-lg overflow-hidden my-4 border-b-0"
        >
          <AccordionTrigger className="ml-2 exo2-ib">
            Generation Nine
          </AccordionTrigger>
          <AccordionContent className="mx-auto max-w-screen-md text-center">
            <PokemonGrid generation={"Nine"} pokemonList={gen9} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-10"
          className="w-full bg-purple-500 rounded-lg overflow-hidden my-4 border-b-0"
        >
          <AccordionTrigger className="ml-2 exo2-ib">
            Other Pokemon Forms!
          </AccordionTrigger>
          <AccordionContent className="mx-auto max-w-screen-md text-center">
            <PokemonGrid
              special={true}
              generation={"Other"}
              pokemonList={otherForms}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
