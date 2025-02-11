var arrUtils = require('./ArrayUtils');


function download(started, update, completed) {
    started();
    for(let i = 0;i <= 100;i++) {
        setTimeout(function () {
            update(i);
        },  1 * i);
    }
    completed();
}

var started = function(){
    console.log("Started Download");
};

var update = function(i) {
    console.log("Updating..... " + i + "%");
};

var completed = function() {
    console.log("Completed Download");
};

download(started, update, completed);

var arr = [1, 2, 3, 4, 5, 6];
var max = arrUtils.max(arr);
var min = arrUtils.min(arr);
var media = arrUtils.media(arr);

console.log(
    'max:', max,
    'min:', min,
    'media:', media,
    'Indice:', arrUtils.indexOf(arr, 2)
);


console.log('subArray:', arrUtils.subArray(arr, 2, 4));

