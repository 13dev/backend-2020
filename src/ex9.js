class Programa {
    alunos = [];

    constructor(alunos) {
        alunos.forEach((aluno) => {
            this.addAluno(aluno);
        })
    }

    addAluno(aluno) {
        if (typeof aluno !== Aluno || this.alunos.length > 30) {
            throw new DOMException("Impossivel adicionar aluno.");
        }

        this.alunos.push(aluno);
        return this.alunos;
    }

    listar() {
        this.alunos.forEach(function (aluno) {
            console.log("Aluno nº", aluno.getNum(), "nota: ", aluno.getNota());
        })
    }

    melhorNota() {
        // obter aluno com mellhor nota.
        var aluno = this.alunos.reduce((p, v) => {
            return (p.getNota() > v.getNota()) ? p : v;
        });

        console.log('O Aluno nº', aluno.getNum(), 'teve melhor nota de:', aluno.getNota());

        return aluno;
    }

    piorNota() {
        // obter aluno com pior nota
        var aluno = this.alunos.reduce(function (p, v) {
            return (p.getNota() < v.getNota() ) ? p : v;
        });

        console.log('O Aluno nº', aluno.getNum(), 'teve pior nota de:', aluno.getNota());

        return aluno;
    }

    notasNegativas() {

        // TOdos os alunos abaixo de 10.
        var alunos = this.alunos.filter(function (aluno) {
            return aluno.getNota() < 10;
        });

        console.log('Alunos com Nota negativas:');

        alunos.forEach(function (aluno) {
            console.log('O Aluno nº', aluno.getNum(), 'nota de:', aluno.getNota());
        });

        return alunos;
    }


    notasPositivas() {

        // todos os alunos acima de 10
        var alunos = this.alunos.filter(function (aluno) {
            return aluno.getNota() >= 10;
        });

        console.log('Alunos com Nota Positivas:');

        alunos.forEach(function (aluno) {
            console.log('O Aluno nº', aluno.getNum(), 'nota de:', aluno.getNota());
        });

        return alunos;
    }

    notaMedia() {
        var media = this.alunos.map(aluno => aluno.getNota());
        // somar todos os valores
        media = media.reduce(function (p, v) {
            return p + v;
        });

        // Arredondar a média para o numero mais proximo
        media = Math.round(media / this.alunos.length);

        // calcular o aluno mais proximo da media
        var aluno = this.alunos.reduce(function(p, v) {
            return (Math.abs(v.getNota() - media) < Math.abs(p.getNota() - media) ? v : p);
        });

        console.log('O aluno mais proximo da media', media,'é o nº', aluno.getNum(), 'com nota de', aluno.getNota());
    }
}

class Aluno {
    #nAluno;
    #nota;

    constructor(nAluno, nota) {
        this.nAluno = nAluno;
        this.nota = nota;
    }

    getNota() {
        return this.nota;
    }
    getNum() {
        return this.nAluno;
    }
}

var programa = new Programa([
    new Aluno(2019019, 13),
    new Aluno(2019018, 12),
    new Aluno(2019017, 9),
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