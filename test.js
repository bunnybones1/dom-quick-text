var QuickText = require('./');

var a = new QuickText('test');
var b = new QuickText('test2');
var c = new QuickText('test3');

a.update('test4');

setInterval(function() {
	c.update(Math.random());
}, 30)