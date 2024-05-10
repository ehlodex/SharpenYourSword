let p0_vpoints = 0;
let p1_name = "Player 1";
let p1_vpoints = 0;
let p1_sinnies = 0;
let p2_name = "Player 2";
let p2_vpoints = 0;
let p2_sinnies = 0;
let p3_name = "Player 3";
let p3_vpoints = 0;
let p3_sinnies = 0;
let p4_name = "Player 4";
let p4_vpoints = 0;
let p4_sinnies = 0;

let tournamentMode = 0;
let vpointsToWin = 60;
let vpointsEllie = 5;
let sinniesToWin = 6;
let playerCount = 2;

// DEL vpoints
function delVpoints(player) {
  if (player == 'p0') {
    p0_vpoints--;
    if (p0_vpoints < 0) { p0_vpoints = 0; };
    document.getElementById("p0_vpoints").innerText = p0_vpoints;
  }
  if (player == 'p1') {
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
  if (player == 'p0') {
    p0_vpoints++;
    document.getElementById("p0_vpoints").innerText = p0_vpoints;
  }
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
  adjustLayout();
}

// Remove Player
function delPlayer() {
  playerCount--;
  if (playerCount < 1) { playerCount = 1; };
  document.getElementById("player_count").innerText = playerCount;
  adjustLayout();
}

function adjustLayout() {
  let newClass = "duo"
  if (playerCount == 1) { newClass = " solo"; };
  if (playerCount == 2) { newClass = " duo";  };
  if (playerCount == 3) { newClass = " trio"; };
  if (playerCount == 4) { newClass = " quad"; };
  document.getElementById("p0_card").className = `playercard p0 ${newClass}`;
  document.getElementById("p1_card").className = `playercard p1 ${newClass}`;
  document.getElementById("p2_card").className = `playercard p2 ${newClass}`;
  document.getElementById("p3_card").className = `playercard p3 ${newClass}`;
  document.getElementById("p4_card").className = `playercard p4 ${newClass}`;
  document.getElementById("hotbar").className = `hotbar ${newClass}`;
}

// Victory Conditions
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
  if (p0_vpoints >= 30) {
    document.getElementById("p0_card").innerHTML = "<div class='endgame' ondblclick='location.reload()'>You have reached the end of<br />the Search My Heart campaign</div>";
    document.getElementById("p1_card").innerHTML = `<div class='endgame' ondblclick='location.reload()'><h2>Campaign Complete!</h2>You scored ${p1_vpoints} Virtue Points<br />and defeated ${p1_sinnies} Sinnies.</div>`;
    document.getElementById('p2_card').innerHTML = `<div class='endgame' ondblclick='location.reload()'><span class='material-symbols-outlined'>cancel</span></div>`;
    document.getElementById('p3_card').innerHTML = `<div class='endgame' ondblclick='location.reload()'><span class='material-symbols-outlined'>cancel</span></div>`;
    document.getElementById('p4_card').innerHTML = `<div class='endgame' ondblclick='location.reload()'><span class='material-symbols-outlined'>cancel</span></div>`;
  };
}

function gameOver(player, condition) {
  let winnerName = player;
  if (player =='p1') { winnerName = p1_name; };
  if (player =='p2') { winnerName = p2_name; };
  if (player =='p3') { winnerName = p3_name; };
  if (player =='p4') { winnerName = p4_name; };
  let victoryMessage = "";
  if (condition == 'vpoints') { victoryMessage = `${winnerName} won by scoring ${vpointsToWin} Virtue Points`; };
  if (condition == 'sinnies') { victoryMessage = `${winnerName} won by defeating 6 sinnies`; };
  document.getElementById('p0_card').innerHTML = "<div class='endgame' ondblclick='location.reload()'>You have reached the end of<br />the Search My Heart campaign</div>";
  document.getElementById('p1_card').innerHTML = `<div class='endgame' ondblclick='location.reload()'><h2>You lost :(</h2>${victoryMessage}</div>`;
  document.getElementById('p2_card').innerHTML = `<div class='endgame' ondblclick='location.reload()'><h2>You lost :(</h2>${victoryMessage}</div>`;
  document.getElementById('p3_card').innerHTML = `<div class='endgame' ondblclick='location.reload()'><h2>You lost :(</h2>${victoryMessage}</div>`;
  document.getElementById('p4_card').innerHTML = `<div class='endgame' ondblclick='location.reload()'><h2>You lost :(</h2>${victoryMessage}</div>`;
  document.getElementById(`${player}_card`).innerHTML = `<div class='endgame' ondblclick='location.reload()'><h2>YOU WIN!</h2>${victoryMessage}</div>`;
}

// Show, Hide Settings
function showSettings() {
  document.getElementById("scoreboard").style.display = "none";
  document.getElementById("settings").style.display = "block";
  document.getElementById("p1_editname").value = p1_name;
  document.getElementById("p2_editname").value = p2_name;
  document.getElementById("p3_editname").value = p3_name;
  document.getElementById("p4_editname").value = p4_name;
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

function saveNames() {
  p1_name = document.getElementById("p1_editname").value;
  document.getElementById("p1_name").innerText = p1_name;

  p2_name = document.getElementById("p2_editname").value;
  document.getElementById("p2_name").innerText = p2_name;

  p3_name = document.getElementById("p3_editname").value;
  document.getElementById("p3_name").innerText = p3_name;

  p4_name = document.getElementById("p4_editname").value;
  document.getElementById("p4_name").innerText = p4_name;
}