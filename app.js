//console.log(HelloWorld);


// Question # 2
 /* const maxOfThree = (num1, num2, num3) => {
    let max = num1; 
  
    if (num2 > max) {
      max = num2; 
    }
  
    if (num3 > max) {
      max = num3; 
    }
  
    return max;
  };
  
  console.log(maxOfThree(10, 5, 8)); 
  console.log(maxOfThree(7, 12, 9)); 
  console.log(maxOfThree(3, 3, 3)); 
  */

  // Question #3
  /*function isCharAVowel(char) {
    const lowercaseChar = char.toLowerCase();
  
    if (
      lowercaseChar === "a" ||
      lowercaseChar === "e" ||
      lowercaseChar === "i" ||
      lowercaseChar === "o" ||
      lowercaseChar === "u"
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isCharAVowel("a")); 
  console.log(isCharAVowel("B")); 
  console.log(isCharAVowel("e")); 
  console.log(isCharAVowel("Z")); 
  */
// Question #4
 /* const sumArray = (numbers) => {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum;
  };
  
  console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
  console.log(sumArray([-1, 0, 1]));       // Output: 0
  console.log(sumArray([10, 20, 30]));     // Output: 60
    */

  //Question #5
  /*function multiplyArray(numbers) {
    let product = 1;

    for (let i = 0; i < numbers.length; i++) {
      product *= numbers[i];
    }
    return product;
  }

  console.log(multiplyArray([1, 2, 3, 4, 5]));
  console.log(multiplyArray([-1, 2, -3])) /
  console.log(multiplyArray([10, 2, 5]))
  */

  //Question #6
 /* const numArgs = function() {
    return arguments.length;
  };

  console.log(numArgs(1, 2, 3));
  console.log(numArgs("Hello", true, 5));
  console.log(numArgs());
  */

  //Question # 7
  /*function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

  console.log(reverseString("Hello"));
  console.log(reverseString("JavaScript"));
  console.log(reverseString("12345"));
  */

  //Question #8
  /*const longestStringInArray = function(strings) {
    let longestLength = 0;
   
    for (let i = 0; i < strings.length; i++) {
      const currentlength = strings[i].length;
      
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
    }
    return longestLength;
  };

  console.log(longestStringInArray(["apple", "banana", "cherry"]));
  console.log(longestStringInArray(["hello", "world", "how", "are", "you"]));
  console.log(longestStringInArray([]));
  */

  /*const longestStringInArray = function(strings) {
    let longestLength = 0;
  
    for (let i = 0; i < strings.length; i++) {
      const currentLength = strings[i].length;
  
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
    }
  
    return longestLength;
  };
  
  console.log(longestStringInArray(["apple", "banana", "cherry"]));     // Output: 6
  console.log(longestStringInArray(["hello", "world", "how", "are", "you"]));  // Output: 5
  console.log(longestStringInArray([]));                                // Output: 0
  */

  //Question #9
 /* function stringsLongerThan(strings, length) {
    const longerStrings = [];

    for (let i =0; i < strings.length; i++) {
      if (strings[i].length > length) {
        longerStrings.push(strings[i]);
      }
    }

    return longerStrings;
  }

  console.log(stringsLongerThan(["apple", "banana", "cherry"]));
  console.log(stringsLongerThan(["hello", "world", "how", "are", "you"], 3));
  console.log(stringsLongerThan(["cat", "dog", "elephant"], 8));
  console.log(stringsLongerThan([], 2)); */

  /*function stringsLongerThan(strings, length) {
    const longerStrings = [];
  
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].length > length) {
        longerStrings.push(strings[i]);
      }
    }
  
    return longerStrings;
  }
  
  console.log(stringsLongerThan(["apple", "banana", "cherry"], 5));       // Output: ["banana", "cherry"]
  console.log(stringsLongerThan(["hello", "world", "how", "are", "you"], 3));  // Output: ["hello", "world"]
  console.log(stringsLongerThan(["cat", "dog", "elephant"], 8));          // Output: ["elephant"]
  console.log(stringsLongerThan([], 2));                                 // Output: []
  */