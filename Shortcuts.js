const es6 = require('es6-promise')

const promise = Promise.reject(new Error('ERROR HERE!'))

promise.catch(function(err){console.log(ciao)})