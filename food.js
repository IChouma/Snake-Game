import { randomGridPosition } from "./grid.js";
import { onSnake, expandSnake } from "./snake.js";

let food = getRandomFoodPosition();
let segment=document.querySelector(".segment input");

let EXPANSION_RATE = 1;
let segmentPlus=document.querySelector(".plus-segment");
let segmentMince=document.querySelector(".mince-segment");
segmentPlus.addEventListener("click",function(){
  EXPANSION_RATE+=1
  segment.value=Number(segment.value)+1;
});

segmentMince.addEventListener("click",function(){
  if(EXPANSION_RATE>=1){

    EXPANSION_RATE-=1
    segment.value=Number(segment.value)-1;
  }

});

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridColumnStart = food.x;
  foodElement.style.gridRowStart = food.y;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }

  return newFoodPosition;
}
