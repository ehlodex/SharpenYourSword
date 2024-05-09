let p1_vpoints = 49;
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
    document.getElementById(`p1_sinnie${p1_sinnies}`).style.color = "#28282b";
    p1_sinnies--;
    if (p1_sinnies < 0) { p1_sinnies = 0; };
  };
  if (player == 'p2') {
    document.getElementById(`p2_sinnie${p2_sinnies}`).style.color = "#28282b";
    p2_sinnies--;
    if (p2_sinnies < 0) { p2_sinnies = 0; };
  };
  if (player == 'p3') {
    document.getElementById(`p3_sinnie${p3_sinnies}`).style.color = "#28282b";
    p3_sinnies--;
    if (p3_sinnies < 0) { p3_sinnies = 0; };
  };
  if (player == 'p4') {
    document.getElementById(`p4_sinnie${p4_sinnies}`).style.color = "#28282b";
    p4_sinnies--;
    if (p4_sinnies < 0) { p4_sinnies = 0; };
  };
};

// ADD sinnies
function addSinnies(player) {
  if (player == 'p1') {
    p1_sinnies++;
    if (p1_sinnies > 6) { p1_sinnies = 6; };
    document.getElementById(`p1_sinnie${p1_sinnies}`).style.color = "red";
  };
  if (player == 'p2') {
    p2_sinnies++;
    if (p2_sinnies > 6) { p2_sinnies = 6; };
    document.getElementById(`p2_sinnie${p2_sinnies}`).style.color = "red";
  };
  if (player == 'p3') {
    p3_sinnies++;
    if (p3_sinnies > 6) { p3_sinnies = 6; };
    document.getElementById(`p3_sinnie${p3_sinnies}`).style.color = "red";
  };
  if (player == 'p4') {
    p4_sinnies++;
    if (p4_sinnies > 6) { p4_sinnies = 6; };
    document.getElementById(`p4_sinnie${p4_sinnies}`).style.color = "red";
  };
  checkVictoryConditions();
};

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

function addPlayer() {
  playerCount++;
  if (playerCount > 4) { playerCount = 4; };
  document.getElementById("player_count").innerText = playerCount;
}

function delPlayer() {
  playerCount--;
  if (playerCount < 1) { playerCount = 1; };
  document.getElementById("player_count").innerText = playerCount;
}

function checkVictoryConditions() {
  if (p1_vpoints >= (vpointsToWin - (vpointsEllie * p1_ellie.checked))) {
    alert("Player 1 wins by Virtuous Points!");
  } else if (p1_sinnies >= 6) {
    alert("Player 1 wins by defeating 6 sinnies!");
  };
  if (p2_vpoints >= (vpointsToWin - (vpointsEllie * p2_ellie.checked))) {
    alert("Player 2 wins by Virtuous Points!");
  } else if (p2_sinnies >= 6) {
    alert("Player 2 wins by defeating 6 sinnies!");
  };
  if (p3_vpoints >= (vpointsToWin - (vpointsEllie * p3_ellie.checked))) {
    alert("Player 3 wins by Virtuous Points!");
  } else if (p3_sinnies >= 6) {
    alert("Player 3 wins by defeating 6 sinnies!");
  };
  if (p4_vpoints >= (vpointsToWin - (vpointsEllie * p4_ellie.checked))) {
    alert("Player 4 wins by Virtuous Points!");
  } else if (p4_sinnies >= 6) {
    alert("Player 4 wins by defeating 6 sinnies!");
  };
}

function showSettings() {
  document.getElementById("scoreboard").style.display = "none";
  document.getElementById("settings").style.display = "block";
}

function hideSettings() {
  document.getElementById("scoreboard").style.display = "grid";
  document.getElementById("settings").style.display = "none";
  checkVictoryConditions();
}