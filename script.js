const notesContainer =document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box")

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes")|| "";
    attachEventListeners();
}
showNotes();
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML)
}

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img= document.createElement("img");
    inputBox.className ="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img) ;
    updateStorage(); 
})
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes.querySelectorAll(".input-box");
        notes.forEach(ele=>{
            ele.onkeyup = function(){
                updateStorage();
            }
        })
    }

})

function attachEventListeners() {
    // Reattach event listeners to all input-box elements
    notesContainer.querySelectorAll(".input-box" , "img").forEach(ele => {
        ele.onkeyup = function () {
            updateStorage();
        };
    });
}

document.addEventListener("keydown", event => {
    if(event.key== "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})