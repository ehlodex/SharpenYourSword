let p1_name = "Player One";
let p2_name = "Player Two";
let p3_name = "Player Three";
let p4_name = "Player Four";

function count_players() {
  let playerCount = document.getElementById('playerCount').value;
  let p1card = document.getElementById("p1_card");
  let p2card = document.getElementById("p2_card");
  let p3card = document.getElementById("p3_card");
  let p4card = document.getElementById("p4_card");
  let hotbar = document.getElementById("hotbar");
  if (playerCount == "4") {
    p1card.className = "playercard p1 quad";
    p2card.className = "playercard p2 quad";
    p3card.className = "playercard p3 quad";
    p4card.className = "playercard p4 quad";
    hotbar.className = "hotbar quad";
  };

  if (playerCount == "3") {
    p1card.className = "playercard p1 trio";
    p2card.className = "playercard p2 trio";
    p3card.className = "playercard p3 trio";
    p4card.className = "playercard p4 trio";
    hotbar.className = "hotbar trio";
  };

  if (playerCount == "2") {
    p1card.className = "playercard p1 duo";
    p2card.className = "playercard p2 duo";
    p3card.className = "playercard p3 duo";
    p4card.className = "playercard p4 duo";
    hotbar.className = "hotbar duo";
  };

  if (playerCount == "1") {
    p1card.className = "playercard p1 solo";
    p2card.className = "playercard p2 solo";
    p3card.className = "playercard p3 solo";
    p4card.className = "playercard p4 solo";
    hotbar.className = "hotbar solo";
  };
};

function showSettings() {
  document.getElementById('scoreboard').style.display='none';
  document.getElementById('settingsui').style.display='block';
  //document.getElementById('settings_icon').setAttribute("onClick", "javascript: hideSettings();");
};

function hideSettings() {
  document.getElementById('scoreboard').style.display='grid';
  document.getElementById('settingsui').style.display='none';
  //document.getElementById('settings_icon').setAttribute("onClick", "javascript: showSettings();");
};