// VARIABLES AND DATATYPES//
console.log("heelll00");

var firstname='John'; //declared a varisable
console.log(firstname);//to print value in console

var age=28; 
/*
primitive datatypes in js(dynamic typing)-
Number-float,decimal
String-character,text
Boolean-true or false
Undefined-does not have a value yet
Null-non-existent
*/
var fullage=true;
console.log(fullage);

firstname='teacher';
console.log(firstname);

// VARIABLE MUTATION AND TYPE COERCION//

var firstnam="john"
var age=28;
console.log(firstnam+' '+age);

var job,ismarried;
job="teacher";
ismarried=false;

console.log(firstnam+" "+age+" "+job+" "+ismarried);

//variable mutation
age="twenty eight";
job="driver";
alert(firstnam+" "+age+" "+job);//creates an alert

var lastname=prompt("what is the last name?");// to ask user to input value
console.log(firstnam+" "+lastname);

//BASIC OPERATORS//

var year=2018-29;
console.log(year);
var now=29;
console.log(now+2);
console.log(now/2);
console.log(now*2);
var older=year>now;
console.log(older);//boolean

console.log(typeof older);//tell the type of datatype

//OPEREATOR PRECEDENCE//

//=== (strict EQUALS)
//>= 
//<=
//!= (inequality)
//!== (strict inequality)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// = (assingment)

var x,y;
x=y=(8*2+12);
x++;
console.log(x,y);

// IF ELSE STATEMENTS//

var f="john";
var status="single";

if(status==="married"){
	console.log(f+" "+married);
}else{
	console.log(f+" "+status);
}

var is=true;
if(is){
	console.log("wascd");
}

// BOOLEAN LOGIC //

var firstname="john";
var age=14;
if(age<13){
	console.log("boy");
}else if(age>13 && age<15){
	console.log("teenager");
}else{
	console.log("man");
}

//&& and
// || or
// ! not
// >=

// TERNARY OPERATOR AND SWITCH STATEMENTS//

age>=18 ? console.log("man") : console.log("teenager");

var can = age>=18 ? "man" :"teenager";

var job="teacher"
switch(job){
	case 'teacher':
	console.log("teacher teacges kids");
	break;
	case 'driver':
	console.log("drives the car");
	break;
}

// TRUTHY AND FALSY VALUE//

//falsy values: undefined, null, 0, '',NaN
//truthy values: NOT falsy values

var height;
if(height===18 || height===0){
	console.log("variable is defined");
}else{
	console.log('variable is not defined');
}

// equality operators

if(height=="23"){
	console.log("the == operator does type coersion ")
}


// FUNCTIONS//

function calculateage(birthyear){
	return 2020-birthyear;
}

var agejohn = calculateage(1990);
var agemike = calculateage(1999);
var ageram = calculateage(1984);

console.log(agejohn,agemike,ageram);

function yearsuntilretrirement(birthyear,firstname){
	var age=calculateage(birthyear);
	var retirement=65-age;
	if(retirement>0){
	console.log(firstname+" "+retirement);
    }else{
    	console.log(firstname+" "+"is already retired.")
    }
}

yearsuntilretrirement(1990,"john");

// FUNCTION STATEMENTS AND EXPRESSIONS //


// function expression
var whatdoyoudo=function(job,firstname){
	switch(job){
		case "teacher":
		     return (firstname+" "+"teacher");

		case "driver":
              return(firstname+" "+"driver");
		case "designer":
              return ("design");
		default:
              return ("does something else");

	}
}

console.log(whatdoyoudo("teacher","john"));

//statement does not produce result

//ARRAYS//

var name=["john","mark","jane"];
var years=new Array(1990,1890,1380);

console.log(name[0]);
console.log(name);
console.log(name.length);

name[1]="ben";
name[5]="mary";
console.log(name);

//Different data types
var john=["john","smith",1990,false];
john.push("blue");
john.unshift("Mr.")
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));
// -1 return if element not present in the array

// OBJECTS AND PROPERTIES//

//objects can be used to group together no particular order

var john ={
	firstname: "john",
	lastname:"smith",
	birthyear:1990,
	family:["jane","mark","bob","emily"],
	job:"teacher",
	ismarried:false
};//object literal

console.log(john);

console.log(john.firstname);
console.log(john.birthyear);
console.log(john["lastname"]);
var x= "birthyear";
console.log(john[x]);

//mutate object
john.job="designer";
//or
john["job"]="designer";

john["ismarried"]=true;
console.log(john);

//new object literal
var jane= new Object();
jane.name="Jane";
jane.birthyear=1969;
jane["lastname"]="Smith";
console.log(jane);

//OBJECTS AND METHODS //

var john ={
	firstname: "john",
	lastname:"smith",
	birthyear:1990,
	family:["jane","mark","bob","emily"],
	job:"teacher",
	ismarried:false
//	calcAge: function(birthyear){ this.age= 2020-this.birthyear; } //this.birthyear means john.birthyear
                                //this means current object 
};//function

//john.calcAge();
console.log(john);

// LOOPS AND ITERATION //

for(var i=0;i<10;i++){
console.log(1);
}

var john=["john","smith",1990,"designer",false];
for(var i=0;i<john.length;i++){
	if(typeof john[i]!=="string") continue;
    console.log(john[i]);
}

while(i<john.length){
	console.log(john[i]);
	i++;
}

// 
// transpilling and polyfiling es6 to es5
//
//
