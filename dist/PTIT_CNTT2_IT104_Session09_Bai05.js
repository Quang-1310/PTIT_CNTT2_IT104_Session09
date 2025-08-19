"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStore {
    data = [];
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        this.data.splice(index, 1);
    }
}
let numberStore = new DataStore();
numberStore.add(10);
numberStore.add(20);
console.log(numberStore.getAll());
numberStore.remove(1);
console.log(numberStore.getAll());
