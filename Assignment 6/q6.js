// write a node js application to check whether a given name is file or directory. if it is a directory, display the lis of files and subdirectories.

const fs = require('fs');
const Path = 'C:\\Users\\SBUP\\Desktop\\MCA2403082\\Node js';
console.log(`going to read directory ${Path}`)
fs.readdir('C:\\Users\\SBUP\\Desktop\\MCA2403082\\Node js\\Assignment 6',function(err, files){
    if(err){
        return console.error("Directory not found :  ",err);
    }
    files.forEach(function (file){
        fs.stat(file, function (err, f1){
            if(err){
                return console.error(err)
            }
            if(f1.isFile())
                console.log(file+" --- is a file")
            
            else
                console.log(file+" --- is a directory")
            
        }
    )
    })
})
