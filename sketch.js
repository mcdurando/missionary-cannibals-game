var imgMissionary;
var imgCannibal;
var imgBoat;
var imgSun;
var imgTree;
var imgCloud, imgNull;
var imgKilledMissionary;
var imgCannibalBlood;
var imgFight1 , imgFight2 , imgFight3 ;

var imgPierre ;
var imgGrass ;

// Pas du coq
var p ;

var gifCoq;

// TEST
var gifFightLeft, gifFightRight , gifNull ;
var part;

let initialState = [3, 3, 1];
let goalState = [0, 0, 0];
let state = [];
let killedState = [];
let iterator = true;

// create an object for individual state
class CreateState {
  constructor() {
    this.value;
    this.parent;
    this.visited;
    this.x;
    this.y;
  }
}
// Creating a root node.
var rootNode = new CreateState();
rootNode.value = initialState;
rootNode.parent = initialState;
rootNode.visited = false;

function preload() {

  //gifCoq = createImg("img/coq2.gif");

}


function setup() {

  frameRate(3);
  createCanvas(windowWidth, windowHeight - 100);
  // set x and y position of the root node.
  rootNode.x = windowWidth / 2;
  rootNode.y = 70;
  state.push(rootNode);
  while (iterator) {
    applyOperation(state[state.length - 1])
  }

  // IMAGES
  imgMissionary = loadImage('img/missionnaire.png');
  imgCannibal = loadImage('img/cannibale.png');
  imgBoat = loadImage('img/boat.png');
  imgSun = loadImage('img/sun.png');
  imgTree = loadImage('img/tree.png');
  imgCloud = loadImage('img/cloud.png');
  imgPierre = loadImage('img/pierre.png');

  imgGrass = loadImage('img/grass.png');
  imgNull = loadImage('');

  // FIGHT AREA
  imgFight1 = loadImage('img/fight/1.png');
  imgFight2 = loadImage('img/fight/2.png');
  imgFight3 = loadImage('img/fight/3.png');
  imgCannibalBlood = loadImage('img/cannibale_blood.png');
  imgKilledMissionary = loadImage('img/blood.png');
  
}


function draw() {

  // Fond d'écran
  background(135, 206, 235);

  // river water
  fill(0, 200, 190);
  quad(windowWidth / 2 - 190, 170, windowWidth / 2 + 190, 170, windowWidth / 2 + 220, windowHeight - 130, windowWidth / 2 - 220, windowHeight - 130);
  //image(imgRiver,windowWidth / 2 - 190, 170, windowWidth / 2 + 190, 170, windowWidth / 2 + 220, windowHeight - 130, windowWidth / 2 - 220, windowHeight - 130);

  // sun
  image(imgSun, 50 , 0 , 100, 100);
  

  // FIGHT
  playFight();


  // left bank grass
  fill(26, 255, 0);
  quad(0, 150, windowWidth / 2 - 200, 150, windowWidth / 2 - 230, windowHeight - 120, 0, windowHeight - 120);
  // left bank mud 
  fill(204, 100, 50);
  quad(windowWidth / 2 - 200, 150, windowWidth / 2 - 190, 170, windowWidth / 2 - 220, windowHeight - 130, windowWidth / 2 - 230, windowHeight - 120);



  // right bank grass
  fill(26, 255, 0);
  quad(windowWidth / 2 + 200, 150, windowWidth, 150, windowWidth, windowHeight - 120, windowWidth / 2 + 230, windowHeight - 120);
  // right bank mud
  fill(204, 100, 50);
  quad(windowWidth / 2 + 200, 150, windowWidth / 2 + 190, 170, windowWidth / 2 + 220, windowHeight - 130, windowWidth / 2 + 230, windowHeight - 120);
  fill(255, 0, 0);

   // SETUP BOAT POSITION
  let x;
  var k;

  if (tracker[2] === 1) {

    x = windowWidth / 2 - 205;

  } else {

    x = windowWidth / 2 + 80;
  }

  // RIGHT TO LEFT AUTOMATICALLY
  if (tmp == 4) {

    x = windowWidth / 2 - 110;

  }
  if (tmp == 5) {

    x = windowWidth / 2 - 15;

  }
  if (tmp == 6) {

    x = windowWidth / 2 + 80;

  }

  // LEFT TO RIGHT AUTOMATICALLY

  if (tmp2 == 4) {

    x = windowWidth / 2 - 15;

  }
  if (tmp2 == 5) {

    x = windowWidth / 2 - 110;

  }
  if (tmp2 == 6) {

    x = windowWidth / 2 - 205;

  }
  tmp = 0;
  tmp2 = 0;

  // main boat
  stroke(255);
  image(imgBoat, x, 125, 150, 100);


  // Déplacement du coq
  //p = (windowWidth / 2 - 575) + 80
  //gifCoq.position((windowWidth / 2 - 550) - 100, 550);


  // Missionary and/or Cannibal on board

  if (m_onBoard == 2) {

    image(imgMissionary, x, 60, 100, 100);
    image(imgMissionary, x + 50, 60, 100, 100);

  }

  else if (c_onBoard == 2) {

    image(imgCannibal, x, 40, 125, 125);
    image(imgCannibal, x + 50, 40, 125, 125);

  }

  else if ((m_onBoard == 1) && (c_onBoard == 1)) {

    image(imgMissionary, x, 60, 100, 100);
    image(imgCannibal, x + 50, 40, 125, 125);

  }

  else if (m_onBoard == 1) {

    image(imgMissionary, x, 60, 100, 100);

  }

  else if (c_onBoard == 1) {

    image(imgCannibal, x + 50, 40, 125, 125);

  }


  else if ((m_onBoard == 0) && (c_onBoard == 0)) {

    image(imgNull, x, 40, 0, 0);
    image(imgNull, x + 50, 40, 0, 0);

  }


  // MISSIONARIES 


  for (let i = 0; i < leftM; i++) {

    if (!fightFinishedLeft && !startFightLeft) {

      // LEFT
      noStroke();
      image(imgMissionary, (windowWidth / 2 - 550) + i * 80, 150, 100, 100);
      console.log("alive");

    } else if(fightFinishedLeft){
      // KILLED
      // LEFT
      noStroke();
      image(imgKilledMissionary, (windowWidth / 2 - 550) + i * 130, 200, 150, 100);
      console.log("dead");

    }


  }


  for (let i = 0; i < rightM; i++) {

    if (!fightFinishedRight && !startFightRight) {

      // RIGHT
      noStroke();
      image(imgMissionary, (windowWidth / 2 + 280) + i * 80, 150, 100, 100);

    } else if(fightFinishedRight) {

      // KILLED
      // RIGHT
      noStroke();
      image(imgKilledMissionary, (windowWidth / 2 + 280) + i * 130, 200, 150, 100);


    }


  }


  // CANNIBALS 

  // LEFT
  for (let j = 0; j < leftC; j++) {

    if(showCannibalLeft && fightFinishedLeft){
      noStroke();
      image(imgCannibalBlood, (windowWidth / 2 - 590) + j * 100, 275, 125, 125);
    }
    else if (showCannibalLeft) {
      noStroke();
      image(imgCannibal, (windowWidth / 2 - 590) + j * 100, 275, 125, 125);
    }

  }

  j = 0;


  for (let j = 0; j < rightC; j++) {
    
    // RIGHT

      if(showCannibalRight && fightFinishedRight){
        noStroke();
        image(imgCannibalBlood,  (windowWidth / 2) + 300 + j * 100, 275, 125, 125);
      }
      else if (showCannibalRight) {
        noStroke();
        image(imgCannibal,  (windowWidth / 2) + 300 + j * 100, 275, 125, 125);
      }

  }



  // Tree
  image(imgTree, (windowWidth / 2) - 695, 100, 150, 150);

  // Pierre
  image(imgPierre,(windowWidth / 2) + 500, 100, 150, 150);
  

  // Cloud
  image(imgCloud, 1200, 0, 100, 50);
  image(imgCloud, 400, 10, 100, 50);

  fill(255);

  // Grass
  image(imgGrass,(windowWidth / 2) + 200, 350, 300, 200);
  image(imgGrass,(windowWidth / 2) + 400, 350, 300, 200)


}

// Generate new states from parent state.
function applyOperation(tempState) {
  if (tempState.visited === true) {
    killedState.push(state[state.length - 1]);
    state.splice(state.length - 1, 1);
  } else {
    tempState.visited = true;
    boatPosition = tempState.value[2];
    // If Boat is at the left bank
    if (boatPosition === 1) {

      //console.log("boat is going from Left to Right"); 

      // 2 Missionaries
      if (tempState.value[0] >= 2) {
        addState(tempState, [tempState.value[0] - 2, tempState.value[1] - 0, 0]);
      }
      // 1 Missionary
      if (tempState.value[0] >= 1) {
        addState(tempState, [tempState.value[0] - 1, tempState.value[1] - 0, 0]);
      }
      // 2 Cannibals
      if (tempState.value[1] >= 2) {
        addState(tempState, [tempState.value[0] - 0, tempState.value[1] - 2, 0]);
      }
      // 1 Missionary and 1 Cannibal
      if (tempState.value[0] >= 1 && tempState.value[1] >= 1) {
        addState(tempState, [tempState.value[0] - 1, tempState.value[1] - 1, 0]);
      }
      // 1 Cannibal
      if (tempState.value[1] >= 1) {
        addState(tempState, [tempState.value[0] - 0, tempState.value[1] - 1, 0]);
      }
    } else if (boatPosition === 0) {

      //console.log("boat is going from Right to Left"); 
      // If Boat is at the right bank.
      // 1 Missionary and 1 Cannibal
      if (initialState[0] - tempState.value[0] > 0) {
        addState(tempState, [tempState.value[0] + 1, tempState.value[1] + 0, 1]);
      }
      // 1 Cannibal
      if (initialState[1] - tempState.value[1] > 0) {
        addState(tempState, [tempState.value[0] + 0, tempState.value[1] + 1, 1]);
      }
      // 2 Missionary
      if (initialState[0] - tempState.value[0] > 2) {
        addState(tempState, [tempState.value[0] + 2, tempState.value[1] + 0, 1]);
      }
      // 2 Cannibals
      if (initialState[1] - tempState.value[1] > 2) {
        addState(tempState, [tempState.value[0] + 0, tempState.value[1] + 2, 1]);
      }
      // 1 Missionary and 1 Cannibal
      if ((initialState[0] - tempState.value[0] > 0) && (initialState[1] - tempState.value[1] > 0)) {
        addState(tempState, [tempState.value[0] + 1, tempState.value[1] + 1, 1]);
      }
    }
  }
}
// Function to check and add/delete the newly generated states.
function addState(parent, value) {
  var temp = new CreateState();
  temp.value = value;
  temp.parent = parent.value;
  temp.visited = false;
  if (goalState[0] === value[0] && goalState[1] === value[1]) {
    state.push(temp);
    iterator = false;
  } else if ((temp.value[0] === 0) || temp.value[0] >= temp.value[1]) {
    if ((3 - temp.value[0] === 0) || (3 - temp.value[0] >= 3 - temp.value[1])) {
      if (repetitionChecker(value)) {
        killedState.push(temp);
      } else {
        state.push(temp);
      }
    } else {
      killedState.push(temp);
    }
  } else if (temp.value[0] < temp.value[1]) {
    killedState.push(temp);
  }
}
// Function to check whether a state already exists or not in the array
function repetitionChecker(value) {
  for (let i = 0; i < state.length; i++) {
    if (state[i].value[0] === value[0] && state[i].value[1] === value[1] && state[i].value[2] === value[2]) {
      return true;
    }
  }
  return false;
}

// PLAYING THE FIGHT
function playFight(){

    if(startFightLeft){
      
        setTimeout(
          function () {
            image(imgFight1, (windowWidth / 2) - 600 , 200, 350, 250);
          }
          , 100);
        
        setTimeout(
            function () {
              image(imgFight2, (windowWidth / 2) - 600 , 200, 350, 250);
            }
        , 200);
  
        setTimeout(
          function () {
            image(imgFight3, (windowWidth / 2) - 600 , 200, 350, 250);
          }
        , 250);
        
  
        
  
    }

    if(startFightRight){
  
        setTimeout(
          function () {
            image(imgFight1, (windowWidth / 2) + 275 , 200, 350, 250);
          }
          , 100);
  
          setTimeout(
            function () {
              image(imgFight2, (windowWidth / 2) + 275 , 200, 350, 250);
            }
        , 200);
  
        setTimeout(
          function () {
            image(imgFight3, (windowWidth / 2) + 275 , 200, 350, 250);
          }
        , 300);
  
  
      }
}
