var firstname = "mustafa"; //func scope

let first = "mmm"  //block scope
const last ="ddd";

first = "kkk";
// last = "ttt"; //constant atama yapamazsın

let undef;
if (true) {
    var varscope = "this is var"
    let block_var= "this is block"    
}

console.log(varscope) //this is var
// console.log(block_var) //reference error
console.log(undef) //undefined


// 4 > 3 && 10 < 12 // true && true ==> true
// 4 > 3 && 10 > 12 // true && false ==> false
// 4 > 3 || 10 < 12  // true
// 4 > 3 || 10 > 12 // true
// !(4 > 3) // false ! den dolayı
// !(4 < 3) // true !
// !(false) // true !
// !(4 > 3 && 10 < 12) //false
// !(4 > 3 && 10 > 12) //true
// !(4 === '4') //true
// (4 == '4') //true


let rain = 98; // true  // herhangi bir değer var ise
rain = false;
rain = 0;
rain = null;
rain = undefined;
rain = NaN;
rain = "";
console.log(rain)

