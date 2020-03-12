function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.age = null;
Person.prototype.greet = function() {
    console.log("Hello", this.firstName, this.lastName,  "Idade:", this.age);
};

module.exports = {Person};