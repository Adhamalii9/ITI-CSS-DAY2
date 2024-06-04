var number = Number(prompt("ENTER A NUMBER :"));

if(number % 15 == 0){
    document.writeln("<p> FIZZ BUZZ</p>")
}
else if( number % 3 == 0){
    document.writeln("<p> FIZZ</p>")
}
else if( number % 5 == 0){
    document.writeln("<p> BUZZ</p>")
}
else     document.writeln("<p> NONE</p>")

