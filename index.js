//1. Ways to print in JS
//console.log("Hello World!");
// alert("me");
// document.write("This is document write")

//2. JS console API
// console.log("Hello World ", 4+6," Just having fun");
// console.warn("This is warning");
// console.error("This is error");
// console.assert(4==5);
// console.clear();

// 3. JS Variables
// var number1 = 34;
// var number2 = 56;
// console.log(number1+number2);

// 4. Data types in JS
//Numbers
// var num1 = 455;
// var num2 = 56.76;

//Strings
// var str1 = "This is a string"
// var str2 = 'This is also a string';

//Objects
// var marks = {
//     ravi: 56,
//     shanu: 78,
//     naval: 88.5
// }

//Booleans
// var a = true;
// var b = false;
// console.log(a, b);

//var und = undefined;
// var und;
// console.log(und);

// var n = null;
// console.log(n);

// var arr = [1,2,"pglu",4,5];

// function avg(a, b){
//     return (a+b)/2;
// }

// console.log(avg(4, 9));

//var arr = [1,2,3,4,5,6,7];
// arr.forEach(function(element){
//     console.log(element);
// });

// const ac = 0;
// ac++;

// let j = 0;
// while(j < arr.length){
//     console.log(arr[j]);
//     j++;
// }

//Array Methods
//let myArr = ["Fan", "Camera", 34, null, true]
//console.log(myArr.length);
// myArr.pop();
// myArr.push("NK");
// myArr.shift();
//myArr.unshift("NK", 6);
// myArr = [4,3,2,6];
// myArr.sort();
// console.log(myArr);

// let myStr = "NKji is feeling so cool, smjhe sirji!";
// console.log(myStr.indexOf("ji"));
// console.log(myStr.lastIndexOf("ji"));
// console.log(myStr.slice(1,6));
//console.log(myStr.replace("ji", "G"));

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getTime());

//DOM Manipulation
// let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[1].style.background = "yellow";
// elemClass[1].classList.add("bg-primary");
// elemClass[1].classList.add("text-success");
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName("div");
// console.log(tn);

// createdElement = document.createElement('p');
// createdElement.innerText = "Hi boies";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('p');
// createdElement2.innerText = "Bye boies";
// tn[0].replaceChild(createdElement2, createdElement);

// sel = document.querySelectorAll('.container');
// console.log(sel);

function clicked(){
    console.log('The button was clicked');
}

// window.onload = function(){
//     console.log('Loaded');
// }

//Events in JS

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>Kr dao click bete</b>"
//     console.log('Click ho gya');
// });

// firstContainer.addEventListener('mouseover', function(){
//     console.log('Mouse aao');
// });

// firstContainer.addEventListener('mouseout', function(){
//     console.log('Mouse gao');
// });

// firstContainer.addEventListener('mouseup', function(){
//     console.log('Mouse up when clicked');
// });

// firstContainer.addEventListener('mousedown', function(){
//     console.log('Mouse down when clicked');
// });

//Arrow functions
// function sum(a, b){
//     return a+b;
// }

// sum = (a,b) => {
//     return a+b;
// }

// logKaro = () => {
//     console.log("I am your log");
// }

//SetTimeout and setinterval
// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
//clearInterval/clearTimeout

//JS Local Storage
// localStorage.setItem('name', 'nk')
// localStorage.getItem('name')
// localStorage.clear();
// localStorage.remove('name');

//Json
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj)
// console.log(typeof jso)
// console.log(jso)

// parsed = JSON.parse(jso)
// console.log(parsed)
// console.log(typeof parsed)

//Template literals: Backticks
// a = 34;
// console.log(`this is my ${a}`)