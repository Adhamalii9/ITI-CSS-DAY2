 var arr = [];

 var sum = 0;
 var mult = 1;
 var div = 1.0;

 
  
 for (let index = 0; index < 3; index++) {
    arr[index] = Number(prompt("ENTER NUMBER "+(index+1)));
    sum += arr[index];
    mult *= arr[index];
    if(index == 0 ){
        div = arr[index];
    }
    else div /= arr[index];
 }

 document.writeln("<h2 style = \"color: Red;\"s> Sum of 3 values : "+"<span style = color:black>"+sum+"</span>"+"</h2>")
 document.writeln("<h2 style = \"color: Red;\"s> Multiplication of 3 values : "+"<span style = color:black>"+mult+"</span>"+"</h2>")
 document.writeln("<h2 style = \"color: Red;\"s> Division of 3 values : "+"<span style = color:black>"+div+"</span>"+"</h2>")
