//number
var a = 15;

//string
var helloWorld = 'hi'

//boolean
var bool = 5 > 8;

//undefined
var myUndefined;

//null
var myNull = document.querySelector('body2');

//object

//array
var city = ['Dnipro', 'Kiev', 'Odessa'];

//obj
var user = {
    age:25,
    email:'skjdbva@slv.sdp',
    name: 'Vasa',
};

var users = [
    {namr: 'Vasa', age: 25, phones:['+380502013590','+3851564644'] },
    {namr: 'sdvsadv', age: 45, phone:'' },
    {namr: 'Vsdvs', age: 42, phone:''},
    {namr: 'Vassvsa', age: 22, phone:'' },
];

console.log(users[0].phones[1]);

//////////////////////////////////////////////////////////////////////////////////////////
var answer = prompt('Your age?');

console.log(answer);

if(answer > 60){
     alert('Your age is ' + answer);
} else if (answer < 50){
     alert('You are young');
} else {
     alert('You are old');
};

///////////////////////////////////////////////////////

var a = +prompt('enter number a ');

var o = prompt('enter number operation ');

var b = +prompt('enter number b ');

var result = 0;
/*
if(o === '+'){
    result = a + b ;
}      
if(o === '-'){
    result = a - b ;
}
if(o === '*'){
    result = a * b ;
}
if(o === '/'){
    result = a / b ;
}*/


switch(o){
    case '+':  result = a + b; break; 
    case '-':  result = a - b; break;
    case '*':  result = a * b; break;
    case '/':  result = a / b; break;
}
alert('Your ansver if ' + result);



////////////////////////////////////////////////////


var a = 10;
var b = 1;

//a = a + 5;

//a += 5;

//var result = a++;

//var result = ++a;

var res = a++ + a-- + ++b + b;
    //    10  + 11  + 2 + 2 ;
console.log(a);

console.log(res);

//////////////////////////////////////////////////////

var names = ['vasa', 'petya', 'anna', 'kolya'];

/*for(var i = 0; i<names.length; i++){
    console.log(names[i]);
}*/

/*for(var i in names){
    console.log(names[i]);
}*/

var container = document.querySelector('#block');

console.log(container);

var res = '';



for(var name of names){
    res += `<li>${name}</li>`;
}

container.innerHTML = res;

console.log(res);

////////////////////////////////

var names = ['vasa', 'petya', 'anna', 'kolya'];
var city = ['dnepr', 'fivbie', 'evrve', 'evesvasedf']


function renderList (data, containerId) {

var container = document.querySelector(containerId);


var res = '';



for(var item of data){
    res += `<li>${item}</li>`;
}

container.innerHTML = res;



}

renderList(names, '#names');
renderList(city, '#city');

//////////////////////////////////////////////////////

var ar = [1, 5, 9 , 8 ];




function sum (data) {
var result = 0;

for (var num of data){
    result += num;
}

return result;
}


console.log (sum(ar));
/////////////////////////////////////////////
var a = { name: 'vasa', age: 25,};
var ar = [1, 5, 8];
var ar2 = ar;

ar2.push(555);

var res = 10;

function sum(data){
    data = 100;
    return data;
}

sum(ar);

/////////////////////////////////////////////////


var user = {};

user.name = 'vasa';

user.add = function(){

}

user.add();