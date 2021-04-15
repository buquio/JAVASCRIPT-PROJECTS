// immediate invoked function expression

(function() {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  //select both left and right button. Add event listeners
  const buttons = document.querySelectorAll('.btn')
  const imageDIV = document.querySelector('.img-container')
  let counter = 0

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('btn-left')){
        counter--
        if(counter < 0){//i,e less than pic1
          counter = pictures.length -1//means it will go back to the last pic4
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
      }
      if (button.classList.contains('btn-right')){
        counter++
        if(counter > pictures.length -1){ // greater than the last pic
          counter = 0 //it will go to the first pic
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
      }
    })
  })
})();
