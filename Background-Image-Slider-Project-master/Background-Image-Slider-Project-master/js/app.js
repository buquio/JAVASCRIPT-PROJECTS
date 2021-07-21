// immediate invoked function expression

(function() {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  
  const buttons = document.querySelectorAll('.btn') //select both left and right button. Add event listeners
  const imageDIV = document.querySelector('.img-container')
  let counter = 0

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('btn-left')){
        counter--  //count is -1
        if(counter < 0){ //if -1 < 0   =true
          counter = pictures.length -1//means counter will be the last pic4
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
      }
      if (button.classList.contains('btn-right')){
        counter++   //count is 1
        if(counter > pictures.length -1){ // if 1 >greater than the last pic(-1)
          counter = 0 //it will go to the first pic
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
      }
    })
  })
})();
