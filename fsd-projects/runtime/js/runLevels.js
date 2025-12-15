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
   var enemyHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    enemyHitZone.x = x;
    enemyHitZone.y = y;
var redSquare = draw.rect(50, 50, "red");
enemy.addChild(redSquare);
enemy.x = enemyHitZone.x;
enemy.y = enemyHitZone.y;
game.addGameItem(enemy);
enemy.velocityX = -1
enemy.rotationalVelocity = 0
enemy.onPlayerCollision = function () {
  game.changeIntegrity(-10)
  enemy.fadeOut()
};
enemy.onProjectileCollision = function () {
  game.increaseScore(100);
enemy.fadeOut();
};
}
createEnemy(1000, 190);
createEnemy(1700, 200);
createEnemy(2100, 220);


function createReward(x, y) {
  var reward = game.createGameItem("reward", 25);
var greySquare = draw.rect(50, 50, "grey");
var rewardHitZone = game.createObstacle(hitZoneSize);
    rewardHitZone.x = x;
    rewardHitZone.y = y;
reward.addChild(greySquare);
reward.x = rewardHitZone.x;
reward.y = rewardHitZone.y;
game.addGameItem(reward);
reward.velocityX = -1
reward.rotationalVelocity = 0
reward.onPlayerCollision = function () {
  game.changeIntegrity(+10)
  reward.fadeOut()
};
reward.onProjectileCollision = function () {
  game.increaseScore(100);
reward.fadeOut();
};
}
createReward(1900, 210)
createReward(1500, 175)
createReward(2300, 160)

function createMarker(x, y) {
var marker = game.createGameItem("marker", 25);
var greenSquare = draw.rect(50, 100, "green");
var markerHitZone = game.createObstacle(hitZoneSize);
    markerHitZone.x = x;
    markerHitZone.y = y;
marker.addChild(greenSquare);
marker.x = x;
marker.y = y;
game.addGameItem(marker);
marker.velocityX = -1
marker.rotationalVelocity = 0
marker.onPlayerCollision = function () {
   startLevel()
   marker.fadeOut()
};
marker.onProjectileCollision = function () {
  startLevel()
marker.fadeOut();
};
}
createMarker(2500,200)


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

