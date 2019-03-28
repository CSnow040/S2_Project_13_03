"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Caleb Snow
   Date:   3/27/19
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/

//these are all of the variables that will be used in this javascript document
var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection;

//this allows the init to be ran first
window.onload = init;

//this init function runs the cammands inside of it right as the javascript runs on the website
function init() {
      allLetters = document.querySelector("table#crossword span");
      currentLetter = allLetters[0];
      var acrossID = currentLetter.dataSet.clueA;
      var downID = currentLetter.dataSet.clueD;
      acrossClue = document.getElementById("acrossClue");
      downClue = document.getElementById("downClue");
}

//this makes a function of formatPuzzle
function formatPuzzle(puzzleLetter) {
      currentLetter = puzzleLetter;
      //this for loop loops through all of the items in the allLetters array and changes all background styles to lose all their color in the puzzle
      for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.background = "";
      }
      acrossClue.style.color = "";
      downClue.style.color = "";

      if (currentLetter.dataSet.clueA != 'undefined') {
            acrossClue = currentLetter.dataSet.clueA;
            acrossClue.style.color = "blue";
            wordLetters = document.getElementById("data-clue-A");
            wordLetters = document.querySelectorAll().style.background = "rgb(231, 231, 255)";
      }
}






/*====================================================*/

function getChar(keyNum) {
      return String.fromCharCode(keyNum);
}