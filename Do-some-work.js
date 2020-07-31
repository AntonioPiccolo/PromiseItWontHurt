const q = require('q-io/http')
const http = require('http')

const sessionPort = '7000';
const databasePort = '7001';

q.read("http://localhost:7000/")
.then(function (id) {
  return q.read("http://localhost:7001/" + id);
})
.then(function(user){
    console.log(JSON.parse(user))
})
.catch(null, console.error)