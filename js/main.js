/*The syntax for JS varible*/
/* variable keyword varible name = varible value*/
/*The syntax for JS fucntion*/
/* function keyword function name {
  whatever code you want inside the fucntion
}*/
/*After creating the fucntion, to call it just do
 fucntion name(any parameters to pass through else leave blank);
 parameters are seperate by commas (input1, input2,...)
 return
*/


/*Their are three data types in JS
numeric data, string data, Boolean data*/

// function sayHello(){
//   document.write('Well, Hello there');
// }
//
// sayHello();

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
  greeting = 'Good Evening and Welcome to my Website';
} else if (hourNow > 12) {
  greeting = 'Good Afternoon and Welcome to my Website'
} else if (hourNow > 0) {
  greeting = 'Good Morning and Welcome to my Website'
} else {
  greeting = 'Welcome to my Website'
}

document.write('<h2>' + greeting + '</h2>')
