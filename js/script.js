// Variable decl.
function result(){
	var num1 = 5;
	var num2 = 10;
	var sum = num1 + num2;
	document.getElementById('h5').innerHTML = sum;
}
// alert msg
function message(){
	alert("Hello Javatpoint");
}
// print page
function printPage(){
	window.print();
}
// let....
function resultLet(){
	let num1, num2, sum;
	num1 = 20;
	num2 = 10;
	sum = num1 + num2;
	document.getElementById('lt').innerHTML = sum;
}
// assignment op...
let num1, num;
num1 = 5 + 6;
num = num1 * 10;
document.getElementById("asn").innerHTML = num;
// copy event
function copyEvent(){
	document.getElementById('copy').innerHTML = "You copied text!";
}
// cut event
function cutEvent(){
	document.getElementById('cut').innerHTML = "You cutted the text!";
}
// text change
function textChange(){
	document.getElementById('h2').innerHTML = "Hello there!";
}

// show date
function showDate(){
	document.getElementById('dh2').innerHTML = Date();
}

// variable repeat
function dataRepeat(){
	var message = "Welcome to SS";
	document.getElementById('dr').innerHTML = message.repeat(3);
}
// fontsize
function fontSize(){
	document.getElementById('fs').style.fontSize = "50px"
}

// show/hide
function textShow(){
	document.getElementById('tsh').style.display = "Block"
}
function textHide(){
	document.getElementById('tsh').style.display = "None"

}
let a;
a = 7;
document.getElementById('demo').innerHTML = a;
//
document.getElementById('demo1').innerHTML = 50 * 10;
//
document.getElementById('demo2').innerHTML = "John" + " " + "Doe";

x = 60;
{
x = 50;
}
document.getElementById('demo4').innerHTML = x;
// 
let m = 57;
{
let m = 67;
}
document.getElementById('demo5').innerHTML = m;
// ....
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyato";
cars.push("Audi");
document.getElementById('demo6').innerHTML = cars;