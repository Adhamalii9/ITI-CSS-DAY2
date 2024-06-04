var inputString = prompt("ENTER A STRING");

var inputConfirm = confirm("CASE SENSITIVITY CONSIDERED ?");

var isPalindrome = true;
if(inputConfirm == false){
    inputString = inputString.toLowerCase();
}

var j = inputString.length-1;
    for (let i = 0; i < inputString.length/2; i++) {
        if(inputString.charAt(i) != inputString.charAt(j)){
            isPalindrome = false;
            break;
        }
        j--;
    }

if(isPalindrome == true)
    alert("THE STRING IS PALINDROME")

else if(isPalindrome == false)
    alert("THE STRING IS NOT PALINDROME")

