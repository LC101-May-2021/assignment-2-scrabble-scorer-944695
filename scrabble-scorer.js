// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return console.log(letterPoints);
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {

   //console.log("Let's play some scrabble! Enter a word:");

   console.log("Let's play some scrabble!\n");

   let word = input.question("Enter a word to score: ");

  let isAllLetters = false;

  while (isAllLetters === false)
  {
    let count = 0;
   for (let i = 0; i < word.length; i++)
   {
     
     if ((word[i].toUpperCase() != word[i].toLowerCase()) || (word[i] === " "))
     {
       count++;
     }
   }
     
     // True is all characters in the entered word are letters
     if (count === word.length)
     {
       isAllLetters = true;
     }
     else
     {
       console.log("Invalid input!\nOnly letters are allowed.\n");
     word = input.question("Enter a word to score: ");
     }
  
     
   }

   return word;
}

let simpleScore = function (word)
{
  let score = 0;

  for (let i = 0; i < word.length; i++)
  {
    if (word[i] !== " ")
    {
      score++;
    }
  }

  return score;
};

let vowelBonusScore = function (word){
    let score = 0;
    
    for (let i = 0; i < word.length; i++){

    if ((word[i] ===  "a") || (word[i] ===  "e") || (word[i] ===  "i") || (word[i] ===  "o") || (word[i] ===  "u") || (word[i] ===  "A") || (word[i] ===  "E") || (word[i] ===  "I") || (word[i] ===  "O") || (word[i] ===  "U") )
    {
      score = score + 3;
    }
    else if ((word[i]) === " ")
    {

    }
    else
    {
      score = score + 1;
    }
  }

  return score;
}
;

let scrabbleScore = function (word)
{
  word = word.toLowerCase();

  let score = 0;

  for (let i = 0; i < word.length; i++) {
 
	  for (const letter in newPointStructure) {
      //console.log(String(letter));
      //console.log(String(word[i]));
      //console.log(Object.values(newPointStructure)[i]);
		 if (String(letter) === String(word[i]))
     {
       

       
       score += (newPointStructure)[letter];

       //console.log("String(letter) = " + String(letter) + ", String(word[i]) = " + String(word[i]) + ", " + " value = " + newPointStructure[letter]);
      
     }
     
    
	  }
	}
	return score;

}
  ;

const scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scorerFunction: "simpleScore",

  },
  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scorerFunction: "vowelBonusScore",

  },
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scorerFunction: "scrabbleScore",
  } 
 ] ;

function scorerPrompt() {
  let scoringMethod = input.question("Which scoring algorithm would you like to use?\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");

  console.log("The entered scoring method is " + scoringMethod);

  scoringMethod = String(scoringMethod);

  let validScoringMethod = false;

  while(validScoringMethod === false)
  {
   if ((scoringMethod === "0") 
    || (scoringMethod === "1") 
    || (scoringMethod === "2"))
    {
      validScoringMethod = true;
    }
    else
    {
      console.log("Invalid option entered!\n")
    scoringMethod = input.question("Which scoring algorithm would you like to use?\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");
    console.log("The entered scoring method is " + scoringMethod);

    }
  }
    
  return scoringAlgorithms[scoringMethod];
}

function transform(structure) {
/*
onst swapped = Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));

console.log( typeof (Object.keys(swapped)));




const lowercaseKeys = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});




  return lowercaseKeys(swapped);


*/

  
  for (item in structure)
  {
    //structure[item] = structure[item].toLowerCase();
  }
  return console.log(structure);
};

//let newPointStructure = transform(oldPointStructure);
let space = " ";
let newPointStructure = {

  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
  space : 0

};

function runProgram() {
   let word = initialPrompt();
   oldScrabbleScorer(word);
   let score = 0;
   let functionName = scorerPrompt();
  if (functionName.name === "Simple Score")
  {
    score = simpleScore(word);

  }
  
  if (functionName.name === "Bonus Vowels")
  {
    score = vowelBonusScore(word);
  }

  if (functionName.name === "Scrabble")
  {
    score = scrabbleScore(word);
  }
  
  console.log(`Score for ${word}: ${score}\n`);
  console.log(transform(oldPointStructure));
  
  
   //console.log(scoringChoice);
    
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

