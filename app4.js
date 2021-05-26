// 1--->
// let num1 =parseInt(prompt("Enter a number1: "));
// let num2 =parseInt(prompt("Enter a number2: "));
// let num3 =parseInt(prompt("Enter a number3: "));

// if(num1>num2){
//         document.write("the larger number is"+num1);
//     }
//     else if(num2>num3)
//         document.write("the larger number is"+num2);
    
//     else{
//         document.write("the larger number is "+num3);
//     }




// program to check if the string is palindrome or not

// function checkPalindrome(str) {
//    const len = string.length;
//      for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// const string = prompt('Enter a string: ');
// const value = checkPalindrome(string);
// document.write(value);


//program to check whether a given integer is within range of 50-100 or not.
// let num=parseInt(prompt("enter the number:"));
// if(num>50 && num<100){
//     document.write("the num is with in the range");
// }
// else{
//     document.write("the num is not in the range" );
// }



// // convert temperatures from Celsius, Fahrenheit and Fahrenheit to Celsius
// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'C is ' + cToFahr + ' F.';
//     document.write(message);
// }
// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+' F is ' + fToCel + 'C.';
//     document.write(message);
// } 
// cToF(60);
// fToC(50);


//number of vowels from a user input string.

// function vowelcount(str1)
// {
//   var vowellist = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowellist.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// document.write(vowelcount("Hey This is Skillsanta JS Training"));



//for loop that will iterate from 20 to 30
// for (var x=20; x<=30; x++) {
//     if (x === 0) {
//             document.write(x +  " is even");
//     }
//     else if (x % 2 === 0) {
//             document.write(x + " is even");   
//     }
//     else {
//             document.write(x + " is odd");
//     }
// }



//JavaScript function to remove HTML/XML tags from string.

// function strip_html_tags(str)
// {
//    if ((str===null) || (str===''))
//        return false;
//   else
//    str = str.toString();
//   return str.replace(/<[^>]*>/g, '');
// }

// document.write(strip_html_tags("<p><strong><em>SkillSanta Assignments</em></strong></p>"));






// //passing a function as parameter 
// function goToWork(myCallBackFunction) {
//     myCallBackFunction();
// }

// function refreshPage() {
//     alert("I should be refreshing the page");
// }

// goToWork(refreshPage);