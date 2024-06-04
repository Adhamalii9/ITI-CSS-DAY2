var arr = [];

for (let index = 0; index < 5; index++) {
   arr[index] = Number(prompt("Enter number " + (index + 1) + " :"));
 }

 arr.sort(function(a, b){return a- b});


 for (let index = 0; index < 5; index++) {
    document.writeln("<h2 style = \"color: Red;\"s> Value : "+"<span style = color:black>"+arr[index]+"</span>"+"</h2>")
 }


