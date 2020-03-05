module.exports = {
    imcFunc: function (peso, altura) {
        return (peso / (altura ^ 2));
    },
    reverseText: function (text) {
        var palavras = text.split(' ');

        for (var i = 0; i < palavras.length; i++) {
            var reversed = "";

            for (var j = palavras[i].length - 1; j >= 0; j--) {
                reversed += palavras[i][j];
            }

            palavras[i] = reversed;
        }


        return palavras.join(' ');
    },
    vogaisText: function (text) {
        var vogais = ["a", "e", "i", "o", "u"];
        var count = 0;

        for (var i = 0; i < text.length; i++) {
            if (vogais.includes(text[i].toLowerCase())) {
                count++;
            }
        }

        return count;
    },
    letterCount: function (letter, text) {
        var count = 0;
        for (var i = 0; i < text.length; i++) {
            if (text[i].toLowerCase() === letter) {
                count++;
            }
        }

        return count;
    },
    scheduleCalc: function (entryHour, leftHour) {
        var entryHours = new Date("1/11/2000 " + entryHour);
        var leftHours = new Date("1/11/2000 " + leftHour);

        var companyHours = [new Date("1/11/2000 08:00:00"), new Date("1/11/2000 18:00:00")]

        if (entryHours.getTime() < companyHours[0].getTime()) {
            console.log("Empregado entrou cedo! Parabens!");
        }

        if (companyHours[1].getTime() > leftHours.getTime()) {
            console.log("Empregado saiu Tarde!!!");
        }

        console.log(
            "Empregado entrou ás:", entryHours.getHours() + ":" + entryHours.getMinutes(),
            "Saiu as:" + leftHours.getHours() + ':' + leftHours.getMinutes()
        );

    },
    square: function (largura, altura) {
        var str = "";
        for (var i = 0; i < largura; i++) {
            for (var j = 0; j < altura; j++) {
                str += " * ";
            }
            str += "\n";
        }

        return str;
    },
    triangle: function (altura) {
        var str = "";
        for (var i = 0; i < altura; i++) {
            for (var j = i; j > 0; j--) {
                str += " * ";
            }
            str += "\n";
        }
        return str;
    },
    box: function (altura) {
        var str = "";
        for (var i = 0; i < altura; i++) {
            for (var j = 0; j < altura; j++) {

                if (j === 0 || j === altura - 1 || i === 0 || i === altura - 1) {
                    str += " * ";
                } else {
                    str += "   ";
                }
            }
            str += "\n";
        }
        return str;
    }

};
