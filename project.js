function getMyDate() {
var day;
switch (new Date().getDay()) {
case 0: 
day="Sunday";
break;
case 0: 
day="Sunday";
break;
case 1: 
day="Monday";
break;
case 2: 
day="Tuesday";
break;
case 3: 
day="Wednesday";
break;
case 4: 
day="Thursday";
break;
case 5: 
day="Friday";
break;
case 6: 
day="Saturday";}
var hour=new Date().getHours();
var minute=new Date().getMinutes();
var second=new Date().getSeconds();
var month;
switch (new Date().getMonth()) {
case 0: 
month="Jan";
break;
case 1: 
month="Feb";
break;
case 2: 
month="March";
break;
case 3: 
month="April";
break;
case 4: 
month="May";
break;
case 5: 
month="June";
break;
case 6: 
month="July";
break;
case 7: 
month="Aug";
break;
case 8: 
month="Sept";
break;
case 9: 
month="Oct";
break;
case 10: 
month="Nov";
break;
case 11: 
month="Dec";}
var year=new Date().getFullYear();
var fade=new Date().getDate();
var da;
var pre;
switch (new Date().getDate()) {
case 1:
case 21:
pre="st";
break;
case 2:
case 22:
pre="nd";
break;
case 3:
case 23:
pre="rd";
break;
default:
pre="th";}
var greeting;
var id;
if (hour <18 ) {
greeting="Good Day!";}
else if (hour >18 ) {
greeting="Good Night!";}
if (hour <12 ) {
id="am";}
else if (hour >12 ) {
id="pm";}
document.write("The date today is "+fade+pre+","+month+" "+year+" and the time is "+hour+":"+minute+id+" Happy "+day+".Have a "+greeting+".");}
function myanim() {
document.write("<p style='text-align: center;font-family: Arizonia;'>Coronavirus  Is Fatal!</p>");}
function myheader() {
document.write("<h1 style='font-size: 80px;color: #333;width: 100%;margin-left: 0px;width: 100%;font-family: Bungee Shade'>CORONAVIRUS!</h1>");}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
