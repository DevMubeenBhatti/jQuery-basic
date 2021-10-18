console.log("now we are working on functions");

/*
let and const is a block level scope

*/
// let name = "mubeenbhatti"
// function ui(name){
// 	return console.log(`this is my name ${name} `);
// }
// console.log(ui(name));

// const i = 125;
// let i = 125;
// var i = 125;
// console.log("const variabale global : " + i);

// var i = 1253;
// if (1) {
// 	// let = 125;
// 	const i = 33;
// 	console.log("const variabale global : " + i);
// }

// function ui(name) {
// 	// let and const is a block level variable
// 	// let i = 3;
// 	// const i = 3;
// 	i = 44
// 	console.log("var function variable : " + i)
// 	return `my name is ${name}`
// }
// console.log(ui("mubeen bhatti gobal var : ") + i);
// =====================================

// let add = saveAdd(a, b){
// 	retun a +b;
// }
// console.log(saveAdd(3 + 3));

// let add=function(a, b) {
//     return a + b;
// }
// console.log(add(3,3));
// //Output: 7


// function print_message(result) {
// 	return result = "mubeen"
// 	// console.log(result);
// }
// // let result = say('Hello World');
// console.log(print_message());

// function print_message(message) {
//     console.log(message);
// }
// let message = say('Hello World');
// console.log(print_message(message));

var myDistance = get_Distance(1, 8);
function get_Distance(speed, time) {
	let dist = speed * time;
	return dist;
}
console.log(myDistance)