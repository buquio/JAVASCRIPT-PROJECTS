var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

enterButton.addEventListener("click",addListAfterClick);

function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field to empty


	//create STRIKETHROUGH
	// it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}
	li.addEventListener("click",crossOut);


	// create DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));//create X inside dbtn
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);


	//create DELETE FUNCTION
	function deleteListItem(){
		li.classList.add("delete")//add class deletei.e display:none
	}
}

	//create ADD-LIST FUNCTION
// function addListAfterClick(){
// 	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
// 		createListElement();
// 	}
// }

	//create FUNCTION to handle KEYPRESS i.e 'ENTER' button
	function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //handles if you hit "enter"/"return"
		//the 13 is the enter-key's keycode, 
		//this could also be verified by event.keyCode === 13
		createListElement();
	} 
}


// enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress); 

