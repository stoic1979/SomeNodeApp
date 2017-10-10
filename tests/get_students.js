const mongoose = require('mongoose');
var Student = require('../schema/student');

let mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/studentdb';

mongoose.connect(mongoUri, function(err){
    if(err) { console.log("Error connecting to database: ", err); return; }

    Student.count(function(err, count){
        
        if(err) {
       		console.log("Error getting student - " , err);
        	return; 
        }

       console.log("Total students: " + count);
 	})

})//connect


