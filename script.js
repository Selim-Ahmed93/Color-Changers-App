
const randomButton = document.getElementById('randomBtn');
const applyButton  = document.getElementById('applyBtn');
const inputBox     = document.getElementById('inputBox');
const currentColor = document.getElementById('currentColor');
const mainContainer = document.querySelector('.container')

const colorArray = ["red","white","blue","black","LightCoral","cyan","tomato","Aqua","yellow","yellowGreen"];

const randomColorGenerator = () => {
  const randomNumber =Math.floor( Math.random()*colorArray.length);
  return colorArray[randomNumber]
};

const randomBtnHandler = () =>{
 let color = randomColorGenerator();
 colorChange(color);
}
const applyBtnHandler = () =>{
  const color = inputBox.value;
  colorChange(color);
}
const colorChange = (color) => {
  
  mainContainer.style.backgroundColor = color;
  
  currentColor.innerText = color;
}

randomButton.addEventListener('click',randomBtnHandler);
applyButton.addEventListener('click',applyBtnHandler);
