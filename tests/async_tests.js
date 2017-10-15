//------------------------------------------------------------------
//  Async file read test with promise
//------------------------------------------------------------------

var fs = require("fs");
var readFileAsync = function(filename) {
    return new Promise(function(resolve, reject) {

        console.log("reading filename: " + filename);

        fs.readFile(filename, function(err, data){
            if (err) 
                reject(err); 
            else 
                resolve(data);
        });
    });

};

var showUsage = function() {
    console.log("\n Invalid command line args. Filename not specified. \n\n Usage:- \n node async_test.js <filename> \n");
};

var main = function() {

    // ensure cmd args
    if(process.argv.length !=3) {
        showUsage();
        return;
    }

    var filename = process.argv[2];

    // reading file async
    readFileAsync(filename).then(function(data) {
        console.log('contents of file are: ' + data);
    }).catch(function(err){
        console.log('failed to read file: ' + err);
    })

};

//----------------------
//  main
//----------------------
main();
