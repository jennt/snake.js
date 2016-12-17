var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "magenta", pixels: snakeToDraw };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
}

var moveSegment = function(segment) {
  switch (segment.direction) {
    case "down":
      return { top: segment.top + 1, left: segment.left };
    case "up":
      return { top: segment.top - 1, left: segment.left }
    case "right":
      return { top: segment.top, left: segment.left + 1 }
    case "left":
      return { top: segment.top, left: segment.left - 1 }
    default:
    return segment;
  }
}
var moveSnake = function(snake) {
  var newSnake = [];
  snake.forEach(function(oldSegment){
    var newSegment = moveSegment(oldSegment);
    newSegment.direction = oldSegment.direction;
    newSnake.push(newSegment);
  });

  return newSnake;
}

var advanceGame = function (){
  snake = moveSnake(snake);
  if (CHUNK.detectCollisionBetween(snake, CHUNK.gameBoundaries())) {
    CHUNK.endGame();
    CHUNK.flashMessage("Whoops! You lose!")
  }
  drawSnake(snake);
}

var changeDirection = function (direction) {
  snake[0].direction = direction;
}

var snake =[{top:1, left:0, direction: "down"}, {top:0, left: 0, direction: "down"}]
  drawSnake(snake)
  //  var snake = [{top:0, left:0}, {top:1, left:1},
  //    {top:2, left:2}, {top:2, left:3}, {top:1, left:4},
  //    {top:0, left:5}, {top:0, left:6}, {top:0, left:7},
  //    {top:1, left:8}, {top:2, left:9}]
  //  drawSnake(snake)
CHUNK.executeNTimesPerSecond(advanceGame, 2);
CHUNK.onArrowKey(changeDirection);

// var snake = [{top:0, left:0}, {top:1, left:1},
//   {top:2, left:2}, {top:2, left:3}, {top:1, left:4},
//   {top:0, left:5}, {top:0, left:6}, {top:0, left:7},
//   {top:1, left:8}, {top:2, left:9}]
// drawSnake(snake)
