// CREATE A CONTAINER VAR
const container = document.getElementById('container');
//CREATE A ARRAY OF COLORS
const colors = ['#08d9d6','#2aa2ee6','#ff2e63','#8fd6e1'];
//CREATE THE SQUARES
const SQUARE = 440;

 
//LOOP OVER THE SQUARES
for(var i = 0; i <= SQUARE; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

//ADD EVENT LISTENER FOR MOUSE OVER
  square.addEventListener('mouseover', () => setColor(square))
  //ADD EVENT FOR MOVER LEAVING
  square.addEventListener('mouseout', () => removeColor(square))
  //APPEND THE SQUARE TO THE CONTAINER
  container.appendChild(square)
}



//CREATE FUNCTION FOR SETING THE COLOR
function setColor(element){
  const color = randomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}
  `
}

//CREATE A FUNCTION FOR REMOVING THE COLOR
function removeColor(element){
  element.style.background = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

//CREATE A RANDOM COLOR FUNCTION  
function randomColor(){
  return colors[Math.floor(Math.random() * colors.length)]
}