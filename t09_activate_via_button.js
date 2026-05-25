
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>hi ryan</h2>";
/* Paste your code from task 5 here */

function writeline(_name){
    // Add aline to the html page
    OUTPUT.innerHTML += "<p>welcome to the page"+_name+" </p>";
}
writeline("Mr Bob");
writeline("Ms alice ");
function displaywelcome(_name,_age){
    OUTPUT.innerHTML +="<p>welcome to the page"+_name+"</p>";
    OUTPUT.innerHTML +="<p>you are"+_age+" years old</p>";
}
displaywelcome("Ms Alice", 16);
displaywelcome("Mr Bob", 99);
