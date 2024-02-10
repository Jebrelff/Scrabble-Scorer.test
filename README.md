# Scrabble Scorer

## Assignment Requirements

For this "Scrabble Scorer" assignment, you will create functions to
accomplish the following:

1. Convert the `oldScoreKey` object (with numbers as keys and arrays of letters
   as values) to a `newScoreKey` object that has 26 letter keys, each with a
   single number as the value.
1. Provide 3 different scoring methods for words.
1. Display some initial information about the program, then prompt the user to
   select a scoring method.
1. Prompt the user to enter a word, then display the calculated score for that
   word.

<!-- TODO: Add link back to textbook when merged -->

The output from your program should look similar to the example output in the textbook.

## How Your Assignment is Graded

### Grading Tests

Provided with the assignment starter code is a suite of unit tests. Remember that these are just a starting point for your TA to grade your work. 

To run the unit tests use the following command inside your terminal: `npm test`.
If your assignment passes all the tests, it will have an output of: `17 passed, 17 total`.

If you believe that your work meets all the requirements for the assignment and you are getting some test failures, don't hesitate to reach out to your TA for assistance!

### Beyond the Tests

The tests aren't the only way your TA will grade your work.
They will be looking for other things as well. 

1. Does your output look similar to the example?
1. You did NOT hard code `newScoreKey`.
1. Your code contains the functions `transform`, `initialPrompt`, and
   `runProgram`.
1. Your code contains a `scoringAlgorithms` array that contains three
   objects---one for each scoring system. Each object uses the keys `name`,
   `description`, and `scorerFunction`.
1. Your code is set up such that the value for each `scorerFunction` key is a function (named or anonymous)
   that takes in a single parameter and returns a point value.

When your TA runs your code, they will use test cases to see if your code is accurate. Here are some test cases so you can check the accuracy of your code.

| Test Word | Scrabble | Simple Scorer | Bonus Vowel |
| --------- |:--------:| :------------:| :-----------:|
| Fox       | 13       | 3             | 5           |
| zebra     | 16       | 5             | 9           |
| rhythm    | 17       | 6             | 6           |

Note: "rhythm" scores 8 if you count "y" as a vowel.

When you are ready, submit the link to your repo in Canvas.

