"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        for (let i = 0; i < this.length; i++) {
            for (let j = i + 1; j < this.length; j++) {
                if (this.compare(i, j)) {
                    this.swap(i, j);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
