class App {
  constructor() {
    this.notes = JSON.parse(localStorage.getItem('notes')) || [];
    this.title = "";
    this.text = "";
    this.id = "";

    this.$placeholder = document.querySelector("#placeholder");
    this.$form = document.querySelector("#form");
    this.$notes = document.querySelector("#notes");
    this.$noteTitle = document.querySelector("#note-title");
    this.$noteText = document.querySelector("#note-text");
    this.$formButtons = document.querySelector("#form-buttons");
    this.$formCloseButton = document.querySelector("#form-close-button");
    this.$modal = document.querySelector(".modal");
    this.$modalTitle = document.querySelector(".modal-title");
    this.$modalText = document.querySelector(".modal-text");
    this.$modalCloseButton = document.querySelector(".modal-close-button");
    this.$colorTooltip = document.querySelector("#color-tooltip");

    this.render();
    this.addEventListeners();
  }

    //0. section addEventListeners: determine all fxn that will require click-event  
    //1. section form: open,close,submit,close-btn,addnote,render,save,display+notes container
    //2. section Tooltip:  mouseover,mouseout,close,open
    //3. section colorTooltip: mouseover,mouseout
    //4. section modal: open,close,close-btn,edit,select,delete
  
//0.
  addEventListeners() {
    document.body.addEventListener("click", event => {
      this.handleFormClick(event);
      this.selectNote(event);
      this.openModal(event);
      this.deleteNote(event);

    });
    // 2a. 
    document.body.addEventListener("mouseover", event => { //this will show d whole tooltip(delete+colortip)
      this.openTooltip(event);
    });
//2b.
    document.body.addEventListener("mouseout", event => {
      this.closeTooltip(event);
    });
// 3a
    this.$colorTooltip.addEventListener("mouseover", function() {
      this.style.display = "flex";
    });

  // 3b  
  this.$colorTooltip.addEventListener("mouseout", function() {
      this.style.display = "none";
    });

     this.$colorTooltip.addEventListener("click", event => {
      const color = event.target.dataset.color;
    if (color) { //.
        this.editNoteColor(color);
      }
    });
//1d. handle form-submit button
    this.$form.addEventListener("submit", event => {
      event.preventDefault();
      const title = this.$noteTitle.value;
      const text = this.$noteText.value;
      const hasNote = title || text;
      if (hasNote) { // add note
        this.addNote({ title, text });
      }
    });
//1c. handle form-close button
    this.$formCloseButton.addEventListener("click", event => {
      event.stopPropagation();
      this.closeForm();
    });
//4b. handle modal-close button
    this.$modalCloseButton.addEventListener("click", event => {
      this.closeModal(event);
    });



  } ////////////////closes addEventListeners() 



//1a first initial click to open form
  handleFormClick(event) { 
    const isFormClicked = this.$form.contains(event.target);

    const title = this.$noteTitle.value;//value frm placeholder
    const text = this.$noteText.value;
    const hasNote = title || text;

    if (isFormClicked) {
      this.openForm();
    } else if (hasNote) {
      this.addNote({ title, text });
    } else { //any other click(outside d form) should close the form
      this.closeForm();
    }
  }
//1b
  openForm() {
    this.$form.classList.add("form-open");
    this.$noteTitle.style.display = "block";
    this.$formButtons.style.display = "block";
  }
// 1cc.
  closeForm() {
    this.$form.classList.remove("form-open");
    this.$noteTitle.style.display = "none";
    this.$formButtons.style.display = "none";
    this.$noteTitle.value = "";
    this.$noteText.value = "";
  }
//4a.
  openModal(event) { //similar to selectnote?
    if (event.target.matches('.toolbar-delete')) return;  
      
    if (event.target.closest(".note")) {
      this.$modal.classList.toggle("open-modal");
      this.$modalTitle.value = this.title;
      this.$modalText.value = this.text;
    }
  }
//4bb.
  closeModal(event) {//closemodal also enables editnote b/4 closing modal
    this.editNote();
    this.$modal.classList.toggle("open-modal");
  }
	  
//	  changing note color:
// -add some color-option to html file 
// -open the Tooltip
// -add a color tootip coords as below
//2aa. & 3aa/3bb
    openTooltip(event) {
    if (!event.target.matches('.toolbar-color')) return;
    this.id = event.target.nextElementSibling.dataset.id; 
    const noteCoords = event.target.getBoundingClientRect();
    const horizontal = noteCoords.left + window.scrollX;
    const vertical = noteCoords.top + window.scrollY;
//        for scrimba
    //const horizontal = noteCoords.left;
    //const vertical = window.scrollY - 20;
    this.$colorTooltip.style.transform = `translate(${horizontal}px, ${vertical}px)`;
    this.$colorTooltip.style.display = 'flex';
  }
    
//2bb.
  closeTooltip(event) {
    if (!event.target.matches(".toolbar-color")) return;
    this.$colorTooltip.style.display = "none";
  }
//1dd
  addNote({ title, text }) {
    const newNote = {
      title,
      text,
      color: "white",
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1
    };
    this.notes = [...this.notes, newNote];
    this.render();
    this.closeForm();
  }
//4c
  editNote() {
    const title = this.$modalTitle.value;
    const text = this.$modalText.value;
    this.notes = this.notes.map(note =>
      note.id === Number(this.id) ? { ...note, title, text } : note
    );
    this.render();
  }
//3c
  editNoteColor(color) {
    this.notes = this.notes.map(note =>
      note.id === Number(this.id) ? { ...note, color } : note
    );
    this.render();
  }
//4d
  selectNote(event) { //to be indicate id of seleted note in order to delete
    const $selectedNote = event.target.closest(".note");
    if (!$selectedNote) return;
    const [$noteTitle, $noteText] = $selectedNote.children;
    this.title = $noteTitle.innerText;
    this.text = $noteText.innerText;
    this.id = $selectedNote.dataset.id;
  }
  //4e
  deleteNote(event) {
    event.stopPropagation();
    if (!event.target.matches('.toolbar-delete')) return;
    const id = event.target.dataset.id;
    this.notes = this.notes.filter(note => note.id !== Number(id));
    this.render();
  }
// 1e.  
  render() {
    this.saveNotes();
    this.displayNotes();  
  }
  //1f.
  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes)) 
//changes to JSON.parse(horizontal),check above
  }
//1g.
  displayNotes() { //inside notes-array
    const hasNotes = this.notes.length > 0;
    this.$placeholder.style.display = hasNotes ? "none" : "flex";

    this.$notes.innerHTML = this.notes
      .map(
        note => `
        <div style="background: ${note.color};" class="note" data-id="${note.id}">
          <div class="${note.title && "note-title"}">${note.title}</div>
          <div class="note-text">${note.text}</div>
          <div class="toolbar-container">
            <div class="toolbar">
              <img class="toolbar-color" data-id=${note.id} src="https://icon.now.sh/palette">
              <img data-id=${note.id} class="toolbar-delete" src="https://icon.now.sh/delete">
            </div>
          </div>
        </div>
     `
      )
      .join("");
  }
}

new App();
