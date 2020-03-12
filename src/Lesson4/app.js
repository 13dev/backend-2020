const {Person} = require('./Person');
var Arr = require('./Arrays');
var Emitter = require('./Emitter');
var events = require('./Config')['events'];

console.log("Lesson4");

var person = {
  name: "Peter",
  age: 15,
  gender: "M"
};

console.log('Json Object', JSON.stringify(person));

console.log('Json Parse string', JSON.parse('{"name":"Peter","age":15,"gender":"M"}'));


var jonas = new Person('Jonathan', 'Sousa');
jonas.age = 18;
jonas.greet();

var ronaldo = new Person('Ronaldo', 'Pereira');
ronaldo.age = 20;
ronaldo.greet();


console.log(jonas.__proto__);
console.log(ronaldo.__proto__);
console.log(jonas.__proto__ === ronaldo.__proto__);


Arr.push(function() {
    console.log("Hello World 1");
});

Arr.push(function() {
    console.log("Hello World 2");
});

Arr.push(function() {
    console.log("Hello World 3");
});

for (var i = 0; i < Arr.length; i++) {
    Arr[i](); // Invoke callback
}

Arr.forEach(function (callback) {
    callback();
});

//

Emitter.on(events.GREET, function() {
   console.log("Event greet!");
});

Emitter.on(events.GREET, function() {
    console.log("Event greet2!");
});

Emitter.on(events.HI, function() {
    console.log("Event hi!");
});

// Emmit events;
Emitter.emit(events.GREET);
Emitter.emit(events.HI);




