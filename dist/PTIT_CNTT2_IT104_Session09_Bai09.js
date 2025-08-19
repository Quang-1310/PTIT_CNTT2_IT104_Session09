"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterByType(a, b) {
    let arr = [];
    for (const input of a) {
        for (const type of b) {
            if (typeof input === type && input !== null) {
                arr.push(input);
            }
        }
    }
    return arr;
}
let mixedArray1 = [1, 'hello', 3, 'world', 5, 'typescript', true, null, undefined, { name: 'Alice' }];
console.log(filterByType(mixedArray1, ['number', 'string']));
let mixedArray2 = [1, 'hello', 3, 'world', 5, 'typescript', true, null, undefined, { name: 'Alice' }];
console.log(filterByType(mixedArray2, ['object']));
