/* Getting access to the containers
    - Flashcard
    - Creating the flashcard
    - input boxes (Term & Definition) text areas
*/

const flashcards = document.getElementsByClassName
("flashcards")[0];
const createflashcard = document.getElementsByClassName
("create-flashcard")[0];
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

// Need function as soon project is run because we need to re-add flashcards to the screen
contentArray.forEach(divMaker);
// Adding new flashcards to file
function divMaker(text){
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");

    // Adding flashcard style from CSS
    div.className = 'flashcards';

    h2_question.setAttribute('style', "border-top:1px solid red; padding : 15px; margin-1top:30px");

    h2_question.innerHTML = text.my_question;

    h2_answer.setAttribute("style", "text-align:center; display:none; color:red");
    h2_answer.innerHTML = text.my_answer;

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    // This event listener helps prevent seeing the answer from the screen
    div.addEventListener("click", function(){
        if(h2_answer.style.display == "none")
            h2_answer.style.display = "block";
        else
        h2_answer.style.display = "none";
    });

    // Adding div element to flashcards container
    flashcards.appendChild(div);
}

"Save button"
function addflashcard(){
    var flashcard_info = {
        'my_question' : question.value,
        'my_answer' : answer.value
    }

    //storing user input in dictionary
    contentArray.push(flashcard_info);
    localStorage.setItem,('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    question.value = '';
    answer.value = '';
}

// Deletes flashcards
/* Empty string "''" 
"Delete Card" */
function deleteflashcard(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

// Saving "Create Flashcard" || "Add Card"
function displayflashcard(){
    createBox.style.display = "block";
}

// Making "Create Flashcard" disapear inorder to review || "Dismiss"
function hideCreateflashcard(){
    createBox.style.display = "none";
}