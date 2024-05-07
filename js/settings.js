let p1_name = "Player One";
let p2_name = "Player Two";
let p3_name = "Player Three";
let p4_name = "Player Four";

function count_players() {
  let playerCount = document.getElementById('playerCount').value;

  if (playerCount == "4") {
  };

  if (playerCount == "3") {
  };

  if (playerCount == "2") {
  };
};

function showSettings() {
  document.getElementById('settings_content').style.display='block';
  document.getElementById('settings_overlay').style.display='block';
  document.getElementById('settings_icon').setAttribute("onClick", "javascript: hideSettings();");
};

function hideSettings() {
  document.getElementById('settings_content').style.display='none';
  document.getElementById('settings_overlay').style.display='none';
  document.getElementById('settings_icon').setAttribute("onClick", "javascript: showSettings();");
};