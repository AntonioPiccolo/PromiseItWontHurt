const es6 = require('es6-promise')

const promise = Promise.resolve('MANHATTAN')

promise.then(attachTitle).then(console.log)

function attachTitle(name){
    return 'DR. ' + name;
}