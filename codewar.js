
const reverseString = (str) => {
    let reversed = str.split("").reverse().join("");
    console.log(reversed)
    }

    reverseString("hello");

// function reverseString(str) {
//     let splitString = str.split("");
  
//     let reverseArray = splitString.reverse();
  
//     let joinArray = reverseArray.join("");
  
//     return joinArray;
//   }
  
//   console.log(reverseString("hello"));

// const string = "name";
// const string1 ="Name";

// function check (string, string1){
//     if(string.toUpperCase() === string1.toUpperCase()){
//         console.log(`${string} equals ${string1}`)
//     }else{
//         console.log("What ever")
//     }
// }

// check(string, string1);