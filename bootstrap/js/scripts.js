//user interface logic:
$(document).ready(function() {
  $("#btnNew").click(function(event) {
    //alert("New Game");
    reset();
  });

  $("#btndice1").click(function(event) {
    //alert("Dice1");
    randomNums1();
    $("#playerrol2").hide();
  });

  $("#btndice2").click(function(event) {
    //alert("Dice2");
    randomNums2();
    $("#playerrol1").hide();
  });

  $("#btnhold1").click(function(event) {
    //alert("Hold1");
    addScore1();
    document.getElementById('totalP1').value = 0;
    $("#btndice1").hide();
    $("#btnhold1").hide();
    $("#playerrol1").hide();
    $("#btndice2").show();
    $("#btnhold2").show();

  });

  $("#btnhold2").click(function(event) {
    //alert("Hold2");
    addScore2();
    document.getElementById('totalP2').value = 0;
    $("#btndice2").hide();
    $("#btnhold2").hide();
    $("#playerrol2").hide();
    $("#btndice1").show();
    $("#btnhold1").show();

  });

});

//Business logic
function randomNums1() {
  var min = 1;
  var max = 6;
  var random = Math.floor(Math.random() * (+max - +min)) + +min;

  if (random === 1) {
    $("#playerrol1").show();
    $("#playerrol1").text("You have rolled 1 it's players 2 turn.!!!");
    document.getElementById('totalP1').value = 0;
    $("#btndice1").hide();
    $("#btnhold1").hide();
    $("#btndice2").show();
    $("#btnhold2").show();
  } else ///random not equals to 1
  {
    var currentV1 = parseInt(document.getElementById('totalP1').value);
    addTot1(currentV1, random);
    $("#playerrol1").show();
    $("#playerrol1").text("You have rolled : " + random);
    // alert(currentV1); checking what is being picked.
  }
};
//Business logic
function randomNums2() {
  var min = 1;
  var max = 6;
  var random = Math.floor(Math.random() * (+max - +min)) + +min;

  if (random === 1) {
    $("#playerrol2").show();
    $("#playerrol2").text("You have rolled 1 it's players 1 turn.!!!");
    document.getElementById('totalP2').value = 0;
    $("#btndice2").hide();
    $("#btnhold2").hide();
    $("#btndice1").show();
    $("#btnhold1").show();

  } else ///random not equals to 1
  {
    var currentV2 = parseInt(document.getElementById('totalP2').value);
    addTot2(currentV2, random);
    $("#playerrol2").show();
    $("#playerrol2").text("You have rolled : " + random);
    // alert(currentV2); checking what is being picked.
  }
};
//Business logic
function addTot1(num0, num1) {
  var result = num0 + num1;
  document.getElementById('totalP1').value = result;
  //alert(result);
};
//Business logic
function addTot2(num0, num1) {
  var result = num0 + num1;
  document.getElementById('totalP2').value = result;
  //alert(result);
};
//Business logic
function addScore1() {
  var score1 = parseInt(document.getElementById('totalP1').value);
  var scorep1 = parseInt(document.getElementById('scoreP1').value);

  var resultScore1 = score1 + scorep1;
  //document.getElementById('scoreP1').value = resultScore1;

  // check if resultScore1 is 100 if so player 1 wins
  if (resultScore1 >= 100) {
    document.getElementById('scoreP1').value = resultScore1;
    alert("Yipeeeeeeeeeeee.. Player 1 wins");
    reset();
    $("#playerrol1").hide();
    $("#playerrol2").hide();
    $("#btndice1").show();
    $("#btndice2").hide();
    $("#btnhold1").show();
    $("#btnhold2").hide();
  } else {
    document.getElementById('scoreP1').value = resultScore1;
  }
};
//Business logic
function addScore2() {
  var score2 = parseInt(document.getElementById('totalP2').value);
  var scorep2 = parseInt(document.getElementById('scoreP2').value);

  var resultScore2 = score2 + scorep2;
  //document.getElementById('scoreP2').value = resultScore2;

  // check if resultScore2 is 100 if so player 2 wins
  if (resultScore2 >= 100) {
    document.getElementById('scoreP2').value = resultScore2;
    alert("Yipeeeeeeeeeeee.. Player 2 wins");
    reset();
    $("#playerrol1").hide();
    $("#playerrol2").hide();
    $("#btndice1").show();
    $("#btndice2").hide();
    $("#btnhold1").show();
    $("#btnhold2").hide();
  } else {
    document.getElementById('scoreP2').value = resultScore2;
  }
};
//Business logic
function reset() {
  document.getElementById('scoreP1').value = 0;
  document.getElementById('scoreP2').value = 0;
  document.getElementById('totalP1').value = 0;
  document.getElementById('totalP2').value = 0;
  $("#playerrol1").hide();
  $("#playerrol2").hide();
  $("#btndice1").show();
  $("#btndice2").hide();
  $("#btnhold1").show();
  $("#btnhold2").hide();

};
