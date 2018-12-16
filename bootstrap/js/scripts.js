$(document).ready(function() {
  $("#btnNew").click(function(event) {
    //alert("New Game");
    reset();
  });

  $("#btndice1").click(function(event) {
    alert("Dice1");

  });

  $("#btndice2").click(function(event) {
    alert("Dice2");
  });

  $("#btnhold1").click(function(event) {
    alert("Hold1");

  });

  $("#btnhold2").click(function(event) {
    alert("Hold2");

  });

});

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

function randomNums1() {
  var min = 1;
  var max = 6;
  var random = Math.floor(Math.random() * (+max - +min)) + +min;
alert(random);
};
