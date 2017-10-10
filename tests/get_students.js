const mongoose = require('mongoose');
var Student = require('../schema/student');

let mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/studentdb';

mongoose.connect(mongoUri, function(err){
    if(err) { console.log("Error connecting to database: ", err); return; }

	//-------------------------------------------------------
    // count no. of students
    //-------------------------------------------------------
    Student.count(function(err, count){
        
        if(err) {
       		console.log("Error getting student - " , err);
        	return; 
        }

       console.log("Total students: " + count);
 	})


    //-------------------------------------------------------
    // find student by name
    //-------------------------------------------------------
    var query = {name: 'tom'};

 	Student.findOne(query , function (err, rec) {

 		if(err) {
       		console.log("Error getting student by name: " + query.name);
        	return; 
        }

        if(rec) {
        	console.log("found student: " + JSON.stringify(rec) );
        } else {
        	console.log("No student found by name: " + query.name);
        }

 	});

});//connect


