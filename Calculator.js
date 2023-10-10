let body=document.querySelector("body");
let displayscreen= document.getElementById("expresult");
let inputpad= document.querySelector(".input");
let bracess= document.getElementById("bracess");
let addsub=document.getElementById("addsub");
let numberpad= document.querySelector(".numberpad");
let zero=document.getElementById("zero")
let one=document.getElementById("one")
let two=document.getElementById("two")
let three=document.getElementById("three")
let four=document.getElementById("four")
let five=document.getElementById("five")
let six=document.getElementById("six")
let seven=document.getElementById("seven")
let eight=document.getElementById("eight")
let nine=document.getElementById("nine")
let clr=document.getElementById("clear")
let fr=0;

let expression='';
displayscreen.value=0;

function f0()
{
    console.log(zero.value);
    expression=expression+zero.value;
    displayscreen.value=expression;
    console.log("expression="+expression);
}

function f1()
{
    console.log(one.value);
    expression=expression+one.value;
    displayscreen.value=expression;
    console.log("expression="+expression);
}

function f2()
{
    console.log(two.value);
    expression=expression+two.value;
    displayscreen.value=expression;
    console.log("expression="+expression);
}

function f3()
{
    console.log(three.value);
    expression=expression+three.value;
    displayscreen.value=expression;
    console.log("expression="+expression);
}

function f4()
{
    console.log(four.value);
    expression=expression+four.value;
    displayscreen.value=expression;
    console.log("expression="+expression);
}

function f5()
{
    console.log(five.value);
    expression=expression+five.value;
    displayscreen.value=expression;
    console.log("expression="+expression);
}

function f6()
{
    console.log(six.value);
    expression=expression+six.value;
    displayscreen.value=expression;
    console.log("expression="+expression);
}

function f7()
{
    console.log(seven.value);
    expression=expression+seven.value;
    displayscreen.value=expression;
    console.log("expression="+expression);
}
function f8()
{
    console.log(eight.value);
    expression=expression+eight.value;
    displayscreen.value=expression;
    console.log("expression="+expression);
}

function f9()
{
    console.log(nine.value);
    expression=expression+nine.value;
    displayscreen.value=expression;
    console.log("expression="+expression);
}

function add()
{
    expression=expression+"+";
    displayscreen.value=expression;
  console.log(expression);
}

function sub()
{
    expression=expression+"-";
    displayscreen.value=expression;
  console.log(expression);
}
function multiplication()
{
    expression=expression+"*";
    displayscreen.value=expression;
  console.log(expression);
}
function division()
{
    expression=expression+"/";
    displayscreen.value=expression;
  console.log(expression);
}

function dot()
{
    expression=expression+".";
    displayscreen.value=expression;
  console.log(expression);
}




function equals()
{
    fr= eval(expression)
    displayscreen.value=fr;
    console.log(fr);
}

function eraseexp()
{
    expression='';
    displayscreen.value=0;
    displayscreen.value=expression;
    console.log("expression deleted");

}