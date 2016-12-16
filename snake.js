var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "magenta", pixels: snakeToDraw };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
}

var moveSnake = function(snake) {
  var oldSegment = snake[0];
  var newSegment = { top: oldSegment.top, left: oldSegment.left + 1 };
  var newSnake = [newSegment];
  return newSnake;
}
var advanceGame = function (){
  snake = moveSnake(snake);
  drawSnake(snake);
}

var snake =[{top:0, left:0}]
  drawSnake(snake)

CHUNK.executeNTimesPerSecond(advanceGame, 1);

// var snake = [{top:0, left:0}, {top:1, left:1},
//   {top:2, left:2}, {top:2, left:3}, {top:1, left:4},
//   {top:0, left:5}, {top:0, left:6}, {top:0, left:7},
//   {top:1, left:8}, {top:2, left:9}]
// drawSnake(snake)
