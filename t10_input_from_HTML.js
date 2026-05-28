/* Paste your code from the last task */
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>hi ryan</h2>";
/* Paste your code from task 5 here */

function writeline(_name){
    // Add aline to the html page
    OUTPUT.innerHTML += "<p>welcome to the page"+_name+" </p>";
}
function displaywelcome(_name,_age){
    OUTPUT.innerHTML +="<p>welcome to the page"+_name+"</p>";
    OUTPUT.innerHTML +="<p>you are"+_age+" years old</p>";
}

function start() {
    writeline("Mr Bob");
    writeline("Ms alice ");
    displaywelcome("Ms Alice", 16);
    displaywelcome("Mr Bob", 99);
}
const NAME_FIELD = document.getElementById("nameField");
let userName = NAME_FIELD.value;

