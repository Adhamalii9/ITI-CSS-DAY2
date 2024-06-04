var radius = Number(prompt("Enter the circle radius : "));
var area = (Math.PI * (radius*radius));

alert("TOTAL AREA OF THE CIRCULE IS  :\n"+area);

var radius2 = Number(prompt("Enter another circle :"));
alert("Square root of " +radius2+" is "+ Math.sqrt(radius2));

var angle = Number(prompt("Enter angle to calc it's cos value"));
var angleCos = Math.round(Math.cos(angle * Math.PI/180));
document.writeln("<h1> Cos"+angle+" is "+angleCos +"</h1>")