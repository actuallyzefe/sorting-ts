import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
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

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-5);
linkedList.add(-436);
const linkedSort = new Sorter(linkedList);
linkedSort.sort();
linkedList.print();
