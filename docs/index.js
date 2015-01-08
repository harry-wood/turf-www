var turf = require('turf'),
    Rpl = require('rpl-www');

var runnable = document.getElementsByClassName('rpl-runnable');

for (var i = 0; i < runnable.length; i++) {
    new Rpl(runnable[i], {
        sandbox: {
            turf: turf
        }
    });
}
