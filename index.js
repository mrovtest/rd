var dice = ["4", "6", "8", "10", "12", "20", "100"];

for(item of dice){
  let button = document.createElement('button');
  button.className = "roll";
  button.innerHTML = "d" + item;

  let onClick = 'throwDice("' + item + '")';
  button.setAttribute('onclick', onClick);

  $("#dice").append(button);
}

function getRandom(max) {
  min = Math.ceil(1);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function throwDice(number){
  var current = $("#result").html();
  var components = $("#throws").html();

  var thrown = getRandom(number);
  console.log(thrown);

  var result = +current + +thrown;

  $("#result").html(result);

  if(components == ""){
    $("#throws").html(thrown);
  }else{
    $("#throws").html(components + " + " + thrown);
  }
}
