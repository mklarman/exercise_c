function Multiplier(){

	var n = 1
	this.multiply = function(x){
		n = x * n
		
	}
	this.getCurrentValue = function(){
		return n
		console.log(n)
	}
}

var m = new Multiplier()



// Implement an object model that allows you to store strings that represent a Photo. 
// Your model should include an Album object that can contain many Photo objects in its photos attribute. 
// Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. 
// Each Photo should store the photo's file name and the location the photo was taken in as strings. 
// Create instances of each object defined to prove that your object model works.

// problem 2 - using class method

class Photo{
	constructor(name, location){
		this.name = name
		this.location = location
	}}

class Album{
	var array = []

	this.addPhoto(){
		album.push(array)
	    }
    this.listPhotos(){
    	for(i=0; i<album.array.length; i++){
    		console.log(alum.array[i])
    	}
    }
}

var pic1 = new Photo('grandCanyon', 'Colo')
var pic2 = new Photo('birthday', 'home')

// problem #3 - using object constructor method

function Person(name, age, gender){
    this.name = name
    this.age = age
    this.gender = gender
}


function Student (name, age, gender, grade){
	Person.apply(name, age, gender)
	this.grade = grade
}

function Teacher(name, age, gender, exp, subject){
     Person.apply(name, age, gender)
     this.exp = exp
     this.subject = subject
}

function School(){
	this.teachers = []
	this.students = []

	this.addPerson = function (Person){
		if (person.constructor == Teacher){
			this.Person.push(teachers)
	     }
	    else (person.constructor == Student){
	    	this.Person.push(students)
	    }
    }
}

var stu1 = new Student('mike', 9, 'male', '3rd')
var stu2 = new Student('lisa', 11, 'female', '5th')
var teach1 = new Teacher('mr. smith', 52, 'male', '20 years', 'math')
var teach2 = new Teacher('mrs. Daniels', 37, 'female', '12 years', 'english')

