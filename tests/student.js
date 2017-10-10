"use strict";

var Student = function(name, rno) {
	this.name = name;
	this.rno  = rno;
}

Student.prototype.show = function () {
  console.log("-------[ STUDENT INFO ]--------");
  console.log(" Name: " + this.name);
  console.log(" Roll No: " + this.rno);
}

module.exports = Student;