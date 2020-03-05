var ficha2 = require('./ficha2');
const {Aluno, Programa} = require('./ex9.js');

console.log('IMC = ', ficha2.imcFunc(60, 1.80));

var text = "Olá tudobem?";
console.log('text: ', text, ', Reversed: ', ficha2.reverseText(text));


text = "Tudo bemm";
console.log('text: ', text, 'Vogais count: ', ficha2.vogaisText(text));

text = "Tudo bemmm´m";

console.log('text: ', text, 'Letter count: ', ficha2.letterCount("m", text));

ficha2.scheduleCalc("08:00:00", "11:00:00");

console.log(ficha2.square(5, 5));
console.log(ficha2.triangle(10));
console.log(ficha2.box(10));

// Ex 9 Lesson 2
const programa = new Programa([
    new Aluno(2019019, 13),
    new Aluno(2019018, 12),
    new Aluno(2019016, 20),
    new Aluno(2019213, 3),
    new Aluno(2019213, 4),
]);

programa.listar();
programa.melhorNota();
programa.piorNota();
programa.notasNegativas();
programa.notasPositivas();
programa.notaMedia();



