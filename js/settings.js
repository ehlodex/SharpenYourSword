let p1_vpoints = 0;
let p1_sinnies = 0;
let p2_vpoints = 0;
let p2_sinnies = 0;
let p3_vpoints = 0;
let p3_sinnies = 0;
let p4_vpoints = 0;
let p4_sinnies = 0;

let tournamentMode = 0;
let vpointsToWin = 60;
let vpointsEllie = 5;
let sinniesToWin = 6;
let playerCount = 2;

// DEL vpoints
function delVpoints(player) {
  if (player =='p1') {
    p1_vpoints--;
    if (p1_vpoints < 0) { p1_vpoints = 0; };
    document.getElementById("p1_vpoints").innerText = p1_vpoints;
  };
  if (player =='p2') {
    p2_vpoints--;
    if (p2_vpoints < 0) { p2_vpoints = 0; };
    document.getElementById("p2_vpoints").innerText = p2_vpoints;
  };
  if (player =='p3') {
    p3_vpoints--;
    if (p3_vpoints < 0) { p3_vpoints = 0; };
    document.getElementById("p3_vpoints").innerText = p3_vpoints;
  };
  if (player =='p4') {
    p4_vpoints--;
    if (p4_vpoints < 0) { p4_vpoints = 0; };
    document.getElementById("p4_vpoints").innerText = p4_vpoints;
  };
};

// ADD vpoints
function addVpoints(player) {
  if (player =='p1') {
    p1_vpoints++;
    document.getElementById("p1_vpoints").innerText = p1_vpoints;
  };
  if (player =='p2') {
    p2_vpoints++;
    document.getElementById("p2_vpoints").innerText = p2_vpoints;
  };
  if (player =='p3') {
    p3_vpoints++;
    document.getElementById("p3_vpoints").innerText = p3_vpoints;
  };
  if (player =='p4') {
    p4_vpoints++;
    document.getElementById("p4_vpoints").innerText = p4_vpoints;
  };
  checkVictoryConditions();
};


// DEL sinnies
function delSinnies(player) {
  if (player == 'p1') {
    document.getElementById(`p1_sinnie${p1_sinnies}`).style.opacity = "0.3";
    p1_sinnies--;
    if (p1_sinnies < 0) { p1_sinnies = 0; };
  };
  if (player == 'p2') {
    document.getElementById(`p2_sinnie${p2_sinnies}`).style.opacity = "0.3";
    p2_sinnies--;
    if (p2_sinnies < 0) { p2_sinnies = 0; };
  };
  if (player == 'p3') {
    document.getElementById(`p3_sinnie${p3_sinnies}`).style.opacity = "0.3";
    p3_sinnies--;
    if (p3_sinnies < 0) { p3_sinnies = 0; };
  };
  if (player == 'p4') {
    document.getElementById(`p4_sinnie${p4_sinnies}`).style.opacity = "0.3";
    p4_sinnies--;
    if (p4_sinnies < 0) { p4_sinnies = 0; };
  };
};

// ADD sinnies
function addSinnies(player) {
  if (player == 'p1') {
    p1_sinnies++;
    if (p1_sinnies > 6) { p1_sinnies = 6; };
    document.getElementById(`p1_sinnie${p1_sinnies}`).style.opacity = "1";
  };
  if (player == 'p2') {
    p2_sinnies++;
    if (p2_sinnies > 6) { p2_sinnies = 6; };
    document.getElementById(`p2_sinnie${p2_sinnies}`).style.opacity = "1";
  };
  if (player == 'p3') {
    p3_sinnies++;
    if (p3_sinnies > 6) { p3_sinnies = 6; };
    document.getElementById(`p3_sinnie${p3_sinnies}`).style.opacity = "1";
  };
  if (player == 'p4') {
    p4_sinnies++;
    if (p4_sinnies > 6) { p4_sinnies = 6; };
    document.getElementById(`p4_sinnie${p4_sinnies}`).style.opacity = "1";
  };
  checkVictoryConditions();
};

// Tournament Mode
function toggleTournamentMode() {
  if (tournamentMode == 0) {
    tournamentMode = 1;
    document.getElementById("tournamentMode").innerText = "toggle_on";
    vpointsToWin = 77;
    vpointsEllie = 7;
  } else {
    tournamentMode = 0;
    document.getElementById("tournamentMode").innerText = "toggle_off";
    vpointsToWin = 60;
    vpointsEllie = 5;
  }
  checkVictoryConditions();
}

// Add Player
function addPlayer() {
  playerCount++;
  if (playerCount > 4) { playerCount = 4; };
  document.getElementById("player_count").innerText = playerCount;
  // TODO: Change board layout
}

// Remove Player
function delPlayer() {
  playerCount--;
  if (playerCount < 1) { playerCount = 1; };
  document.getElementById("player_count").innerText = playerCount;
  // TODO: Change board layout
}

// Victory Conditions
// TODO: Make the display better (div overlay?)
function checkVictoryConditions() {
  if (p1_vpoints >= (vpointsToWin - (vpointsEllie * p1_ellie.checked))) {
    gameOver('p1', 'vpoints');
  } else if (p1_sinnies >= 6) {
    gameOver('p1', 'sinnies')
  };
  if (p2_vpoints >= (vpointsToWin - (vpointsEllie * p2_ellie.checked))) {
    gameOver('p2', 'vpoints');
  } else if (p2_sinnies >= 6) {
    gameOver('p2', 'sinnies');
  };
  if (p3_vpoints >= (vpointsToWin - (vpointsEllie * p3_ellie.checked))) {
    gameOver('p3', 'vpoints');
  } else if (p3_sinnies >= 6) {
    gameOver('p3', 'sinnies');
  };
  if (p4_vpoints >= (vpointsToWin - (vpointsEllie * p4_ellie.checked))) {
    gameOver('p4', 'vpoints');
  } else if (p4_sinnies >= 6) {
    gameOver('p4', 'sinnies');
  };
}

function gameOver(player, condition) {
  let victoryMessage = "";
  if (condition == 'vpoints') { victoryMessage = `${player} won by scoring ${vpointsToWin} Virtue Points`; };
  if (condition == 'sinnies') { victoryMessage = `${player} won by defeating 6 sinnies`; };
  document.getElementById('p1_card').innerHTML = `<div class='endgame' ondblclick='location.reload()'><h2>You lost :(</h2>${victoryMessage}</div>`;
  document.getElementById('p2_card').innerHTML = `<div class='endgame' ondblclick='location.reload()'><h2>You lost :(</h2>${victoryMessage}</div>`;
  document.getElementById('p3_card').innerHTML = `<div class='endgame' ondblclick='location.reload()'>You lost :(<br />${victoryMessage}</div>`;
  document.getElementById('p4_card').innerHTML = `<div class='endgame' ondbllick='location.reload()'>You lost :(<br />${victoryMessage}</div>`;
  document.getElementById(`${player}_card`).innerHTML = `<div class='endgame' ondblclick='location.reload()'><h2>YOU WIN!</h2>${victoryMessage}</div>`;
}

// Show, Hide Settings
function showSettings() {
  document.getElementById("scoreboard").style.display = "none";
  document.getElementById("settings").style.display = "block";
}

function hideSettings() {
  document.getElementById("scoreboard").style.display = "grid";
  document.getElementById("settings").style.display = "none";
  checkVictoryConditions();
}

// Change player colors
function playerColor(player, colorId) {
  let r = document.querySelector(':root');
  let rs = getComputedStyle(r);
  let newColor = rs.getPropertyValue(`--${colorId}`);
  r.style.setProperty(`--${player}`, newColor);
}