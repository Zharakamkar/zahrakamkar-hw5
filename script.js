// Q1

let user = {
    name: 'John',
    age: 30,
    sayHello: function () {
        return (`hello ${this.name}`)
    }
}
console.log(user.sayHello())