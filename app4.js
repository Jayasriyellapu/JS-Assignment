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




//JavaScript function to find the unique elements from two arrays
// function difference(arr1,arr2) {
  
//     var a1= flatten(arr1,true);
//     var a2= flatten(arr2,true);
    
//    var a=[], diff=[];
//     for(var i=0;i< a1.length;i++)
//       a[a1[i]]=false;
//     for(i=0;i< a2.length;i++)
//     if(a[a2[i]]===true) 
//        { delete a[a2[i]];}
//       else a[a2[i]]=true;
//     for(var k in a)
//       diff.push(k);
//     return diff;   
//     }
  
//   var flatten = function(a, s,r){
//     if(!r){ r = [];}
//   if (s) {
//     return r.concat.apply(r,a);
//     }  
//      for(i=0; i< a.length; i++){
//           if(a[i].constructor == Array){
//               flatten(a[i],s,r);
//           }else{
//               r.push(a[i]);
//           }
//       }
//       return r;
//   };
//   document.write(difference([1, 2, 3], [100, 2, 1, 10]));









// function getAge(dateString) 
// {
//     var today = new Date();
//     var birthDate = new Date(dateString);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
//     {
//         age--;
//     }
//     return age;

// document.write(getAge());
// if (age>18 && age<44){
//         document.write("https://selfregistration.cowin.gov.in");
//     }
//     else{
//         document.write("age is not matched")
//     }
// }












