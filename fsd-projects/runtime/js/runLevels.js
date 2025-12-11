var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
var hitZoneSize = 25;
var damageFromObstacle = 10;

function createSawBlade(x, y){
  var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
  var obstacleImage = draw.bitmap("img/sawblade.png");
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = sawBladeHitZone.x - obstacleImage.width / 2;
    obstacleImage.y = sawBladeHitZone.y - obstacleImage.width / 2;
  }
createSawBlade(1000, 200)
createSawBlade(1200, 130)
createSawBlade(1400, 250)
createSawBlade(1700, 180)


function createEnemy(x, y) {
  var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 50, "red");
redSquare.x = x;
redSquare.y = y;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy);
enemy.velocityX = 1
enemy.rotationalVelocity = 0
enemy.onPlayerCollision = function () {
  game.changeIntegrity(-10)
};
enemy.onProjectileCollision = function () {
  game.increaseScore(100);
enemy.fadeOut();
};
}
createEnemy(200, 100);
createEnemy(300, 50);
createEnemy(500, 75);
function createReward( ){

function createReward(x, y) {
  var reward = game.createGameItem("reward", 25);
var purpleSquare = draw.rect(50, 50, "purple");
purpleSquare.x = x;
purpleSquare.y = y;
reward.addChild(purpleSquare);
reward.x = x;
reward.y = y;
game.addGameItem(reward);
reward.velocityX = 0
reward.rotationalVelocity = 0
reward.onPlayerCollision = function () {
  game.changeIntegrity(+10)
};
reward.onProjectileCollision = function () {
  game.increaseScore(100);
reward.fadeOut();
};
}
createReward(400, 50)


    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
}
