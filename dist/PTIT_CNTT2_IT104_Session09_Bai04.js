"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function withDefault(a) {
    if (a === undefined) {
        return "default";
    }
    return a;
}
console.log(withDefault());
console.log(withDefault(42));
console.log(withDefault(true));
