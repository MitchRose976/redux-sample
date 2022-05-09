import {compose, pipe} from "lodash/fp";
import { produce } from 'immer';

// let input = "   Javascript  ";
// let output = "<div>" + input.trim() + "</div>";

// const trim = str => str.trim();
// const wrap = type => str => `<${type}>${str}</${type}>`;
// const toLowerCase = str => str.toLowerCase();

// const transform = pipe(trim, toLowerCase, wrap("div"));
// console.log(transform(input));

// UPDATING OBJECTS
// const person = {name: "John",
//     address: {
//         country: "Canada",
//         city: "Mississauga"
//     }};
// const updated = {
//     ...person,
//     name: "Bilbo", 
//     address: {
//         ...person.address,
//         city: "Kitchener"
//     },
//     age: 30};
// console.log(updated);

// IMMER (OBJECT MUTATION)
let book = { title: "Harry Potter" };
const publish = book => {
    // 1st arg = initial state
    // 2nd arg = mutation
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
};

let updatedBook = publish(book);

console.log(book);
console.log(updatedBook);

