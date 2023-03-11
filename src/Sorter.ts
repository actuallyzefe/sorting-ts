import { NumbersCollection } from "./NumbersCollection";

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  abstract length: number;
  abstract compare(rightIndex: number, leftIndex: number): boolean;
  abstract swap(rightIndex: number, leftIndex: number): void;

  sort(): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (this.compare(i, j)) {
          this.swap(i, j);
        }
      }
    }
  }
}
