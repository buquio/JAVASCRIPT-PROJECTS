var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");


//1.CREATE "LI" AND FILL IT WITH TEXT FROM INPUT
function createListElement() { // creates an element "li"
	var li = document.createElement("li"); 
    //create textnode with input as parameter
    //appendchild textnode to li i.e input will fill the li 
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field

	//1b. ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	
	//1c.ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
}
    //1d.ADD TOGGLE COLOR STRIKETHROUGH
	// because it's in the function, it only adds it for new list items
	function crossOut() {
		li.classList.toggle("done");
	}
	li.addEventListener("click",crossOut);
	
//INPUT & LIST MUST RETURN VALUE.LENGTH
function inputLength(){ //the input must return its value
	return input.value.length;
} 

function listLength(){ //the listlength must= itemlength
	return item.length;
}
//2.EMPTY INPUT MUSTN'T CREATE LI IF BUTTON IS CLICK (3 steps)
function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}


//3.CHECKS IF YOU CLICK ENTER-BUTTON OR PRESS ENTER-KEYBROAD
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);