
document.getElementById('myButton').addEventListener('click', function() { 
size()});

console.log("hello world from basic.js")


function size() {
    console.log("size is called");
    let myNum = (parseInt(document.getElementById("myInput").value));
    let result = 'none'

    if (isNaN(myNum)) {
        result = 'not a number'
    } else if (myNum < 10) {
        result = 'small'
    } else if ((10 <= myNum) && (myNum < 20)) {
        result = 'medium'
    } else if (myNum >=20) {   
        result = 'large' 
    } 

    console.log("The input is " + result);
};




