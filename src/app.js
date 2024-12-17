window.onload = function() {
  generateNewExcuse();
};

function generateNewExcuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird", "the neighbor"];
  let action = ["ate", "yelled at", "stole", "broke", "destroyed"];
  let what = ["my homework", "my keys", "my sandwich", "my car"];
  let where = [
    "in my house",
    "on the street",
    "in my driveway",
    "in the backyard"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhere = where[Math.floor(Math.random() * where.length)];

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhere}`;
  document.getElementById("excuse").innerHTML = excuse;
}
