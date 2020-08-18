// Select the Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST = [];
let id = 0;

// get item from local storage

//add item to localstorage
localStorage.setItem

// Show today's date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-UK", options);

// Add to do function
function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const text = `<li class="item">
<i class="fa fa-circle-thin ${DONE}" job="complete" id="${id}"></i>
<p class="text ${LINE}">${toDo}</p>
<i class="de fa fa-trash-o" job="delete" id="${id}"></i>
</li>`;

  const position = "beforeend";

  list.insertAdjacentElement(position.item);
}

// Store a to-do
document.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    const toDo = input.value;
    if (toDo) {
      addToDo(toDo);

      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false
      });
      id++
    }
    input.value = "";
  }
});

function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  LIST[element.id].done = LIST[element.id].done? falese : true;
}

function reomoveToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id].trash = true;
} 

// target the items created dynamically

list.addEventListener("click",function(event){
    const element = event.target;//return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete

    if (elementJob == "complete") {
completeToDo(element);
    }else if(elementJob == "delete"){
        reomoveToDo(element);
    }
})
