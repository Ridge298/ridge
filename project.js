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
document.write("The date today is "+fade+pre+","+month+" "+year+" and the time is "+hour+":"+minute+id+" Happy "+day+".Have a "+greeting+".");
}
function myheader() {
  document.write("<h1 style='font-family: Bungee Shade;color: #333;font-size: 90px;padding: 40px;height: 200px'>CORONAVIRUS</h1>");
}
function myanim() {
  document.write("<h2 style='text-align: center;font-size: 70px;font-family: Italianno;padding: 30px'>Coronavirus Is Fatal!</h2>");
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function myu() {
  Swal.mixin({
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2', '3']
  }).queue([{
      title: 'Please Login:',
      text: 'Name:'
    },
    {
      title: 'Please Login:',
      text: 'Email:',
      input: 'email'
    },
    {
      title: 'Please Login:',
      text: 'Password:',
      input: 'password'
    },
  ])
  .then((result) => {
    if (result.value) {
      const answers = JSON.stringify(result.value)
      Swal.fire({
        title: 'All done!',
        html: `
        Your answers:
        <pre><code>${answers}</code></pre>
        `,
        confirmButtonText: 'Submit'
      })
    }
  });
}
