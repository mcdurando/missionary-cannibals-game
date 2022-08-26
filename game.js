let missionaryCount;
let cannibalCount;
let tracker = [3, 3, 1];
let parent;
var tmp = 0, tmp2 = 0;


// FIGHT
var startFightLeft = false;
var startFightRight = false;

var showCannibalLeft = true;
var showCannibalRight = true;

var fightFinishedLeft = false;
var fightFinishedRight = false;

// Missionary still alive in left side
var stillMissionaryAliveLeft = true;

// Missionary still alive in right side
var stillMissionaryAliveRight = true;

// PAS DU COQ
//var pasCoq ;

var t = 2;

var isAI = false;


// Utiliser aléatoirement les 2 démarches aboutissant à la solution
var randomNumber = Math.floor(Math.random() * 11);

// Nombre de missionnaire(s) et cannibale(s) restants à gauche de la rivière
var leftM = tracker[0];
var leftC = tracker[1];

// Nombre de missionnaire(s) et cannibale(s) restants à droite de la rivière
var rightM = 3 - tracker[0];
var rightC = 3 - tracker[1];

// Nombre de missionnaire(s) et cannibale(s) à bord du barque
var c_onBoard = 0;
var m_onBoard = 0;


var right;

// applying 6 possible operations on button click events.
document.querySelector('#oneMissionary').addEventListener('click', () => play(1, 0));
document.querySelector('#oneCannibal').addEventListener('click', () => play(0, 1));
document.querySelector('#twoMissionaries').addEventListener('click', () => play(2, 0));
document.querySelector('#twoCannibals').addEventListener('click', () => play(0, 2));
document.querySelector('#oneMissionaryOneCannibal').addEventListener('click', () => play(1, 1));

document.querySelector('#AI').addEventListener('click', () => playAI());

// take missionaries and cannibals count and apply appropriate operation
const play = (M, C) => {

    missionaryCount = M
    cannibalCount = C;
    applyMove(missionaryCount, cannibalCount);

    document.getElementById('AI').disabled = true;
}

const playAI = () => {
    isAI = true;

    applyMoveAutomaticaly();

    // DISABLE BUTTONS
    document.getElementById('manually').innerHTML = "";
    document.getElementById('AI').disabled = true;
}

// SOUND FUNCTION
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}


// Fonction de résolution automatique du problème
function applyMoveAutomaticaly() {

    if ((randomNumber % 2) == 0) {

        // M - C
        setTimeout(
            function () {
                applyMove(1, 1)
            }
            , 3000);

        // M 
        setTimeout(
            function () {
                applyMove(1, 0)
            }
            , 6000);

    } else {


        // CC
        setTimeout(
            function () {
                applyMove(0, 2)
            }
            , 3000);

        // C
        setTimeout(
            function () {
                applyMove(0, 1)
            }
            , 6000);

    }

    /* POINT DE RENCONTRE */

    // CC
    setTimeout(
        function () {
            applyMove(0, 2)
        }
        , 9000);

    // C
    setTimeout(
        function () {
            applyMove(0, 1)
        }
        , 12000);

    // MM
    setTimeout(
        function () {
            applyMove(2, 0)
        }
        , 15000);

    // M - C
    setTimeout(
        function () {
            applyMove(1, 1)
        }
        , 18000);

    // MM
    setTimeout(
        function () {
            applyMove(2, 0)
        }
        , 21000);

    // C
    setTimeout(
        function () {
            applyMove(0, 1)
        }
        , 24000);


    /* POINT DE SEPARATION */

    // CC
    setTimeout(
        function () {
            applyMove(0, 2)
        }
        , 27000);

    // DEUX DEMARCHES POSSIBLES

    if ((randomNumber % 2) == 0) {

        console.log("randomNumber = " + randomNumber);

        // C
        setTimeout(
            function () {
                applyMove(0, 1)
            }
            , 30000);

        // CC
        setTimeout(
            function () {
                applyMove(0, 2)
            }
            , 33000);

    } else {

        console.log("randomNumber = " + randomNumber);

        // M 
        setTimeout(
            function () {
                applyMove(1, 0)
            }
            , 30000);

        // M - C
        setTimeout(
            function () {
                applyMove(1, 1)
            }
            , 33000);
    }

}




// main function 
function applyMove(M, C) {

    t = 1;

    // Contenu du parent    
    // M C B
    // 3 3 1
    parent = tracker;

    // check boat is at right or left bank
    if (tracker[2] === 1) {

        // check Total person in a boat
        if (M + C <= 2) {

            // User Input cannot be greater than available Missionaries and Cannibals.
            if (M > tracker[0] || C > tracker[1]) {

                // Wrong Sound
                myMusic = new sound("sounds/wrongSound.mp3");
                myMusic.play();

                //console.log("Invalid Move");

            } else {

                // DISABLE BUTTONS
                manageButton('disable', isAI);

                // JUMP Sound
                myMusic = new sound("sounds/jumpSound.mp3");
                myMusic.play();
                //console.log("jumpSound");

                // Calcul 
                tracker[0] = tracker[0] - M;
                tracker[1] = tracker[1] - C;


                if (tracker[2] === 1) {

                    tracker[2] = 0;

                } else {

                    tracker[2] = 1;

                }

                if (tracker[0] === 0 && tracker[1] === 0 && tracker[2] === 0) {

                    setTimeout(
                        function () {
                            youWin();
                        }
                        , 1000);

                    //youWin();

                } else if ((tracker[0] != 0) && (tracker[0] < tracker[1])) {

                    setTimeout(
                        function () {
                            youLose('left');
                        }
                        , 1000);

                    //youLose('left');

                }
                //console.log("========== 1 =========");

                if (tracker[2] == 1) {
                    // LEFT
                    /*
                    console.log('-------  POSITION DE LA BARQUE : GAUCHE -------');

                    console.log("nbres Missionnaire = " + tracker[0]);
                    console.log("nbres Cannibals = " + tracker[1]);
                    console.log("nbres Barque = " + tracker[2]);

                    */

                    if ((3 - tracker[0] != 0) && ((3 - tracker[0]) < (3 - tracker[1]))) {

                        setTimeout(
                            function () {
                                youLose('right');
                            }
                            , 1000);

                        //youLose('right');

                    }
                    // DIRECTION VERS LA GAUCHE

                    tmp2 = 4;

                    // Refresh Right
                    rightM = 3 - tracker[0];
                    rightC = 3 - tracker[1];

                    // A bord
                    m_onBoard = M;
                    c_onBoard = C;

                    //console.log("tmp2 = " + tmp2 )

                    setTimeout(
                        function () {
                            tmp2++;
                        }
                        , 1000);

                    setTimeout(
                        function () {
                            tmp2++;
                        }
                        , 2000);

                    setTimeout(
                        function () {

                            // No one on board
                            m_onBoard = 0;
                            c_onBoard = 0;

                            // Refresh Left
                            leftM = tracker[0];
                            leftC = tracker[1];

                            // ENABLE BUTTONS
                            manageButton('enable', isAI);

                        }
                        , 1000);


                } else {
                    // RIGHT
                    /*
                    console.log('------- POSITION DE LA BARQUE : DROITE -------');

                    console.log("nbres Missionnaire = " + (3 - tracker[0]));
                    console.log("nbres Cannibals = " + (3 - tracker[1]));
                    console.log("nbres Barque = 1");
                    */

                    if ((3 - tracker[0] != 0) && ((3 - tracker[0]) < (3 - tracker[1]))) {

                        setTimeout(
                            function () {
                                youLose('right');
                            }
                            , 1000);

                        //youLose('right');

                    }

                    // DIRECTION VERS LA DROITE

                    tmp = 4;

                    // Refresh Left
                    leftM = tracker[0];
                    leftC = tracker[1];

                    // A bord
                    m_onBoard = M;
                    c_onBoard = C;

                    //console.log("leftM = " + tracker[0]);
                    //console.log("leftC = " + tracker[1]);

                    //console.log("tmp = " + tmp )

                    setTimeout(
                        function () {
                            tmp++;
                        }
                        , 1000);

                    setTimeout(
                        function () {
                            tmp++;
                        }
                        , 2000);

                    setTimeout(
                        function () {

                            // No one on board
                            m_onBoard = 0;
                            c_onBoard = 0;

                            // Refresh right
                            rightM = 3 - tracker[0];
                            rightC = 3 - tracker[1];

                            // ENABLE BUTTONS
                            manageButton('enable', isAI);

                        }
                        , 1000);


                }

            }
        } else {
            console.log("Le bateau ne peut pas transporter plus de 2 personnes.");
        }
    } else {


        // Boat is the right bank case.
        if (M > (3 - tracker[0]) || C > (3 - tracker[1])) {

            // Wrong Sound
            myMusic = new sound("sounds/wrongSound.mp3");
            myMusic.play();

            //console.log("This means invalid input");

        } else {

            // DISABLE BUTTONS
            manageButton('disable', isAI);

            // JUMP Sound
            myMusic = new sound("sounds/jumpSound.mp3");
            myMusic.play();
            // console.log("jumpSound");


            tracker[0] = tracker[0] + M;
            tracker[1] = tracker[1] + C;
            //(tracker[2] === 1 ? tracker[2] = 0 : tracker[2] = 1); 

            if (tracker[2] === 1) {

                tracker[2] = 0;

            } else {

                tracker[2] = 1;

            }

            if (tracker[0] === 0 && tracker[1] === 0 && tracker[2] === 0) {

                setTimeout(
                    function () {
                        youWin();
                    }
                    , 1000);

                //youWin();

            } else if ((tracker[0] != 0) && ((tracker[0]) < (tracker[1]))) {

                setTimeout(
                    function () {
                        youLose('left');
                    }
                    , 1000);

                //youLose('left');
            }

            //console.log("========== 2 =========");

            if (tracker[2] == 1) {

                /*
                // LEFT
                console.log('------- POSITION DE LA BARQUE : GAUCHE -------');

                console.log("nbres Missionnaire = " + tracker[0]);
                console.log("nbres Cannibals = " + tracker[1]);
                console.log("nbres Barque = " + tracker[2]);

                */

                if ((3 - tracker[0] != 0) && ((3 - tracker[0]) < (3 - tracker[1]))) {

                    setTimeout(
                        function () {
                            youLose('right');
                        }
                        , 1000);

                    //youLose('right');

                }

                // DIRECTION VERS LA GAUCHE

                tmp2 = 4;

                // Refresh Right
                rightM = 3 - tracker[0];
                rightC = 3 - tracker[1];

                // A bord
                m_onBoard = M;
                c_onBoard = C;

                //console.log("tmp2 = " + tmp2 )

                setTimeout(
                    function () {
                        tmp2++;
                    }
                    , 1000);

                setTimeout(
                    function () {
                        tmp2++;

                    }
                    , 2000);

                setTimeout(
                    function () {

                        // No one on board
                        m_onBoard = 0;
                        c_onBoard = 0;

                        // Refresh Left
                        leftM = tracker[0];
                        leftC = tracker[1];

                        // ENABLE BUTTONS
                        manageButton('enable', isAI);
                    }
                    , 1000);




            } else {
                /*
                // RIGHT
                console.log('------- POSITION DE LA BARQUE : DROITE -------');

                
                console.log("nbres Missionnaire = " + (3 - tracker[0]));
                console.log("nbres Cannibals = " + (3 - tracker[1]));
                console.log("nbres Barque = 1" );
                */

                if ((3 - tracker[0] != 0) && ((3 - tracker[0]) < (3 - tracker[1]))) {

                    setTimeout(
                        function () {
                            youLose('right');
                        }
                        , 1000);

                    //youLose('right');

                }


                // DIRECTION VERS LA DROITE

                tmp = 4;

                // Refresh Left
                leftM = tracker[0];
                leftC = tracker[1];

                // A bord
                m_onBoard = M;
                c_onBoard = C;

                //console.log("leftM = " + tracker[0]);
                //console.log("leftC = " + tracker[1]);


                //console.log("tmp = " + tmp )

                setTimeout(
                    function () {
                        tmp++;
                    }
                    , 1000);

                setTimeout(
                    function () {
                        tmp++;
                    }
                    , 2000);

                setTimeout(
                    function () {

                        // No one on board
                        m_onBoard = 0;
                        c_onBoard = 0;

                        // Refresh right
                        rightM = 3 - tracker[0];
                        rightC = 3 - tracker[1];

                        // ENABLE BUTTONS
                        manageButton('enable', isAI);

                    }
                    , 1000);


            }

        }
    }



}
// to check if a state is acceptable or not from the 'state' array
function checkfromState() {
    for (let i = 0; i < state.length; i++) {
        if (state[i].value[0] === tracker[0] && state[i].value[1] === tracker[1] && state[i].value[2] === tracker[2]) {
            return true;
        }
    }
    return false;
}


// VICTORY FUNCTION

function youWin() {

    // Victory Sound
    myMusic = new sound("sounds/victorySound.mp3");
    myMusic.play();

    swal(
        {
            type: 'success',
            title: 'Information',
            text: 'Felicitations! Vous avez gagnee :)'

        }
    );


    setTimeout(
        function () {
            location.reload();
            document.location.href = "index.php";
        }
        , 3000);


}

function youLose(sideName) {

    manageButton('disable', isAI);

    playSwordSound();

    if (sideName == 'left') {


        stillMissionaryAliveLeft = false;
        startFightLeft = true;
        showCannibalLeft = false;

        setTimeout(
            function () {
                startFightLeft = false;
                fightFinishedLeft = true;
                showCannibalLeft = true;
            }
            , 2000);




    } else if (sideName == 'right') {

        stillMissionaryAliveRight = false;
        startFightRight = true;
        showCannibalRight = false;

        setTimeout(
            function () {
                startFightRight = false;
                fightFinishedRight = true;
                showCannibalRight = true;
            }
            , 2000);


    }



    setTimeout(
        function () {
            // Game Over Sound

            myMusic = new sound("sounds/gameOverSound.mp3");
            myMusic.play();

            swal("GAME OVER", "Vous avez perdu !", "warning");

        }
        , 3000);


    setTimeout(
        function () {
            //location.reload();
            document.location.href = "index.php";
        }
        , 7000);



}

function playSoundStarter() {

    myMusic = new sound("sounds/gametheme.mp3");
    myMusic.play();
}


function playSwordSound() {

    myMusic2 = new sound("sounds/attackSound.mp3");
    myMusic2.play();

    setTimeout(
        function () {
            myMusic = new sound("sounds/swordSound.mp3");
            myMusic.play();
        }
        , 1000);

}

function manageButton(type, AI) {

    if (!AI) {

        if (type == 'enable') {

            document.getElementById("oneMissionary").disabled = false;
            document.getElementById("oneCannibal").disabled = false;
            document.getElementById("twoMissionaries").disabled = false;
            document.getElementById("twoCannibals").disabled = false;
            document.getElementById("oneMissionaryOneCannibal").disabled = false;

        } else if (type == 'disable') {

            document.getElementById("oneMissionary").disabled = true;
            document.getElementById("oneCannibal").disabled = true;
            document.getElementById("twoMissionaries").disabled = true;
            document.getElementById("twoCannibals").disabled = true;
            document.getElementById("oneMissionaryOneCannibal").disabled = true;

        }

    }
}

// function createCORSRequest(method, url) {
//     var xhr = new XMLHttpRequest();
//     if ("withCredentials" in xhr) {
  
//       // Check if the XMLHttpRequest object has a "withCredentials" property.
//       // "withCredentials" only exists on XMLHTTPRequest2 objects.
//       xhr.open(method, url, true);
  
//     } else if (typeof XDomainRequest != "undefined") {
  
//       // Otherwise, check if XDomainRequest.
//       // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//       xhr = new XDomainRequest();
//       xhr.open(method, url);
  
//     } else {
  
//       // Otherwise, CORS is not supported by the browser.
//       xhr = null;
  
//     }
//     return xhr;
//   }
  
//   function test(){

//     var xhr = createCORSRequest('POST', "http://localhost:8080/AI");
//     if (!xhr) {
//       throw new Error('CORS not supported');
//     }else{

//         alert("mandeha");

//         var boatPosition;
    
//         xhr.setRequestHeader("Content-type", "application/json");
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState == 4 && xhr.status == 200) {
//                 var json = JSON.parse(xhr.responseText);
//                 console.log(json.email + ", " + json.name)
//             }
//         }
    
//         if (tracker[2] == 1) {
    
//             boatPosition = "LEFT";
    
//         } else {
    
//             boatPosition = "RIGHT";
    
//         }
    
//         var data = JSON.stringify(
//             {
//                 "cannibalLeft": tracker[1],
//                 "missionaryLeft": tracker[0],
//                 "boat": boatPosition,
//                 "cannibalRight": 3 - tracker[1],
//                 "missionaryRight": 3 - tracker[0]
//             }
//         );
//         xhr.send(data);

//     }

//   }
  
