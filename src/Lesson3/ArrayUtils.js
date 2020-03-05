module.exports = {

    isEmpty: function (array) {
        if (array.length === 0) {
            return true;
        }

        return false;
    },

    max: function (array) {
        var m = Number.NEGATIVE_INFINITY;
        for (i = 0; i < array.length; i++) {
            if (array[i] > m) {
                m = array[i];
            }
        }
        return m;
    },

    min: function (array) {
        var min = Number.POSITIVE_INFINITY;
        for (i = 0; i < array.length; i++) {
            if (array[i] < min ) {
                min = array[i];
            }
        }
        return min;
    },

    media: function(array) {
        var soma = 0;
        for (var i = 0; i < array.length; i++) {
            soma += array[i];
        }
        return soma / array.length;
    },

    index: function(array, element) {
        for(var i = 0; i !== array.length;i++){
            if (array[i] === element){
                return i;
            }
        }
    }
};