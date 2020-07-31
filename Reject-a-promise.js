const es6 = require('es6-promise')

const err = new Error('REJECTED!')

const promise = new Promise(function(fulfill,reject){
    setTimeout(function(){
        reject(err)
    },300)
})

promise.then(function(){}, function(error){
    onReject()
})

function onReject(){
    console.log(err.message)
}


