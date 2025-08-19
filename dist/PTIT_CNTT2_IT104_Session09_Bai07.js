"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateUser(user, updates) {
    if (updates.id)
        return "id không thể thay đỏi";
    return { ...user, ...updates };
}
const user = { id: 1, name: "Hoan", email: "Hoan@example.com", };
const updates = { id: 2, name: "Dung", };
console.log(updateUser(user, updates));
const user1 = { id: 1, name: "Quang", email: "Quang@example.com", };
const updates1 = { name: "hung", };
console.log(updateUser(user1, updates1));
