//--------------------------------------------------

//      infinte world
//    creating variables

// creating tittle of infinite race
var tittle,tittleimg;


// creating boxes for placind pictures on them
var box1,box2,box3,box4,box5;

// creating icons with their images for play, player // selector and ground selector
var play, playimg,playersel, playerselimg, groundsel, groundselimg;

// creating different background images
var back,back1,back2,back3,back4,back5,back6,back7,back8,back9,
back10,back11,back12,back13,back14,back15,back16;

//creating ground for storing background images
var ground,ground2,ground3,ground4,ground5,
ground8,ground9,ground12,ground13,
ground14,ground16;

// creating background icon
var groundi,ground2i,ground3i,ground4i,ground5i,
ground8i,ground9i,ground12i,ground13i,
ground14i,ground16i;

//creating invisible ground 
var invisibleGround;

// creating player with player images
var player,player2,player3,player4,player5,player6,playerimg,player2img,player3img,player4img,player5img,player6img;

// creating obstacles and coin
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5;

var coinimg;

// creating gameStates
var SERVE = 1;
var PLAYERSELECTOR = 2;
var GROUNDSELECTOR = 3;

var PLAY = 4;
var END = 0;

var gameState = SERVE;
//--------------------------------------------------

// creating icon and their images for assigning them // in player selecting state
var pikachu,sonicdash,cyclerider,monkey,dino,pikachuimg,
  sonicdashimg,cycleriderimg,monkeyimg,dinoimg;

// creating exit image and variable
var exit,exitimg;

// creating box as a cover of ground icon
var cover;

//creating groups
var obstacleGroup, coinGroup;

// create scoreboard
var score = 0;

// creating scoreBoard sign and its sprite
var scoreimg,scorep;

//creating meter counter
var meter = 0;

//creating game over text, restart icon and home button with their images
var gameover,gameoverimg;
var restart, restarticon;
var home, homeicon;

// creating gameover screen
var gameoverscreen,gameoverscreenimg;

//--------------------------------------------------
function preload(){
  // storing images,animation and sound to variable 

  // storing image for tittle
  tittleimg = loadImage("tittle.png");
  
  // storing image for play icon
  playimg = loadImage("play icon.png");
  
  // storing image for player selecting icon
  playerselimg = loadImage("player selctor.png");
  
  // storing image for ground selecting icon
  groundselimg = loadImage("ground selectorf.png");
  
  //storing images for background
       back = loadImage("main view.jpg");
       back1 = loadImage("background infinite 1.jpg")
       back2 = loadImage("background infinite 2.jpg");
       back3 = loadImage("background infinite 3.jpg");
       back4 = loadImage("background infinite 4.jpg");
       back5 = 
         loadImage("background infinite 5 edit.png");
       back8 = loadImage("background infinite 8.jpg");
       back9 = loadImage("background infinite 9.webp");
       back12 = loadImage("background infinite 12.jpg");
       back13 = loadImage("background infinite 13.jpg");
       back14 = loadImage("background infinite 14.jpg");
       back16 = loadImage("background infinite 16.png");
  
  //storing animation for players
       playerimg = loadAnimation("cat runner1.png",
"cat runner2.png","cat runner3.png","cat runner4.png");
  
  player2img = loadAnimation("rider 1.png","rider 2.png","rider 3.png",
"rider 4.png","rider 5.png","rider 6.png");
  
  player3img = 
loadAnimation ("pikachu 1.png","pikachu 2.png",
"pikachu 3.png","pikachu 4.png",
"pikachu 5.png","pikachu 6.png","pikachu 7.png",
"pikachu 8.png")
  
  player4img = loadAnimation("DINO 1 EDIT.png",
"dino 2 edit.png","dino 3 edit.png","dino 4 edit.png","dino 5 edit.png","dino 6 edit.png","dino 7 edit.png")
  
  player5img = loadAnimation("mon 1 edit.png","mon 2 edit.png","mon 3 edit.png","mon 4 edit.png","mon 5 edit.png","mon 6 edit.png");
  
  //storing images for icon those arte storing in player selectingstate
  monkeyimg = loadImage("mon 1 edit.png");
  dinoimg = loadImage("DINO 1 EDIT.png");
  cycleriderimg = loadImage("rider 1.png");
  sonicdashimg = loadImage("sonic dash images.png")
  pikachuimg = loadImage("pikachu.png");
  
  //storing image for exit icon
  exitimg = loadImage("exit.png");
  
  //storing image to obstacles
  //obstacle1
  obstacle1 = loadImage("batman.png");
  //obstacle2
  obstacle2 = loadImage("dragon.png");
  //obstacle3
  obstacle3 = loadImage("lion.png");
  //obstacle4
  obstacle4 = loadImage("obstacle1.png");
  //obstacle5
  obstacle5 = loadImage("obstacle2.png"); 
  
  //storing image to coin
  coinimg = loadImage("coin.png");
  
  //storing imagge to score
  scoreimg = loadImage("coin score.png");
  
  // storing image to restart icon
  restarticon = loadImage("restart.png");
  
  //storing image to home icon
  homeicon = loadImage("home icon.png");
  
  //storing image to game over 
  gameoverimg = loadImage("game over b.png");
 
  //storing image for game over screen
  gameoverscreenimg = loadImage("gmae over screen.jpg");
  //------------------------------------------------
}

function setup() {
  //------------------------------------------------
  
  //creating sprite for game with adding sound, animation and images
  
  //creating canvas of 500-width and 400-height
  createCanvas(500,400);
 
  //creating tittle
  tittle = createSprite(250,100);
  tittle.addImage(tittleimg);
  tittle.scale = 0.3;
  
  //creating play icon
  play = createSprite(250,250);
  play.addImage(playimg);
  play.scale = 0.1;
  
  //creating main background
  ground = createSprite(250,200);
  ground.addImage(back);
  ground.scale = 2;
  ground.visible = false;
  
  // creating backgrounds for playState
  // creating ground2(spooky ghost place evening view)
  ground2 = createSprite(250,200);
  ground2.addImage(back2);
  ground2.scale = 2;
  ground2.visible = false;
  
  //creating ground3(dense forest)
  ground3 = createSprite(250,200);
  ground3.addImage(back3);
  ground3.scale = 3;
  ground3.visible = false;
  
  // creating ground4(snow covered mountain with  white plants)
  ground4 = createSprite(250,200);
  ground4.addImage(back4);
  ground4.scale = 3;
  ground4.visible = false;
  
  // creating ground5(night in forest)
  ground5 = createSprite(250,200);
  ground5.addImage(back5);
  ground5.scale = 0.45;
  ground5.visible = false;
  
  // creating ground8(green forest)
  ground8 = createSprite(250,200);
  ground8.addImage(back8);
  ground8.scale = 0.8;
  ground8.visible = false;
  
  // creating ground9(alien planet red day)
  ground9 = createSprite(250,200);
  ground9.addImage(back9);
  ground9.scale = 2;
  ground9.visible = false;
  
  // creating ground12(beautiful forest)
  ground12 = createSprite(250,200);
  ground12.addImage(back12);
  ground12.scale = 0.6;
  ground12.visible = false;
  
  // creating ground13(slow cored mountain with green plants)
  ground13 = createSprite(250,200);
  ground13.addImage(back13);
  ground13.scale = 1.8;
  ground13.visible = false;
  
  // creating ground14(polar region)
  ground14 = createSprite(250,200);
  ground14.addImage(back14);
  ground14.scale = 0.9;
  ground14.visible = false;

  // creating ground16(sloping mountain)
  ground16 = createSprite(250,200);
  ground16.addImage(back16);
  ground16.scale = 2;
  ground16.visible = false;

  // creating invisible
  invisibleGround = createSprite(150,350,900,10);
  invisibleGround.visible = false;
  
  // creating sonic dash
  player = createSprite(150,250);
  player.addAnimation("cat runner",playerimg);
  player.scale = 0.2;
  player.visible = false;
  
  //creating cycle runner
  player2 = createSprite(150,250);
  player2.addAnimation("cycle runner",player2img);
  player2.scale = 2;
  player2.visible = false;
  
  //creating pikachu
   player3 = createSprite(150,250);
  player3.addAnimation("pikachu",player3img);
  player3.scale = 1;
  player3.visible = false;
  
  // creating dino
  player4 = createSprite(150,250);
  player4.addAnimation("dino",player4img);
  player4.scale = 1;
  player4.visible = false;
  
  //creating monkey
  player5 = createSprite(150,250);
  player5.addAnimation("monkey",player5img);
  player5.scale = 0.2;
  player5.visible = false;
  
  // creating player selecting icon
  playersel = createSprite(250,350);
  playersel.addImage(playerselimg);
  playersel.scale = 0.1;
  
  
  // creating ground selecting icon
  groundsel = createSprite(250,300);
  groundsel.addImage(groundselimg);
  groundsel.scale = 0.1;
  
  
  // creating boxes---------------------------------
  box1 = createSprite(90,110,120,180);
  box1.shapeColor = "black";
  box1.visible = false;
  
    box2 = createSprite(230,110,120,180);
  box2.shapeColor = "black";
  box2.visible = false;
  
    box3 = createSprite(370,110,120,180);
  box3.shapeColor = "black";
  box3.visible = false;
  
    box4 = createSprite(90,300,120,180);
  box4.shapeColor = "black";
  box4.visible = false;
  
    box5 = createSprite(230,300,120,180);
  box5.shapeColor = "black";
  box5.visible = false;
  
  // monkey
  monkey = createSprite(90,70)
  monkey.addImage(monkeyimg)
  monkey.scale = 0.2;
  monkey.visible = false;
  
  // dino
  dino = createSprite(230,90)
  dino.addImage(dinoimg)
  dino.scale = 0.9;
  dino.visible = false;
  
  //sonic dash
  sonicdash = createSprite(370,90)
  sonicdash.addImage(sonicdashimg)
  sonicdash.scale = 0.4;
  sonicdash.visible = false;
  
  //cycle rider
  cyclerider = createSprite(90,250)
  cyclerider.addImage(cycleriderimg)
  cyclerider.scale = 0.9;
  cyclerider.visible = false;
  
  //pikachu
  pikachu = createSprite(230,270)
  pikachu.addImage(pikachuimg)
  pikachu.scale = 0.3;
  pikachu.visible = false;
  
  // creating cover of ground icon
  cover = createSprite(100,100,100,50);
  cover.visible = false;
  
  //creating ground icon for selcting
  
  //(spooky ghost place evening view) icon 2
  ground2i = createSprite(330,370);
  ground2i.addImage(back2);
  ground2i.scale = 0.09;
  ground2i.visible = false;
 
  //(dense forest) icon 3
  ground3i = createSprite(330,270);
  ground3i.addImage(back3);
  ground3i.scale = 0.3;
  ground3i.visible = false;
  
  //(snow covered mountain with  white plants) icon 4
  ground4i = createSprite(330,200);
  ground4i.addImage(back4);
  ground4i.scale = 0.3;
  ground4i.visible = false;
  
  //(night in forest) icon 5
  ground5i = createSprite(330,130);
  ground5i.addImage(back5);
  ground5i.scale = 0.07;
  ground5i.visible = false;
  
  //(green forest) icon 8
  ground8i = createSprite(330,50);
  ground8i.addImage(back8);
  ground8i.scale = 0.1;
  ground8i.visible = false;
  
  //(alien planet red day) icon 9
  ground9i = createSprite(150,290);
  ground9i.addImage(back9);
  ground9i.scale = 0.2;
  ground9i.visible = false;
  
  //(beautiful forest) icon 12
  ground12i = createSprite(150,210);
  ground12i.addImage(back12);
  ground12i.scale = 0.09;
  ground12i.visible = false;
  
  //(slow cored mountain with green plants) icon 13
  ground13i = createSprite(150,130);
  ground13i.addImage(back13);
  ground13i.scale = 0.2;
  ground13i.visible = false;
  
  //(polar region) icon 14
  ground14i = createSprite(150,370);
  ground14i.addImage(back14);
  ground14i.scale = 0.1;
  ground14i.visible = false;

  // (sloping mountain) icon16
  ground16i = createSprite(150,50);
  ground16i.addImage(back16);
  ground16i.scale = 0.2;
  ground16i.visible = false;

  // creating exit
  exit = createSprite(20,30);
  exit.addImage(exitimg);
  exit.scale = 0.2;
  exit.visible = false;
  
  // making obstacleGroup and coinGroup a group
  obstacleGroup = new Group();
  coinGroup = new Group();
  
  //creating coin sign for score
  scorep = createSprite(380,20);
  scorep.addImage(scoreimg);
  scorep.scale = 0.05;
  scorep.visible = false;
  
  // creating gameover screen
  gameoverscreen = createSprite(250,200);
  gameoverscreen.addImage(gameoverscreenimg);
  gameoverscreen.scale = 1;
  gameoverscreen.visible = false;
  
  //creating game over 
  gameover = createSprite(250, 150);
  gameover.addImage(gameoverimg);
  gameover.scale = 1;
  gameover.visible = false;
  
  //creating restart
  restart = createSprite(300,350);
  restart.addImage(restarticon);
  restart.scale = 0.03;
  restart.visible = false;
  
  //creating home 
  home = createSprite(200,350);
  home.addImage(homeicon);
  home.scale = 0.15;
  home.visible = false;
  
  
  
  //------------------------------------------------
}

function draw() {
  //-----------------------------------------------
  
  // assigning function to sprites 
  
  
  // assing background
 background(back);
  
  console.log("cover x position  "+cover.x + "   cover y position" + cover.y);
  
   drawSprites();
  
  //------------------------------------------------
  // serve state
  if(gameState == SERVE){
    
    tittle.visible = true;
    play.visible = true;
    groundsel.visible = true;
    playersel.visible = true;
    ground.visible = false;
ground2.visible = false;
ground3.visible = false;
ground4.visible = false;
ground5.visible = false;
ground8.visible = false;
ground9.visible = false;
 ground12.visible = false;
 ground13.visible = false;
 ground14.visible = false;
 ground16.visible = false;
    
// making as if cursor is over on play increase is size
    if(mouseIsOver(play)){
      play.scale = 0.14;
      cursor('pointer');
    }else{
      play.scale = 0.1;
      cursor(ARROW);
    } 
    
    // making as if cursor is over on ground selcting icon increase is size
    if(mouseIsOver(groundsel)){
      groundsel.scale = 0.14;
      cursor('pointer');
    }else{
      groundsel.scale = 0.1;
    }
    
    // making as if cursor is over on player selecting icon increase is size
     if(mouseIsOver(playersel)){
      playersel.scale = 0.14;
       cursor('pointer');
    }else{
      playersel.scale = 0.1;
    }
    
    // making as if cursor is over on tittle increase is size
    if(mouseIsOver(tittle)){
      tittle.scale = 0.34;
    }else{
      tittle.scale = 0.3;
    }
    
  // making as if mouse key is pressed on play change its state to play
    if(mousePressedOver(play)){
      gameState = PLAY;
      tittle.visible = false;
    play.visible = false;
    groundsel.visible = false;
    playersel.visible = false;
    }
    
    // making as if mouse key is pressed on player selecting icon change its state to play
    if(mousePressedOver(playersel)){
      gameState = PLAYERSELECTOR;
      
    }
    
    // making as if mouse key is pressed on ground selecting icon change its state to play
    
    if(mousePressedOver(groundsel)){
      gameState = GROUNDSELECTOR;
      
    }
    
  }
  
  //------------------------------------------------
  //player selecting state
  if(gameState == PLAYERSELECTOR){
   tittle.visible = false;
    play.visible = false;
    groundsel.visible = false;
    playersel.visible = false;
    box1.visible = true;
box2.visible = true;
box3.visible = true;
box4.visible = true;
box5.visible = true;
monkey.visible = true;
dino.visible = true;
sonicdash.visible = true;
cyclerider.visible = true;
pikachu.visible = true;
    exit.visible = true;
    
    // making as if exit is over on tittle increase is size
    if(mouseIsOver(exit)){
      exit.scale = 0.24;
      cursor('pointer');
    }else{
      exit.scale = 0.2;
      cursor(ARROW);
    }
    
     // making as if mouse key is pressed on exit icon change its state to play
    if(mousePressedOver(exit)){
      gameState = SERVE;
      exit.visible = false;
      box1.visible = false;
      box2.visible = false;
      box3.visible = false;
      box4.visible = false;
      box5.visible = false;
      monkey.visible = false;
      pikachu.visible = false;
      sonicdash.visible = false;
      cyclerider.visible = false;
      dino.visible = false;
    }
    
    // making as if cursor is over on box1 increase is size
    if(mouseIsOver(box1)){
      box1.width = 130;
      box1.height = 200;
      monkey.scale = 0.24;
      cursor('pointer');
    }else{box1.width = 120;
      box1.height = 180;
      monkey.scale = 0.2;

         }
    
    // making as if cursor is over on box2 increase is size
    if(mouseIsOver(box2)){
      box2.width = 130;
      box2.height = 200;
      dino.scale = 0.94;
      cursor('pointer');
    }else{box2.width = 120;
      box2.height = 180;
      dino.scale = 0.9;
  
         }
    
    // making as if cursor is over on box 3 increase is size
    if(mouseIsOver(box3)){
      box3.width = 130;
      box3.height = 200;
      sonicdash.scale = 0.44;
      cursor('pointer');
    }else{box3.width = 120;
      box3.height = 180;
      sonicdash.scale = 0.4;
     
         }
    
    // making as if cursor is over on box 4  increase is size
    if(mouseIsOver(box4)){
      box4.width = 130;
      box4.height = 200;
      cyclerider.scale = 0.94;
      cursor('pointer');
    }else{box4.width = 120;
      box4.height = 180;
      cyclerider.scale = 0.9;
      
         }
    
    // making as if cursor is over on box 5 increase is size
    if(mouseIsOver(box5)){
      box5.width = 130;
      box5.height = 200;
      pikachu.scale = 0.34;
    }else{box5.width = 120;
      box5.height = 180;
      pikachu.scale = 0.3;
         }
   if(mousePressedOver(box5 || pikachu)){
     box5.shapeColor = "yellow";
     box4.shapeColor = "black";
     box3.shapeColor = "black";
     box2.shapeColor = "black";
     box1.shapeColor = "black";
  }
    if(mousePressedOver(box4 || cyclerider)){
     box4.shapeColor = "yellow";
     box5.shapeColor = "black";
     box3.shapeColor = "black";
     box2.shapeColor = "black";
     box1.shapeColor = "black";
  }
    
    if(mousePressedOver(box3 || sonicdash)){
     box3.shapeColor = "yellow";
     box5.shapeColor = "black";
     box4.shapeColor = "black";
     box2.shapeColor = "black";
     box1.shapeColor = "black";
  }
    
     if(mousePressedOver(box2 || dino)){
     box2.shapeColor = "yellow";
     box5.shapeColor = "black";
     box4.shapeColor = "black";
     box3.shapeColor = "black";
     box1.shapeColor = "black";
  }
    
     if(mousePressedOver(box1 || monkey)){
     box1.shapeColor = "yellow";
     box5.shapeColor = "black";
     box4.shapeColor = "black";
     box2.shapeColor = "black";
     box3.shapeColor = "black";
  }
    
  }
  
  //------------------------------------------------
  // ground selecting state
  if(gameState == GROUNDSELECTOR){
    tittle.visible = false;
    play.visible = false;
    groundsel.visible = false;
    playersel.visible = false;
    ground2i.visible = true;
    ground3i.visible = true;
    ground4i.visible = true;
    ground5i.visible = true;
    ground8i.visible = true;
    ground9i.visible = true;
    ground12i.visible = true;
    ground13i.visible = true;
    ground14i.visible = true;
    ground16i.visible = true;
    
    
   if(mousePressedOver(ground2i)){
     cover.x = ground2i.x;
     cover.y = ground2i.y;
     cover.height = 80;
     cover.width = 100;
     cover.shapeColor = "orange";
     cover.visible = true;
   }
    
    if(mousePressedOver(ground3i)){
     cover.x = ground3i.x;
     cover.y = ground3i.y;
     cover.height = 55;
      cover.width = 100;
     cover.shapeColor = "orange";
      cover.visible = true;
   }
    
    if(mousePressedOver(ground4i)){
     cover.x = ground4i.x;
     cover.y = ground4i.y;
     cover.height = 55;
      cover.width = 100;
     cover.shapeColor = "orange";
      cover.visible = true;
   }
    
    if(mousePressedOver(ground5i)){
     cover.x = ground5i.x;
     cover.y = ground5i.y;
     cover.height = 75;
    cover.width = 150;
     cover.shapeColor = "orange";
      cover.visible = true;
   }
    
     if(mousePressedOver(ground8i)){
     cover.x = ground8i.x;
     cover.y = ground8i.y;
     cover.height = 80;
    cover.width = 140;
     cover.shapeColor = "orange";
       cover.visible = true;
   }
    
     if(mousePressedOver(ground9i)){
     cover.x = ground9i.x;
     cover.y = ground9i.y;
     cover.height = 70;
    cover.width = 160;
     cover.shapeColor = "orange";
       cover.visible = true;
   }
    
     if(mousePressedOver(ground12i)){
     cover.x = ground12i.x;
     cover.y = ground12i.y;
     cover.height = 75;
    cover.width = 130;
     cover.shapeColor = "orange";
       cover.visible = true;
   }
    
     if(mousePressedOver(ground13i)){
     cover.x = ground13i.x;
     cover.y = ground13i.y;
     cover.height = 65;
    cover.width = 130;
     cover.shapeColor = "orange";
       cover.visible = true;
   }
    
    if(mousePressedOver(ground14i)){
     cover.x = ground14i.x;
     cover.y = ground14i.y;
     cover.height = 90;
    cover.width = 120;
     cover.shapeColor = "orange";
      cover.visible = true;
   }
    
    if(mousePressedOver(ground16i)){
     cover.x = ground16i.x;
     cover.y = ground16i.y;
     cover.height = 35;
    cover.width = 70;
     cover.shapeColor = "orange";
      cover.visible = true;
   }
    
    exit.visible = true;
    
    if(mousePressedOver(exit)){
      gameState = SERVE;
      exit.visible = false;
      ground2i.visible = false;
      ground3i.visible = false;
      ground4i.visible = false;
      ground5i.visible = false;
      ground8i.visible = false;
      ground9i.visible = false;
      ground12i.visible = false;
      ground13i.visible = false;
      ground14i.visible = false;
      ground16i.visible = false;
      cover.visible = false;
    }
    
    
    // making as if cursor is over on exit icon  increase is size
    if(mouseIsOver(exit)){
      exit.scale = 0.24;
      cursor('pointer');
    }else{
      exit.scale = 0.2;
      cursor(ARROW);
    }
    
    // making as if cursor is over on ground 2 icon  increase is size
    if(mouseIsOver(ground2i)){
      ground2i.scale = 0.12;
      cursor('pointer');
    }else{
      ground2i.scale = 0.09;
    }
    
    // making as if cursor is over on ground 3 icon  increase is size
      if(mouseIsOver(ground3i)){
      ground3i.scale = 0.34;
        cursor('pointer');
    }else{
      ground3i.scale = 0.3;
  
    }
   
    // making as if cursor is over on ground 4 icon  increase is size
      if(mouseIsOver(ground4i)){
      ground4i.scale = 0.34;
        cursor('pointer');
    }else{
      ground4i.scale = 0.3;
      
    }
     
    // making as if cursor is over on ground 5 icon  increase is size
      if(mouseIsOver(ground5i)){
      ground5i.scale = 0.074;
        cursor('pointer');
    }else{
      ground5i.scale = 0.07;
      
    }
      
    // making as if cursor is over on ground 8 icon  increase is size
      if(mouseIsOver(ground8i)){
      ground8i.scale = 0.14;
        cursor('pointer');
    }else{
      ground8i.scale = 0.1;
      
    }
      
    // making as if cursor is over on ground 9 icon  increase is size
      if(mouseIsOver(ground9i)){
      ground9i.scale = 0.24;
        cursor('pointer');
    }else{
      ground9i.scale = 0.2;
      
    }
      
    // making as if cursor is over on ground 12 icon  increase is size
      if(mouseIsOver(ground12i)){
      ground12i.scale = 0.094;
        cursor('pointer');
    }else{
      ground12i.scale = 0.09;
      
    }
      
    // making as if cursor is over on ground 13 icon  increase is size
      if(mouseIsOver(ground13i)){
      ground13i.scale = 0.24;
        cursor('pointer');
    }else{
      ground13i.scale = 0.2;
     
    }
      
    // making as if cursor is over on ground 14 icon  increase is size
      if(mouseIsOver(ground14i)){
      ground14i.scale = 0.14;
        cursor('pointer');
    }else{
      ground14i.scale = 0.1;
   
    }
      
    // making as if cursor is over on ground 16 icon  increase is size
      if(mouseIsOver(ground16i)){
      ground16i.scale = 0.14;
        cursor('pointer');
    }else{
      ground16i.scale = 0.1;
      
    }
    
    console.log(cover.y);
    
      }
  //------------------------------------------------
  if(gameState == PLAY){
    
   // player.debug = true;
   // player2.debug = true;
    //player3.debug = true;
   // player4.debug = true;
  //  player5.debug = true;
    
    player5.setCollider("rectangle",0,0,350,350);
    player4.setCollider("rectangle",0,-10,50,50);
    player.setCollider("rectangle",0,0,300,400);
    player2.setCollider("rectangle",0,0,80,50);
    scorep.visible = true;
    
    if(cover.x == 100 && cover.y == 100){
    text("YOU HAVE NOT SELECTED ANY BACKGROUND YET",60,180)
    }
    
    if(box1.shapeColor == "black" && box2.shapeColor == "black" && box3.shapeColor == "black" && box4.shapeColor == "black" && box5.shapeColor == "black"){
      text("YOU HAVE NOT SELECTED ANY PLAYER YET",60,120)
    }
   
    if(box1.shapeColor == "yellow"){
      player5.visible = true;
      obstaclecreator();
    coincaller();
      if(player5.isTouching(coinGroup)){
      coinGroup.destroyEach();
      score = score + 1;
        if(player5.isTouching(obstacleGroup)){
       gameState = END;
      }
    }
    }
    
    if(box2.shapeColor == "yellow"){
      player4.visible = true;
      obstaclecreator();
    coincaller();
      if(player4.isTouching(coinGroup)){
      coinGroup.destroyEach();
      score = score + 1;
    }
      if(player4.isTouching(obstacleGroup)){
       gameState = END;
      }
    }
    
    if(box3.shapeColor == "yellow"){
      player.visible = true;
      obstaclecreator();
    coincaller();
      if(player.isTouching(coinGroup)){
      coinGroup.destroyEach();
      score = score + 1;
    }
      if(player.isTouching(obstacleGroup)){
       gameState = END;
      }
    }
    
    if(box4.shapeColor == "yellow"){
      player2.visible = true;
      obstaclecreator();
    coincaller();
      if(player2.isTouching(coinGroup)){
      coinGroup.destroyEach();
      score = score + 1;
    }
      if(player2.isTouching(obstacleGroup)){
       gameState = END;
      }
    }
    
    if(box5.shapeColor == "yellow"){
      player3.visible = true;
      obstaclecreator();
    coincaller();
      if(player3.isTouching(coinGroup)){
      coinGroup.destroyEach();
      score = score + 1;
    }
      if(player3.isTouching(obstacleGroup)){
       gameState = END;
      }
    }
    
  
    
    if(cover.x == 150 && cover.y == 50){
  ground16.visible = true; 
  invisibleGround.y = 380;
  if(keyDown("space") && player.y >= 300){
      player5.velocityY = - 12;
      player4.velocityY =  - 12;
      player3.velocityY =  - 12;
      player2.velocityY =  - 12;
      player.velocityY =  - 12;
    }
      
      obstaclecreator();
    coincaller();
      
  }
     if(cover.y == 50 && cover.x == 330){
    ground8.visible = true;
       invisibleGround.y = 350;
       if(keyDown("space") && player.y >= 300){
      player5.velocityY = - 12;
      player4.velocityY =  - 12;
      player3.velocityY =  - 12;
      player2.velocityY =  - 12;
      player.velocityY =  - 12;
    }
       
       obstaclecreator();
    coincaller();
       
  }
     if(cover.x == 150 && cover.y == 130){
    ground13.visible = true;
       invisibleGround.y = 390;
       if(keyDown("space") && player.y >= 320){
      player5.velocityY = - 12;
      player4.velocityY =  - 12;
      player3.velocityY =  - 12;
      player2.velocityY =  - 12;
      player.velocityY =  - 12;
    }
       
       obstaclecreator();
    coincaller();
       
  }
    if(cover.x == 150 && cover.y == 210){
    ground12.visible = true;
      invisibleGround.y = 350;
      if(keyDown("space") && player.y >= 300){
      player5.velocityY = - 12;
      player4.velocityY =  - 12;
      player3.velocityY =  - 12;
      player2.velocityY =  - 12;
      player.velocityY =  - 12;
    }
      
      obstaclecreator();
    coincaller();
      
  }
    if(cover.x == 150 && cover.y == 290){
    ground9.visible = true;
      invisibleGround.y = 350;
      if(keyDown("space") && player.y >= 300){
      player5.velocityY = - 12;
      player4.velocityY =  - 12;
      player3.velocityY =  - 12;
      player2.velocityY =  - 12;
      player.velocityY =  - 12;
    }
      
      obstaclecreator();
    coincaller();
      
  }
    if(cover.x == 150 && cover.y == 370){
    ground14.visible = true;
      coincaller2();
      obstaclecreator();
      invisibleGround.y = 300;
      if(keyDown("space") && player.y >= 230){
      player5.velocityY = - 12;
      player4.velocityY =  - 12;
      player3.velocityY =  - 12;
      player2.velocityY =  - 12;
      player.velocityY =  - 12;
    }
  }
    if(cover.x == 330 && cover.y == 130){
    ground5.visible = true;
      invisibleGround.y = 350;
      if(keyDown("space") && player.y >= 300){
      player5.velocityY = - 12;
      player4.velocityY =  - 12;
      player3.velocityY =  - 12;
      player2.velocityY =  - 12;
      player.velocityY =  - 12;
    }
      
      obstaclecreator();
    coincaller();
      
  }
    if(cover.x == 330 && cover.y == 200){
    ground4.visible = true;
      invisibleGround.y = 380;
      if(keyDown("space") && player.y >= 310){
      player5.velocityY = - 12;
      player4.velocityY =  - 12;
      player3.velocityY =  - 12;
      player2.velocityY =  - 12;
      player.velocityY =  - 12;
    }
      
      obstaclecreator();
    coincaller();
      
  }
    if(cover.x == 330 && cover.y == 270){
    ground3.visible = true;
      invisibleGround.y = 360;
      if(keyDown("space") && player.y >= 250){
      player5.velocityY = - 12;
      player4.velocityY =  - 12;
      player3.velocityY =  - 12;
      player2.velocityY =  - 12;
      player.velocityY =  - 12;
    }
      
      obstaclecreator();
    coincaller();
      
  }
    if(cover.x == 330 && cover.y == 370){
    ground2.visible = true;
      invisibleGround.y = 340;
      if(keyDown("space") && player.y >= 290){
      player5.velocityY = - 12;
      player4.velocityY =  - 12;
      player3.velocityY =  - 12;
      player2.velocityY =  - 12;
      player.velocityY =  - 12;
    }
      
      obstaclecreator();
    coincaller();
      
    }
  //------------------------------------------------------------------------
  // adding gravity to players
    
    //player1
    player.velocityY = player.velocityY + 0.6;
  
    //player2
    player2.velocityY = player2.velocityY + 0.6;
    
    //player3
    player3.velocityY = player3.velocityY + 0.6;
    
    //player4
    player4.velocityY = player4.velocityY + 0.6;
    
    //player5
    player5.velocityY = player5.velocityY + 0.6;
    
    //make collider of every player to invisible ground
      //set collider to player1
    player.collide(invisibleGround);
    
    //set collider to player2
    player2.collide(invisibleGround);
    
      //set collider to player3
    player3.collide(invisibleGround);
    
      //set collider to player4
    player4.collide(invisibleGround);
    
      //set collider to player5
    player5.collide(invisibleGround);
    
    // giving jumping effect to all player if any of the player presses space key
    //player1
    
    
    console.log("mouseX : "+mouseY+" and mouseX : "+mouseX);
    
    
  //give velocity to ground
  ground.velocityX = -7;
  
  //reset ground
  if(ground.x < 200){
  ground.x = ground.width/0.8;
}
  
  //give velocity to ground2
   ground2.velocityX = -7;
  
  //reset ground2
  if(ground2.x < 200){
  ground2.x = ground2.width/1;
}
  
  //give velocity to ground3
  ground3.velocityX = -7;
   
  //reset ground3
  if(ground3.x < 20){
  ground3.x = ground3.width/0.7;
}
  
  //give velocity to ground4
  ground4.velocityX = -7;
   
  //reset ground4
  if(ground4.x < 30){
  ground4.x = ground4.width/0.7;
}
  
  //give velocity to ground5
  ground5.velocityX = -7;
   
  //reset ground5
  if(ground5.x < 50){
  ground5.x = ground5.width/4.5;
}
  
  //give velocity to ground8
  ground8.velocityX = -7;
  
  //reset ground8
  if(ground8.x < 20){
  ground8.x = ground8.width/3;
}
 
  //give velocity to ground9
  ground9.velocityX = -7;
  
  //reset ground9
  if(ground9.x < -180){
  ground9.x = ground9.width/1;
}
  
  //give velocity to ground12
   ground12.velocityX = -7;
  
  //reset ground12
  if(ground12.x < 140){
  ground12.x = ground12.width/3.5;
  }
  
  //give velocity to ground13
   ground13.velocityX = -7;
  
  //reset ground13
  if(ground13.x < -30){
  ground13.x = ground13.width/1.5;
}
  
  //give velocity to ground14
   ground14.velocityX = -7;
  
  //reset ground14
  if(ground14.x < 50){
  ground14.x = ground14.width/4;
}
  
  //give velocity to ground16
   ground16.velocityX = -7;
  
  //reset ground16
  if(ground16.x < -100){
  ground16.x = ground16.width/1;
  }
    obstacleGroup.collide(invisibleGround);
    
    stroke("red");
    fill("purple");
    textSize(20);
    text(":  " + score,420,25);
    
    exit.visible = true;
      // making as if cursor is over on exit icon  increase is size
    if(mouseIsOver(exit)){
      exit.scale = 0.24;
      cursor('pointer');
    }else{
      exit.scale = 0.2;
      cursor(ARROW);
    }
    
    if(mousePressedOver(exit)){
      gameState = SERVE;
       exit.visible = false;
      ground2.visible = false;
      ground3.visible = false;
      ground4.visible = false;
      ground5.visible = false;
      ground8.visible = false;
      ground9.visible = false;
      ground12.visible = false;
      ground13.visible = false;
      ground14.visible = false;
      ground16.visible = false;
      cover.visible = false;
      player.visible = false;
      player2.visible = false;
      player3.visible = false;
      player4.visible = false;
      player5.visible = false;
      scorep.visible = false;
      obstacleGroup.destroyEach();
      coinGroup.destroyEach();
      
    }
    
    
} 
  
  if(gameState == END){
    
    gameover.visible = true;
    restart.visible = true;
    home.visible = true;
    
    player.velocityY = 0;
    player2.velocityY = 0;
    player3.velocityY = 0;
    player4.velocityY = 0;
    player5.velocityY = 0;
    
    player.visible = false;
    player2.visible = false;
    player3.visible = false;
    player4.visible = false;
    player5.visible = false;
    gameoverscreen.visible = true;
    
    if(mouseIsOver(restart)){
      restart.scale = 0.034;
      
      cursor('pointer');
    }else{
      restart.scale = 0.03;
      cursor(ARROW);
    }
    
    if(mouseIsOver(home)){
      home.scale = 0.19;
      cursor('pointer');
    }else{
      home.scale = 0.15;
    }
    
    if(mousePressedOver(restart)){
      reset();
    }
    if(mousePressedOver(home)){
        sorry();
    }
    
    stroke("red");
    fill("white");
    textSize(20);
    text("Your score : "+ score,200,300);
    
    
    
    ground.velocityX = 0;
    
    obstacleGroup.destroyEach();
    coinGroup.destroyEach();
    
    obstacleGroup.setLifetimeEach(-1);
    coinGroup.setLifetimeEach(-1);
    
  }
  
 //console.log(Math.round(getFrameRate()/frameCount*10));
 

}


function obstaclecreator(){
  if(frameCount % 100 == 0){
  var obstacle = createSprite(550,250);
  obstacle.velocityY = 10;
  obstacle.velocityX = -7;
  //obstacle.collide(invisibleGround);
    
  var rand = Math.round(random(1,5));
  switch(rand){
      case 1: obstacle.addImage(obstacle1);
      obstacle.scale = 0.3;
      obstacle.setCollider("rectangle",0,0,obstacle.width,obstacle.height);
              break;
      case 2: obstacle.addImage(obstacle2);
      obstacle.scale = 0.2;
      obstacle.setCollider("rectangle",0,0,150,200);
              break;
      case 3: obstacle.addImage(obstacle3);
      obstacle.scale = 0.1;
      obstacle.setCollider("rectangle",0,0,obstacle.width,obstacle.height);
              break;
      case 4: obstacle.addImage(obstacle4);
      obstacle.scale = 0.3;
      obstacle.setCollider("rectangle",0,0,obstacle.width,obstacle.height);
              break;
      case 5: obstacle.addImage(obstacle5);
      obstacle.scale = 0.6;
      obstacle.setCollider("rectangle",0,0,100,150);
              break;
      default: break;
    }
    
    obstacle.lifetime = 71.42857142857143;
  //obstacle.debug = true;
    
    obstacleGroup.add(obstacle);
      
  }
  
}

function coincaller(){
  if(frameCount % 80 == 0){
    var coin = createSprite(600,random(150,255))
    coin.addImage(coinimg);
    coin.scale = 0.07;
    coin.velocityX = -6;
    coinGroup.add(coin);
    coin.lifetime = 71.42857142857143;
  }
  
}

function coincaller2(){
  if(frameCount % 60 == 0){
    var coin2 = createSprite(600,random(150,85))
    coin2.addImage(coinimg);
    coin2.scale = 0.07;
    coin2.velocityX = -6;
    
    coin2.lifetime = 71.42857142857143;
    
    coinGroup.add(coin2);
  }
  
}

function reset(){
  gameState = PLAY;
  
  gameover.visible = false;
    restart.visible = false;
    home.visible = false;  
  gameoverscreen.visible = false;
  
  obstacleGroup.destroyEach();
  coinGroup.destroyEach();
  
  score = 0;
}

function sorry(){
  gameState = SERVE;
  
    gameover.visible = false;
    restart.visible = false;
    home.visible = false; 
    gameoverscreen.visible = false;
  exit.visible = false;
}

