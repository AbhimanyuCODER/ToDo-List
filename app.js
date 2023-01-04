
window.onload = function() {
	if(!window.location.hash) {
		window.location = window.location + '#loaded';
		window.location.reload();
	}
}
//local storage working

//if(typeof(Storage) !== "undefined"){
//    alert("Local  is working");
//}
//else{
//    alert("Please upgrade your browser");
//}
// declaration to get document element;
var addBtn = document.getElementById("add-task");
var todoInput = document.getElementById("todo-input");
var app = document.querySelector(".app");
var container = document.querySelector(".container");
var count = 0;
let p = 0;
var names = [];
var storedName = [];
let i = 1;
var bal = "";
// Event Listener for Enter key 

todoInput.addEventListener("keyup",function() {
    if(event.keyCode == 13){
        event.preventDefault();
        addBtn.click();
    }
})
    
// Event listener for Add Button

addBtn.addEventListener('click', function() {
    
         var parentDiv = document.createElement("Div");
         parentDiv.classList.add("common-cls", "trans");
         var inputField = document.createElement("input");
         inputField.type = "text";
         
         inputField.value = todoInput.value || storedName[i];
    if(inputField.value != 'undefined' && inputField.value != ""){
        
        var backColor = getRandomColor();
        parentDiv.style.background = backColor;
         names[count] = inputField.value;
       //////////////////////////////////
        localStorage.setItem("name", JSON.stringify(names));
      ///////////////////////////////////
         
        inputField.setAttribute("disabled", "true");
        inputField.classList.add("input-list");
        
        var inputFieldContainer = document.createElement("div");
        inputFieldContainer.classList.add("inputWidth");
        
        inputFieldContainer.appendChild(inputField);
        parentDiv.appendChild(inputFieldContainer);
    
        todoInput.value = "";
        
        var editDiv = document.createElement("DIV");
        editDiv.classList.add("edit-btns");
        
// Making Update button         
         
        var updateBtn = document.createElement("Button");
        updateBtn.classList.add("update", "visibal", "btn-cls"); 
        updateBtn.innerHTML = "UPDATE";
        editDiv.appendChild(updateBtn);
         
// Making Edit button         
         
        var editBtn = document.createElement("Button");
        editBtn.classList.add("edit", "btn-cls")
        editBtn.innerHTML = "EDIT";
        editDiv.appendChild(editBtn);
        
// Making remove button
         
        var removeBtn = document.createElement("Button");
        removeBtn.classList.add("remove", "btn-cls");
        removeBtn.innerHTML = "REMOVE";
        editDiv.appendChild(removeBtn);
        
    
        parentDiv.appendChild(editDiv);
        container.appendChild(parentDiv);

//    Edit Button
    
        editBtn.addEventListener('click', ()=> {
            inputField.disabled = false;
            inputField.style.borderBottom = "1px solid grey";
            updateBtn.classList.remove("visibal");
//            localStorage.clear();
            for(p = 0; p < JSON.parse(localStorage.getItem("name")).length; p++){
                if(JSON.parse(localStorage.getItem("name"))[p] === inputField.value){
//                    alert(p);
                    break;
                }
            }
        })

// Update Button
         
        updateBtn.addEventListener('click', () => {
            inputField.disabled = true;
            inputField.style.borderBottom = "none";
            updateBtn.classList.toggle("visibal");
            names[p] = inputField.value;
            localStorage.setItem("name", JSON.stringify(names));
            //alert(JSON.parse(localStorage.getItem("name")));
            
        })
        
// Update on Enter
        inputField.addEventListener("keyup",function() {
            if(event.keyCode == 13){
                event.preventDefault();
                updateBtn.click();
            }
        })

// Delete on click
         
        removeBtn.addEventListener('click', () => {
            
            var ar = [];
            var g = 0;
            for(p = 0; p < JSON.parse(localStorage.getItem("name")).length; p++){
                if(JSON.parse(localStorage.getItem("name"))[p] !== inputField.value && names[p] !== ""){
                    ar[g] = names[p];
                    g++;
                }else{
                    delete names[p];
                }
                
            }
                        parentDiv.remove();
            if(ar.length !== 0){
                names = ar;
            }
            localStorage.setItem("name", JSON.stringify(names));
            
        })
     
                count++;
}
    
})

var newlist = document.querySelector(".newList");
//newlist.classList.remove("dis-appear");

newlist.addEventListener('click', ()=> {
    localStorage.clear();
    location.reload();
})
    

// Local Storage Code         
         
if(localStorage.getItem("name") !== null) {
        if(performance.navigation.type == performance.navigation.TYPE_RELOAD) {
            storedName = JSON.parse(localStorage.getItem("name"));
            for(i = 0; i < storedName.length; i++){
                addBtn.click(); 
            }
        }
}

//////////// document script

function getRandomColor() {
  color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  return color;
}

//function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
//}
  

///scroll
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
