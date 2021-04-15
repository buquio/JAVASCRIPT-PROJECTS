
 (function() {
//Select the entire form
const form = document.querySelector('#message-form')
//Set up event listener on form/Submit Button
form.addEventListener('submit', function(e){
    // prevent the form's default submission action
    e.preventDefault()

    
        //Get user's input from the inputbox
    const message = document.querySelector('#message')
    const feedback = document.querySelector('.feedback')
    const messageContent = document.querySelector('.message-content')
// run alert if submit is clicked and inputbox is empty 
    if (message.value === ''){
        feedback.classList.add('show')
        setTimeout(function(){
        feedback.classList.remove('show')
        }, 2000)
    } else {
 //ELSE let message content be seen in another location on the page
        messageContent.textContent = message.value
        //also clear the message input
        message.value = ''
    }
})
})()



