/* Getting access to the containers
    - Flashcard
    - Creating the flashcard
    - input boxes (Term & Definition) text areas
*/

const flashcard = document.getElementsByClassName
("flashcards")[0];
const createBox = document.getElementsByClassName
("create-box")[0];
const term = document.getElementById("term");
const definition = document.getElementById("definition");

// Creating array which will store data

/* Observations
    - localStorage helps store information. This is the first localStorage
    there is nothing to add more.
    - Question mark represents a condition operator similar like
    if, else, elseif in python. However it has to be paired with a ":". 
    - "[]" helps fill the content array. */

let contentArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

// Deletes flashcards
/* Empty string "''" */
function deleteFlashcards(){
    localStorage.clear();
    flashcard.innerHTML = '';
    contentArray = [];
}

contentArray.forEach(divMaker)
// Adding new flashcards to file
function divMaker(text){
    var div = document.createElement
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");

    // Adding flashcard style from CSS
    div.className = 'flashcard';

}

function displayFlashcard(){
    var flashcard_info = {
        'my_question' : question.value,
        'my_answer' : answer.value
    }

    //storing user input in dictionary
    contentArray.push(flashcard_info);
    localStorage.setItem,('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1])
    question.value = '';
    answer.value = '';
}

// Making "Create Flashcard" dissapear inorder to review
function hideCreateflashcard(){
    createBox.style.display = "block";
}

function showCreateflashcard(){
    createBox.style.display = "show";
}