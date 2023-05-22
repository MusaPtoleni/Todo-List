const food = ["Bread", "Chicken", "Egg", "Ham"];

//adding the updated list
function cart(){
  let count= "";
  let ul = document.querySelector("ul");
  for(let i=0; i<food.length;i++){
    count += `<li>
                ${food[i]}
                <span onclick="dell()" class="close">\u00D7</span>
              </li>`
  }
  ul.innerHTML = count;
  {once: true}
}

//Creating a new list element and appending new items to it.
document.getElementById("addBtn").addEventListener("click", () => {
  const int = document.getElementById("input").value;
  const li = document.createElement("li");
  const ul = document.querySelector("ul");

  //Creating span element to delete items in the list
  let spans = document.createElement("span");
  spans.setAttribute("class","close");
  spans.setAttribute("onclick","dell()");
  spans.innerHTML = "\u00D7";

  if(int === ""){
    alert("Please insert an item");
  }
  else{
    li.textContent = int;
    ul.appendChild(li);
    li.appendChild(spans);
    food.push(int);
  }
  //resting the input area to an empty string.
  document.querySelectorAll("input")[0].value = "";
}); 

document.getElementById("showCart").addEventListener("click", () => {
  let spans = document.createElement("span");
  spans.setAttribute("class","close");
  spans.setAttribute("onclick","dell()");
  cart();
});


//Pressing Enter to add to the list
const inputValue = document.getElementById("input");
inputValue.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("addBtn").click();
    document.querySelectorAll("input")[0].value = "";
  }
});


//Adding class on toggle
const addToggle = document.getElementById("itemList");
addToggle.addEventListener("click", (e) => {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
});

//removing items from the list and array
const removeSpan = document.getElementById("itemList");

removeSpan.addEventListener("click", (e) => {
  let key = e.target;
  // getting the value of the firstChild of the parent li
  let value = e.target.parentNode.firstChild.value 
  let index = food.indexOf(value);
  if(key.matches(".close") || index > -1){
    e.preventDefault();
    key.parentNode.remove();
    food.splice(index,1);
  }
});



