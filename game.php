<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>
    <link rel="stylesheet" href="css/main.css">
    <script src="libraries/p5.min.js"></script>
    <script src="libraries/p5.dom.min.js"></script>
    <!-- SWEETALERT -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.12.15/dist/sweetalert2.all.min.js"></script> -->
    <script  src='libraries/sweetalert/sweetalert2.all.min.js'></script>
    <link rel='stylesheet' href='libraries/sweetalert/sweetalert2.min.css'>

  </head>
  <body style="background-color: rgb(135, 206, 235);" onload="playSoundStarter()">
    <div id="manually">
      <h4>CHOISIT LE OU LES ELEMENT(S) A DEPLACER</h4>

      <div class="button_area">

          <button id = 'oneMissionary' class="button_group" >1 Missionnaire </button>
          <button id = 'oneCannibal' class="button_group">1 Cannibale </button>
          <button id = 'twoMissionaries' class="button_group">2 Missionaires</button>
          <button id = 'twoCannibals' class="button_group"> 2 Cannibales</button>
          <button id = 'oneMissionaryOneCannibal' class="button_group"> 1 Missionaire & 1 Cannibale</button> 

      </div>
       
     
    </div>
    <div id="resolve">
        <button id = 'AI' class="resolve">Resoudre</button>
    </div>

    <!-- <div id="resolve">
      <a href='game.php?hello=true'>Run PHP Function</a>
    </div> -->


    <script src="game.js"></script> 
    <script src="sketch.js"></script>
  </body>


</html>



<?php

// class State { 
//   public $cannibalLeft;
//   public $missionaryLeft;
//   public $boat; 
//   public $cannibalRight;
//   public $missionaryRight;

//   public function __construct(array $data) 
//     {
//         $this->cannibalLeft = $data['cl'];
//         $this->missionaryLeft = $data['ml'];
//         $this->boat = $data['b'];
//         $this->cannibalRight = $data['cr'];
//         $this->missionaryRight = $data['mr'];
//     }


// } 

//   function runMyFunction() {
    

//           //API Url
//           $url = 'http://localhost:8080/AI';
          
//           //Initiate cURL.
//           $ch = curl_init($url);
          
//           // STATE
//            //The JSON data. 
//            $jsonData = array(
//             "cl" => 2,
//             "ml" => 2,
//             "b" => "LEFT",
//             "cr" => 1,
//             "mr" => 1
//           );

//           $state = new State($jsonData);

//           //Encode the array into JSON.
//          $jsonDataEncoded = json_encode($state);

//           echo "TEST :" . $jsonDataEncoded;
          
          
//           //Tell cURL that we want to send a POST request.
//           curl_setopt($ch, CURLOPT_POST, 1);
          
//           //Attach our encoded JSON string to the POST fields.
//           curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonDataEncoded);
          
//           //Set the content type to application/json
//           curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 
          
//           //Execute the request
//           $result = curl_exec($ch);

//           echo "LASA";
          


//   }

//   if (isset($_GET['hello'])) {
//     runMyFunction();
//   }
?>


<!--
<html>
Hello there!
<a href='index.php?hello=true'>Run PHP Function</a>
</html>

-->