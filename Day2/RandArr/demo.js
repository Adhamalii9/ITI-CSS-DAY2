var arr = [];

for (let index = 0; index < 5; index++) {
    arr[index] = prompt("ENTER NAME "+(index +1) +" : ");
}
var min = 0;
var max = 4;

function twoRandIndexes(){
    var ind1 , ind2;
    do{
        randomInd1 = Math.floor(Math.random() * arr.length)
        randomInd2 = Math.floor(Math.random() * arr.length)
    }
    while(randomInd1 === randomInd2)

    return [arr[randomInd1],arr[randomInd2]];
}

var [name1,name2] = twoRandIndexes();

document.writeln(`<p> FIRST : ${name1}\nSECOND : ${name2}</p>`);