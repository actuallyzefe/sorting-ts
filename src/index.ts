import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([1, 5, 3, -99, -63]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const characters = new CharactersCollection("xAxxAb");
const charactersSort = new Sorter(characters);
charactersSort.sort();
console.log(characters.data);
