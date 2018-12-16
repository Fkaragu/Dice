$(document).ready(function() {
  $("#btnNew").click(function(event) {
    //alert("New Game");
    reset();
  });

  $("#btndice1").click(function(event) {
    //alert("Dice1");
    randomNums1();
  });

  $("#btndice2").click(function(event) {
    //alert("Dice2");
  });

  $("#btnhold1").click(function(event) {
    //alert("Hold1");

  });

  $("#btnhold2").click(function(event) {
    //alert("Hold2");

  });

});

function randomNums1() {
  var min = 1;
  var max = 6;
  var random = Math.floor(Math.random() * (+max - +min)) + +min;

  if (random === 1) {
    $("#playerrol1").show();
    $("#playerrol1").text("You have rolled 1 it's players 2 turn.!!!");
    document.getElementById('totalP1').value =0;
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

function randomNums2() {
  var min = 1;
  var max = 6;
  var random = Math.floor(Math.random() * (+max - +min)) + +min;

  if (random === 1) {
    $("#playerrol2").show();
    $("#playerrol2").text("You have rolled 1 it's players 2 turn.!!!");
    document.getElementById('totalP2').value =0;
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

function addTot1(num0, num1) {
  var result = num0 + num1;
  document.getElementById('totalP1').value = result;
  //alert(result);
};

function addTot2(num0, num1) {
  var result = num0 + num1;
  document.getElementById('totalP2').value = result;
  //alert(result);
};

function reset(){
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
