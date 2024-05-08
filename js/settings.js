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
};


// DEL sinnies
function delSinnies(player) {
  if (player == 'p1') {
    let thisSinnie = `p1_sinnie${p1_sinnies}`;
    p1_sinnies--;
    if (p1_sinnies < 0) { p1_sinnies = 0; };
    document.getElementById(thisSinnie).style.color = "#28282b";
  };
  if (player == 'p2') {
    let thisSinnie = `p2_sinnie${p2_sinnies}`;
    p2_sinnies--;
    if (p2_sinnies < 0) { p2_sinnies = 0; };
    document.getElementById(thisSinnie).style.color = "#28282b";
  };
  if (player == 'p3') {
    let thisSinnie = `p3_sinnie${p3_sinnies}`;
    p3_sinnies--;
    if (p3_sinnies < 0) { p3_sinnies = 0; };
    document.getElementById(thisSinnie).style.color = "#28282b";
  };
  if (player == 'p4') {
    let thisSinnie = `p4_sinnie${p4_sinnies}`;
    p4_sinnies--;
    if (p4_sinnies < 0) { p4_sinnies = 0; };
    document.getElementById(thisSinnie).style.color = "#28282b";
  };
};

// ADD sinnies
function addSinnies(player) {
  if (player == 'p1') {
    p1_sinnies++;
    document.getElementById(`p1_sinnie${p1_sinnies}`).style.color = "red";
  };
  if (player == 'p2') {
    p2_sinnies++;
    document.getElementById(`p2_sinnie${p2_sinnies}`).style.color = "red";
  };
  if (player == 'p3') {
    p3_sinnies++;
    document.getElementById(`p3_sinnie${p3_sinnies}`).style.color = "red";
  };
  if (player == 'p4') {
    p4_sinnies++;
    document.getElementById(`p4_sinnie${p4_sinnies}`).style.color = "red";
  };
};

function toggleTournamentMode() {
  if (tournamentMode == 0) {
    tournamentMode = 1;
    document.getElementById("tournamentMode").innerText = "toggle_on";
    document.getElementById("tournamentModeStatus").innerText = "ON (77)";
    vpointsToWin = 77;
  } else {
    tournamentMode = 0;
    document.getElementById("tournamentMode").innerText = "toggle_off";
    document.getElementById("tournamentModeStatus").innerText = "OFF (60)";
    vpointsToWin = 60;
  }
}