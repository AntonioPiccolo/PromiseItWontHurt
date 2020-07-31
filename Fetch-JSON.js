const qIo =  require('q-io/http')

qIo.read("http://localhost:1337")
.then(function(value){
    console.log(JSON.parse(value))
})
.then(null, console.error)
.done()