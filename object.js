const person = {
    name: "John",
    age: 25,
    job: "Developer",
};

console.log(person.name);
console.log(person.job);

person["hobby"] = "Reading";

person.age = 30;

delete person.job;

const student = {
    name: "Alice",
    grade: 90,
    address: {
        city: "Jakarta",
        country: "Indonesia"
    }
}

console.log(student.address.city);

person.greet = function (){
    return `Hi, my name is ${this.name}`;
};

console.log(person.greet());