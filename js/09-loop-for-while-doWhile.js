console.log("we are at loops");

// for(let i=1; i<=100; i++){
// 	console.log(i);
// }

// let j = 0;
// while (j < 100) {
// 	console.log(j+1);
// 	j++;
// }

// let k = 0;

// do {
// 	console.log(k + 1);
// 	k += 1;
// } while (k < 50);

let k = 0;
// do {
// 	console.log(k + 1);
// 	// if (k === 5) {
// 	// 	break;
// 	// }
// 	k +=
// } while (k < 10);

// do {
// 	// console.log(k + 1);
// 	if (k === 5) {
// 		k += 1;
// 		continue;
// 	}
// 	console.log("continue " + k);
// 	k++;
// } while (k < 10);

// let arr = [11,22,33, 44, 55];
// for(let i=0; i< arr.length; i++){
// 	const element = arr[i];
// 	console.log(element);
// }
// let arr = [11,22,33,44,55];
// arr.forEach(function(element){
// 	console.log(element);
// })

let obj = {
	name : "mubeen",
	classStd: "BSCS",
	os: "window"
}
for(let key in obj){
	console.log(`The ${key} of object ${obj[key]}`)
}