var dice = {
  "4": "rgb(230, 206, 28)",
  "6": "rgb(82, 246, 242)",
  "8": "rgb(231, 0, 0)",
  "10": "rgb(201, 15, 166)",
  "12": "rgb(23, 219, 25)",
  "20": "rgb(224, 141, 16)",
  "100": "rgb(108, 108, 108)"
}

var bonus = [
  "-5", "-4", "-3", "-2", "-1", "+1", "+2", "+3", "+4", "+5"
]

for(item of Object.keys(dice)){
  let button = document.createElement('button');
  button.className = "roll";
  button.innerHTML = "d" + item;
  button.style["border"] = "2px solid " + dice[item];

  let onClick = 'throwDice("' + item + '")';
  button.setAttribute('onclick', onClick);

  $("#dice").append(button);
}

for(item of bonus){
  let button = document.createElement('button');
  button.className = "bonu";
  button.innerHTML = item;
  button.style["border"] = "2px solid " + "gray";

  let onClick = 'addBonus("' + item + '")';
  button.setAttribute('onclick', onClick);

  $("#bonus").append(button);
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

  addThrow(thrown, number);

  var result = +current + +thrown;
  $("#result").html(result);
}

function addThrow(thrown, die){
  let color = dice[die];

  let span = document.createElement('span');
  span.innerHTML = thrown + " ";
  span.style['color'] = color;

  $("#throws").append(span);
}

function addBonus(points){
  let span = document.createElement('span');
  span.innerHTML = points + " ";
  span.style['color'] = "#758e00";

  var current = $("#result").html();
  var result = +current + +points;
  $("#result").html(result);

  $("#throws").append(span);
}
