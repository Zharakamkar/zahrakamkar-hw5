"use strict";

const users = [
    { name: 'John', age: 30 },
    { name: 'sharl', age: 20 },
    { name: 'Tull', age: 23 },
    { name: 'zahra', age: 18 },
    // {
    //     sortAge: function () {
    //         return (this.sort((a, b) => a.age > b.age ? 1 : 0))
    //     }
    // }
];

const sortAge = () => {
    return (users.sort((a, b) => a.age - b.age))
}

console.log(sortAge())
