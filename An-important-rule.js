var Q = require('q')

function alwaysThrows(){
    throw Error('OH NOES')
}
function iterate(int = 1){
    console.log(int)
    return int + 1 
}

function stampError(err){
    console.log(err.message)
}

Q.fcall(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)

.catch(stampError)


