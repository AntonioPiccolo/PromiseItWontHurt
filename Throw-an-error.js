const es6 = require('es6-promise')

const jsonDir = process.argv[2]

function parsePromised(json){
    return new Promise(function(fulfill,reject){
        try{
            let parseInput = JSON.parse(json);
            fulfill(parseInput)
        }
        catch(err){
            reject(err.message)
        }
    });
}

parsePromised(jsonDir).catch(console.log);