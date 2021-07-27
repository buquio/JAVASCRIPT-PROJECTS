// //Choose a random color
// const button = document.querySelector('button')
// const body = document.querySelector('body')
// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

// body.style.backgroundColor = 'violet'
// button.addEventListener('click', changeBackground)

// function changeBackground(){
//     const colorIndex= parseInt(Math.random()*colors.length)
//     body.style.backgroundColor = colors[colorIndex]
//     }


    //////////////
    const container = document.querySelector('.container');
    const button = document.querySelector('.btn');
    const colors = ['white', 'orange', 'purple', 'red', 'wine', 'grey', 'pink', 'yellow', 'brown']

    container.style.backgroundColor = 'blue'
    button.addEventListener('click', changeBackground)

    function changeBackground() {
        const selectedColor = parseInt(Math.random()*colors.length)
        container.style.backgroundColor = colors[selectedColor]
    }