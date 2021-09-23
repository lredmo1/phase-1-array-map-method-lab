const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

// function titleCased(array) {
//   let finalArray = array.map(function updatedTutorials(string) {
//     let splitElement = string.split("");
//     let innerArrayOfWords = splitElement.map(function (words) {
//       let firstLetterUpperCase = words[0].toUpperCase();
//       let restOfWord = words.slice(1);
//       let upperCaseWord = firstLetterUpperCase + restOfWord;
//       return upperCaseWord;
//     })
//     let finalWord = innerArrayOfWords.join("");
//     return finalWord;
//   })
//   return finalArray;
// }


// function whatever(element) {
//   let arrayOfWords = element.split(" ");
//   let innerArray = arrayOfWords.map(function (elements) {
//     let capitals = elements[0].toUpperCase()
//     let combined = capitals + elements.slice(1)
//     // console.log(combined)
//     return combined;
//   })
//   let final = innerArray.join(' ')
//   // console.log(final)
//   return [final];
// }

// let updatedTutorials = tutorials.map(function (string) {
//   let splitElement = string.split("");
//   let lowerCaseElement = splitElement.toLowerCase();
//   let firstLetterUpperCase = lowerCaseElement[0].toUpperCase();
//   let firstLetterUpperCaseToString = firstLetterUpperCase.toString();
//   let restOfWord = lowerCaseElement.shift();
//   let restOfWordToString = restOfWord.toString()
//   let upperCaseWord = firstLetterUpperCaseToString + restOfWordToString;
//   return upperCaseWord;
// }
// )

// updatedTutorials();

const titleCased = () => {
  return tutorials.map((string) => {
    let splitElement = string.split(" ");
    let individualWords = splitElement.map((words) => {
      let firstLetterUpperCase = words[0].toUpperCase();
      let restOfWord = words.slice(1);
      let upperCaseWord = firstLetterUpperCase + restOfWord;
      return upperCaseWord;
    })
    let finalWord = individualWords.join(" ");
    return finalWord;
  })
}

titleCased(tutorials);
