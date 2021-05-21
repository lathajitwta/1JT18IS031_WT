var var1 = setInterval(inTimer, 500);
var fs = 5; 
var ids = document.getElementById("txt1");
function inTimer()
{
ids.innerHTML = 'Ocean Therapy';
ids.setAttribute('style', "font-size: " + fs + "px; color: red");
fs += 5;
if (fs >= 50)
{
clearInterval(var1); 
var2 = setInterval(deTimer, 500);

}
}
function deTimer() 
{
fs -= 5;
ids.innerHTML = 'Ocean Therapy';
ids.setAttribute('style', "font-size: " + fs + "px; color: blue");
if (fs == 5)
{
clearInterval(var2); 
var1 = setInterval(inTimer, 500);
}
}