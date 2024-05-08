let p1_points = 0;
let p1_sinnie = 0;
let p2_points = 0;
let p2_sinnie = 0;

function addPointsP1() {
  p1_points++;
  document.getElementById('p1_score').innerText = p1_points;
  if (p1_points == 60) {
    alert("Victory conditions met for casual play!");
  };
  if (p1_points == 77) {
    alert("Victory conditions met for tournament play!");
  };
};

function delPointsP1() {
  p1_points--;
  if (p1_points < 0) {
    p1_points = 0;
  };
  document.getElementById('p1_score').innerText = p1_points;
}

function addSinnieP1() {
  p1_sinnie++;
  let p1sn = `p1s${p1_sinnie}`;
  document.getElementById(p1sn).style.color = "red";
  if (p1_sinnie == 6) {
    alert("Victory conditons met!");
  };
};

function delSinnieP1() {
  let p1sn = `p1s${p1_sinnie}`;
  p1_sinnie--;
  if (p1_sinnie < 0) {
    p1_sinnie = 0;
  }
  document.getElementById(p1sn).style.color = "#28282b";
};

// Player 2
function addPointsP2() {
  p2_points++;
  document.getElementById('p2_score').innerText = p2_points;
  if (p2_points == 60) {
    alert("Victory conditions met for casual play!");
  };
  if (p2_points == 77) {
    alert("Victory conditions met for tournament play!");
  };
};

function delPointsP2() {
  p2_points--;
  if (p2_points < 0) {
    p2_points = 0;
  };
  document.getElementById('p2_score').innerText = p2_points;
}

function addSinnieP2() {
  p2_sinnie++;
  let p2sn = `p2s${p1_sinnie}`;
  document.getElementById(p2sn).style.color = "red";
  if (p2_sinnie == 6) {
    alert("Victory conditons met!");
  };
};

function delSinnieP2() {
  let p2sn = `p2s${p1_sinnie}`;
  p2_sinnie--;
  if (p2_sinnie < 0) {
    p2_sinnie = 0;
  }
  document.getElementById(p2sn).style.color = "#28282b";
};