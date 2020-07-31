const es6 = require('es6-promise')

var firstPromise = first();

var secondPromise = firstPromise.then( function(secret) { return second(secret) } )

secondPromise.then(console.log)