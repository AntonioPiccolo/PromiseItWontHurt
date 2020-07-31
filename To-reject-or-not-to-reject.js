const es6 = require('es6-promise')

const err = new Error('I DID NOT FIRE')

const promise = new Promise(function(fulfill,reject){
        fulfill('I FIRED')
        reject(err)
})

promise.then(function(value){console.log(value)})
promise.then(function(){},function(error){onRejected()})

function onRejected(){
    console.log(err.message)
}