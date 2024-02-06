// Operators are the specific symbols which used to perform different 
//  mathematical and logical computations (operations) on 
// operands (values and variables).

// operand1 operator operand2
//     2       +        3

// Types of Operators 

// Arithmetic Operators
// Assignment Operators
// Comparision Operators
// Ternary Operators
// Logical Operators
// Bitwise Operators
// String Operators
// Type Operators


// Type Operators returns the type of a variable
let firstVar = 23;
let secondVar = '23';
let thirdVar = true;
let fourthVar = null;
let fifthVar = undefined;

console.log("firstVar is", firstVar);
console.log("secondVar is", secondVar);
console.log("thirdVar is", thirdVar);
console.log("fourthVar is", fourthVar);
console.log("fifthVar is",fifthVar);


/* Arithmetic Operators are used to perform arithmetic calculations. */

let firstNumber = 4;
let secondNumber = 3;

console.log("firstNumber is", firstNumber);
console.log("secondNumber is", secondNumber);

// Addition Operator (+);
let result = firstNumber + secondNumber;
console.log('Addition',result);

// Subtraction Operator (-);
let result1 = firstNumber - secondNumber;
console.log('Subtraction',result1);

// Multiplication Operator (*);
let result2 = firstNumber * secondNumber;
console.log('Multiplication',result2);

// Division Operator (/);
let result3 = firstNumber / secondNumber;
console.log('Division',result3);

// Remainder or Modulus Operator (%);
// isme division ke baad jo remainder bachega wahi result hoga
let result4 = firstNumber % secondNumber;
console.log('Remainder or Modulus',result4);

// Increment Operator (++);
// x++ means x = x + 1;

// ++x Pre Increment 
// Pre Increment me increment hone ke baad ka value return karega
// mtlb a = 4; hai aur hum ++a kiye to a ka value 5 return karega 
console.log("firstNumber is", firstNumber);
let result5 = ++firstNumber; // iska value change bhi ho gaya aur assign bhi ho gaya
console.log('Pre Increment',result5); // isme bhi change hai
console.log("firstNumber is", firstNumber); // aur isme bhi

// x++ Post Increment
// Post Increment me increment hone ke pehle ka value return karega
// mtlb a = 4; hai aur hum a++ kiye to a ka value 4 hi return karega
// magar iska value ab 5 ho chuka hoga 
let result6 = firstNumber++; // iska value change to hua par assign nahi
console.log('Post Increment',result6); // isme change nahi hai
console.log("firstNumber is", firstNumber); // par isme change hai

// Decrement Operator (--);
// x-- means x = x - 1;

// --x Pre Decrement
// Pre Decrement me decrement hone ke baad ka value return karega
// mtlb a = 4; hai aur hum --a kiye to a ka value 3 return karega 
let result7 = --firstNumber; // iska value change bhi ho gaya aur assign bhi ho gaya
console.log('Pre Decrement',result7); // isme bhi change hai
console.log("firstNumber is", firstNumber); // aur isme bhi

// x-- Post Decrement
// Post Decrement me dncrement hone ke pehle ka value return karega
// mtlb a = 4; hai aur hum a-- kiye to a ka value 4 hi return karega
// magar iska value ab 3 ho chuka hoga
let result8 = firstNumber--; // iska value change to hua par assign nahi
console.log('Post Decrement',result8); // isme change nahi hai
console.log("firstNumber is", firstNumber); // par isme change hai

// Exponentiation or Power Operator (**);
let result9 = firstNumber ** secondNumber;
console.log('Exponentiation or Power',result9);

/* Assignment Operators are used to assign values to variables. */

// Assignment Operator (=)
let a = 4;  //here 4 is assign to a;
console.log("Value of a is", a);

// Addition assignment (+=)
let result10 = a+=3; // a = a + 3
console.log('Addition assignment', result10);
console.log("Value of a is", a);

// Subtraction assignment (-=)
let result11 = a-=3; // a = a - 3
console.log('Subtraction assignment', result11);
console.log("Value of a is", a);

// Multiplication assignment (*=)
let result12 = a*=3; // a = a * 3
console.log('Multiplication assignment', result12);
console.log("Value of a is", a);

// Division assignment (/=)
let result13 = a/=3; // a = a / 3
console.log('Division assignment', result13);
console.log("Value of a is", a);

// Remainder or Modulus assignment (%=)
let result14 = a%=3; // a = a % 3
console.log('Remainder or Modulus assignment', result14);
console.log("Value of a is", a);

a = 4;
console.log("assigning value of a", a);
// Exponentiation assignment (**=)
let result15 = a**=3; // a = a ** 3
console.log('Exponentiation assignment', result15);
console.log("Value of a is", a);


/* Comparison Operators compare two values and return a boolean value, either true 
or false. */

let firstOperand = 32;
let secondOperand = 32;
let thirdOperand = 47;
let fourthOperand = "32";
let fifthOperand = "31";

console.log("firstOperand is", firstOperand, "and there type is", typeof(firstOperand));
console.log("secondOperand is", secondOperand, "and there type is", typeof(secondOperand));
console.log("thirdOperand is", thirdOperand, "and there type is", typeof(thirdOperand));
console.log("fourthOperand is", fourthOperand, "and there type is", typeof(fourthOperand));
console.log("fifthOperand is", fifthOperand, "and there type is", typeof(fifthOperand));

// equal to operator (==) 
// agar value equal hoga to true return hoga
let result17 = firstOperand == secondOperand;
let result18 = firstOperand == thirdOperand;
let result19 = firstOperand == fourthOperand; // yaha sirf value check karega isliye true hoga
console.log("equal to operator", result17);
console.log("equal to operator", result18);
console.log("equal to operator", result19);

// Strict equal to operator (===) 
// isme value aur type equal hoga to true return hoga
let result20 = firstOperand === secondOperand;
let result21 = firstOperand === thirdOperand;
let result22 = firstOperand === fourthOperand; // isme value to equal hai magar type nahi
console.log("Strict equal to operator", result20);
console.log("Strict equal to operator", result21);
console.log("Strict equal to operator", result22);

// Not equal to operator (!=) 
// isme value equal nahi hoga to true return hoga
let result23 = firstOperand != secondOperand;
let result24 = firstOperand != thirdOperand;
let result25 = firstOperand != fourthOperand; //yaha value equal mila isliye false return kiya 
console.log("Not equal to operator", result23);
console.log("Not equal to operator", result24);
console.log("Not equal to operator", result25);

// Strict Not equal to operator (!==) 
// isme value ya type equal nahi hoga to true return hoga
let result26 = firstOperand !== secondOperand;
let result27 = firstOperand !== thirdOperand;
let result28 = firstOperand !== fourthOperand; //yaha value to equal hai magar type nahi 
console.log("Strict Not equal to operator", result26);
console.log("Strict Not equal to operator", result27);
console.log("Strict Not equal to operator", result28);

// Greater Than operator(>) 
// isme check kiya jata hai value equal hai ya nahi
let result29 = firstOperand > secondOperand;
let result30 = firstOperand > thirdOperand;
let result31 = firstOperand > fourthOperand;
let gresult1 = firstOperand > fifthOperand; // isme sirf value check kiya gaya hai type nahi
console.log("Greater than operator", result29);
console.log("Greater than operator", result30);
console.log("Greater than operator", result31);
console.log("Greater than operator", gresult1);

// Greater than or equal to operator (>=) 
// isme check kiya jata hai value equal hai ya nahi
let result32 = firstOperand >= secondOperand;
let result33 = firstOperand >= thirdOperand;
let result34 = firstOperand >= fourthOperand;
let gresult2 = firstOperand >= fifthOperand; // isme sirf value check kiya gaya hai type nahi
console.log("Greater than or equal to operator", result32);
console.log("Greater than or equal to operator", result33);
console.log("Greater than or equal to operator", result34);
console.log("Greater than or equal to operator", gresult2);

// Less than operator (<) 
// isme check kiya jata hai value equal hai ya nahi
let result35 = firstOperand < secondOperand;
let result36 = firstOperand < thirdOperand;
let result37 = firstOperand < fourthOperand;
let gresult3 = firstOperand < fifthOperand; // isme sirf value check kiya gaya hai type nahi
console.log("Less than operator", result35);
console.log("Less than operator", result36);
console.log("Less than operator", result37);
console.log("Less than operator", gresult3);

// Less than or equal to operator (<=) 
// isme check kiya jata hai value equal hai ya nahi
let result38 = firstOperand <= secondOperand;
let result39 = firstOperand <= thirdOperand;
let result40 = firstOperand <= fourthOperand;
let gresult4 = firstOperand <= fifthOperand; // isme sirf value check kiya gaya hai type nahi
console.log("Less than or equal to operator", result38);
console.log("Less than or equal to operator", result39);
console.log("Less than or equal to operator", result40);
console.log("Less than or equal to operator", gresult4);

/* Logical Operators perfom logical operations and return a boolean value, either true 
or false. */

/* Logical AND = && // agar dono value true hoga tab true return hoga
Logical OR = || // dono me se koi bhi value true hoga to true return hoga
Logical NOT = ! // isse true value ko false or false value ko true me badal sakte hai */


let firstLogic = true;
let secondLogic = false;
let thirdLogic = true;
let fourthLogic = false;
let fifthLogic = 32;
let sixthLogic = 35;
let seventhLogic = 43;
let eightLogic = 30;

let resultLogic1 = firstLogic && secondLogic; 
let resultLogic2 = firstLogic && thirdLogic;
let resultLogic3 = secondLogic && fourthLogic;
let resultLogic4 = firstLogic && fifthLogic;
let resultLogic5 = secondLogic && fifthLogic;
let resultLogic6 = firstLogic || sixthLogic;
let resultLogic7 = firstLogic || secondLogic;
let resultLogic8 = secondLogic || fourthLogic;
let resultLogic9 = !firstLogic;
let resultLogic10 = !secondLogic;
let resultLogic11 = !fifthLogic;

console.log('resultLogic1 is', resultLogic1);
console.log('resultLogic2 is', resultLogic2);
console.log('resultLogic3 is', resultLogic3);
console.log('resultLogic4 is', resultLogic4);
console.log('resultLogic5 is', resultLogic5);
console.log('resultLogic6 is', resultLogic6);
console.log('resultLogic7 is', resultLogic7);
console.log('resultLogic8 is', resultLogic8);
console.log('resultLogic9 is', resultLogic9);
console.log('resultLogic10 is', resultLogic10);
console.log('resultLogic11 is', resultLogic11);

