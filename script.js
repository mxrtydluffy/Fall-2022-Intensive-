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
contentArray.forEach(divMaker)

// Adding new flashcards to file
function divMaker(text){
    const div = document.createElement("div");
    const h2_term = document.createElement("h2");
    const h2_definition = document.createElement("h2");

    // Adding flashcard style from CSS to give features
    div.className = 'flashcard';

    h2_term.setAttribute('style', "border-top:1px solid red; padding: 15px; margin-top:30px");

    h2_term.innerHTML = text.my_term;

    h2_definition.setAttribute("style", "text-align:center; display:none; color:red");
    h2_definition.innerHTML = text.my_definition;

    div.appendChild(h2_term);
    div.appendChild(h2_definition);

    // This event listener helps prevent seeing the answer from the screen
    div.addEventListener("click", function(){
        if(h2_definition.style.display == "none")
            h2_definition.style.display = "block";
        else
        h2_definition.style.display = "none";
    });

    // Adding div element to flashcards container
    flashcards.appendChild(div);
}

// "Save button"
function addFlashcard(){
    const flashcard_info = {
        'my_term' : term.value,
        'my_definition' : definition.value
    }

    //storing user input in dictionary
    contentArray.push(flashcard_info);
    localStorage.setItem,('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    term.value = '';
    definition.value = '';
}

// Deletes "Create Flashcard"
/* Empty string "''" 
"Delete Card" */
function deleteFlashcard(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

// Saving "Create Flashcard" || "Add Card"
function displayFlashcard(){
    createflashcard.style.display = "block";
}

// Making "Create Flashcard" disapear inorder to review || "Dismiss"
function hideCreateflashcard(){
    createflashcard.style.display = "none";
}