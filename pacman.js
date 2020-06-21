pacman = {
    x: 6,
    y: 4
  }
ghost={
  x:6,
  y:4
}
  map = [ 
    [1,1,1,1,1,1,1,1,1,1,1,1,1], 
    [1,2,2,2,2,2,1,2,2,2,2,2,1], 
    [1,2,1,2,1,2,1,2,1,2,1,2,1], 
    [1,2,1,2,2,2,2,2,2,2,1,2,1], 
    [1,2,2,2,1,2,5,2,1,2,2,2,1], 
    [1,2,1,2,2,2,2,2,2,2,1,2,1], 
    [1,2,1,1,2,2,1,2,2,1,1,2,1], 
    [1,2,2,2,2,2,1,2,2,2,2,2,1], 
    [1,1,1,1,1,1,1,1,1,1,1,1,1]
  ]
  var turn=0;
  var numTokens=56;
  var el = document.getElementById('world');
  var level=0;
  function drawWorld(){
    el.innerHTML = '';
    for(var y = 0; y < map.length ; y = y + 1) {
      for(var x = 0; x < map[y].length ; x = x + 1) {   
        if (map[y][x] === 1) {
          el.innerHTML += "<div class='wall'></div>";
        }
        else if (map[y][x] === 2) {
          el.innerHTML += "<div class='coin'></div>";
        }
        else if (map[y][x] === 3) {
          el.innerHTML += "<div class='ground'></div>";
        }
        else if (map[y][x] === 4) {
          el.innerHTML += "<div class='ghost'></div>";
        }
        else if (map[y][x] === 5) {
          el.innerHTML += "<div class='pacman'></div>";
        }
      }
      el.innerHTML += "<br>";
    }
  }
drawWorld()
//console.log(numTokens)

  document.onkeydown = function(event){
    // console.log(event);
    if (event.keyCode === 37){ // PACMAN MOVE LEFT
      if ( map[pacman.y][pacman.x-1] !== 1){
        if(map[pacman.y][pacman.x-1]==2){
          map[pacman.y][pacman.x] = 3;
          numTokens=numTokens-1;
        }
        map[pacman.y][pacman.x] = 3;
        pacman.x = pacman.x - 1;
        map[pacman.y][pacman.x] = 5;
        turn=turn+1;
       
        drawWorld();
      }
    }
    else if (event.keyCode === 38){ // PACMAN MOVE UP
      if ( map[pacman.y-1][pacman.x] !== 1){
          if(map[pacman.y-1][pacman.x]==2){
          map[pacman.y][pacman.x] = 3;
          numTokens=numTokens-1;
         
        }
        map[pacman.y][pacman.x] = 3;
        pacman.y = pacman.y - 1;
        map[pacman.y][pacman.x] = 5;
                turn=turn+1;
        drawWorld();
      }
    }
    else if (event.keyCode === 39){ // PACMAN MOVE RIGHT
      if ( map[pacman.y][pacman.x+1] !== 1){
        if(map[pacman.y][pacman.x+1]==2){
          map[pacman.y][pacman.x] = 3;
          numTokens=numTokens-1;
        }
        map[pacman.y][pacman.x] = 3;
        pacman.x = pacman.x + 1;
        map[pacman.y][pacman.x] = 5;
        turn=turn+1;
        
        drawWorld();
      }
    }
    else if (event.keyCode === 40){ // PACMAN MOVE DOWN
      if ( map[pacman.y+1][pacman.x] !== 1){
        if(map[pacman.y+1][pacman.x]==2){
          map[pacman.y][pacman.x] = 3;
          numTokens=numTokens-1;
        }
        map[pacman.y][pacman.x] = 3;
        pacman.y = pacman.y + 1;
        map[pacman.y][pacman.x] = 5;
        turn=turn+1;
        drawWorld();
      }
    }
    
   
    if(turn===2)
    {
      map[4][6]=4;
    }
    if(turn>2)
    {
      moveghost();
      if(map[pacman.y][pacman.x]===map[ghost.y][ghost.x])
    {  
    alert("pacman x "+pacman.x);
    alert("pacman y "+pacman.y);
    alert("ghost x "+ghost.x);
    alert("ghost y "+ghost.y);
    GameOver();
    }
    else if(numTokens==0)
    {
    Reset();
    level=level+1;
    alert("Level "+level+ " complete");
    }
    }
    console.log(map)
  
  }
 function moveghost()
{
 
  var distx,disty;
  distx=pacman.x-ghost.x;
  disty=pacman.y-ghost.y;
  var tempx,tempy;
  tempx=distx;
  tempy=disty;
  if(Math.abs(tempx)>=Math.abs(tempy))
  {
    if(distx<=0)
    {
   
      if(map[ghost.y][ghost.x-1]!==1)
      {
        if(map[ghost.y][ghost.x-1]===2)
           map[ghost.y][ghost.x]=2;
          else
           map[ghost.y][ghost.x]=3;
           ghost.x=ghost.x-1;
           map[ghost.y][ghost.x]=4;
      }

    }

    else
    {
      if(map[ghost.y][ghost.x+1]!==1)
      {
        if(map[ghost.y][ghost.x+1]===2)
           map[ghost.y][ghost.x]=2;
          else
           map[ghost.y][ghost.x]=3;

           ghost.x=ghost.x+1;
           map[ghost.y][ghost.x]=4;
      }
    }

  }
  //map[ghost.y][ghost.x]=4;
  else
  {
    if(disty<=0)
    {
   
      if(map[ghost.y-1][ghost.x]!==1)
      {
        if(map[ghost.y-1][ghost.x]===2)
           map[ghost.y][ghost.x]=2;
          else
           map[ghost.y][ghost.x]=3;

           ghost.y=ghost.y-1;
           map[ghost.y][ghost.x]=4;
      }

    }

    else
    {
      if(map[ghost.y+1][ghost.x]!==1)
      {
        if(map[ghost.y+1][ghost.x]===2)
           map[ghost.y][ghost.x]=2;
          else
           map[ghost.y][ghost.x]=3

           ghost.y=ghost.y+1;
           map[ghost.y][ghost.x]=4;
      }
    }
  }
map[ghost.y][ghost.x]=4;
}

function Reset()
{
  turn=0;
    numTokens=56;
     for(var y = 0; y < map.length ; y = y + 1) 
     {
      for(var x = 0; x < map[y].length ; x = x + 1) { 
        if(map[y][x]==3||map[y][x]===4)
        { 
         map[y][x]=2;
         map[pacman.y][pacman.x]=3;
         pacman.y=4;
         pacman.x=6;
         map[pacman.y][pacman.x]=5;
         ghost.y=4;
         ghost.x=6;
        }
      }
    }
      drawWorld();
}
function GameOver()
{
  alert("GameOver")
  Reset();
}




