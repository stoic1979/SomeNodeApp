const mongoose = require('mongoose');
var Student = require('../schema/student');

var students = [
	{name: 'tom', email: 'tom@gmail.com', roll_no: 2},
	{name: 'jon', email: 'jon@gmail.com', roll_no: 3},
	{name: 'ben', email: 'ben@gmail.com', roll_no: 5}
];

let mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/studentdb';

console.log("URI: " + mongoUri);

mongoose.connect(mongoUri,function(err){
    if(err) { console.log("Error connecting to database: ", err); return; }
    
    students.forEach(function (student) {
      	new Student(student).save();
        console.log("Student Added Successfully !!!");
    })
})