

var inputconfirm = confirm("ARE YOU A FLY");

if(inputconfirm == true ){
    var inputconfirm = confirm("ARE YOU WILD");
    if(inputconfirm == true ){
        document.write("<p>YOU'RE EAGLE</p>")
    }
    else document.write("<p>YOU'RE PARROT</p>")

}
else{
    var inputconfirm = confirm("DO YOU LIVE UNDERSEA");
    if(inputconfirm == true ){
        var inputconfirm = confirm("ARE YOU WILD");
         if(inputconfirm == true ){
        document.write("<p>YOU'RE SHARK</p>")
    }
    else document.write("<p>YOU'RE DOLPHIN</p>") 
    }
    else{
        var inputconfirm = confirm("ARE YOU WILD");
         if(inputconfirm == true ){
        document.write("<p>YOU'RE LION</p>")
    }
    else document.write("<p>YOU'RE CAT</p>") 
    }
    
}