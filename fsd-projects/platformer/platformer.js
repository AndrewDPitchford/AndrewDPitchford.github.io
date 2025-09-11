$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

     //TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(150,650,130,20,"red");
createPlatform(115,520,150,20,"red");
createPlatform(320,430,3,50,"red");
createPlatform(385,350,130,20,"red");
createPlatform(605,440,50,30,"red");
createPlatform(970,440,130,20,"red");
createPlatform(990,320,130,20,"red");
createPlatform(1250,190,.1,100,"darkblue");
createPlatform(1350,220,130,20,"red");



    // TODO 3 - Create Collectable
createCollectable("ball",193,605);
createCollectable("ja",1015,395)
createCollectable("trophy",1360,180)





    
    // TODO 4 - Create Cannons
createCannon("left",570,1200)
createCannon("top",600,900)
createCannon("top",1300,1000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
