// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

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
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

// Function to check if the word is consisting of only letters
function isValidWord(word) {
   for (let char of word) {
      if (! ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) {
         return false;
      }
   }
   return true;
}

function initialPrompt() {
   console.log("Let's play some Scrabble!\n");
   let word;
   do {
      word = input.question("Enter a word to score: ");
   } while (!isValidWord(word));
   return word;
};

const simpleScorer = (word) => {
   return word.length;
};

const vowelBonusScorer = (word) => {
   let vowels = "aeiou";
   let score = 0;
   for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
         score += 3;
      } else {
         score++;
      }
   }
   return score;
};

const scrabbleScorer = (word) => {
   let score = 0;
   for (let i = 0; i < word.length; i++) {
      score += newPointStructure[word[i].toLowerCase()];
   }
   return score;
}

const scoringAlgorithms = [{
   name: "Simple Score",
   description: "Each letter is worth 1 point.",
   scorerFunction: simpleScorer
}, {
   name: "Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction: vowelBonusScorer
}, {
   name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scorerFunction: scrabbleScorer
}];

function scorerPrompt() {
   console.log("Which scoring algorithm would you like to use?\n");
   for (let i = 0; i < scoringAlgorithms.length; i++) {
      console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
   }

   let choice;
   do{
      choice = input.question("Enter 0, 1, or 2: ");
   }while(choice != 0 && choice != 1 && choice != 2)
   return scoringAlgorithms[choice];
}

function transform(oldPointStructure) {
   let newPointStructure = {};
   for (const value in oldPointStructure) {
      for (let i = 0; i < oldPointStructure[value].length; i++) {
         newPointStructure[oldPointStructure[value][i].toLowerCase()] = Number(value);
      }
   }
   return newPointStructure;
};

const newPointStructure = {
   ' ': 0,
   ...transform(oldPointStructure)
};

function runProgram() {
   let word = initialPrompt();
   let algorithm = scorerPrompt();
   console.log(`Score for '${word}': ${algorithm.scorerFunction(word)}`);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
