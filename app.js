'use strict'
/*
This will use .execFile() child-process because
On Unix-type operating systems (Unix, Linux, macOS) 
child_process.execFile() can be more efficient because it does not spawn a shell by default
Read: https://nodejs.org/api/child_process.html
*/
const { execFile } = require('child_process');
const KTMMODEL = './outputModels';
const MODELARGS = [30, 90, 5000, 12]

function runModel(modelName, modelArgs) {
    //This function returns a Promise, 
    //This will resolve and return the result if model runs without any problem, or returns error if rejects
    return new Promise((resolve, reject) => {
        execFile(modelName, modelArgs, (error, stdout, stderr) => {
            if (error) {
                reject(`Promise Rejected. Error on runModel function \n${error}`)
            }
            else {
                resolve(stdout)
            }
        });
    });
}

try {
    runModel(KTMMODEL,MODELARGS)
        .then(modelOutput => { console.log(modelOutput) }) // Do your logic here
        .catch(error => console.error(error))
} catch (error) {
    console.log(`error in try catch`)
}