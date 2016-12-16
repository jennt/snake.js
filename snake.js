var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "magenta", pixels: snakeToDraw };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
}

var moveSegment = function(segment) {
  if (segment.direction === "down") {
    return { top: segment.top + 1, left: segment.left }
  } else if (segment.direction === "up") {
    return { top: segment.top - 1, left: segment.left }
  } else if (segment.direction === "right") {
    return { top: segment.top, left: segment.left + 1 }
  } else if (segment.direction === "left") {
    return { top: segment.top, left: segment.left - 1 }
  }
  return segment;
}

var moveSnake = function(snake) {
  var oldSegment = snake[0];
  var newSegment = moveSegment(oldSegment);
  newSegment.direction = oldSegment.direction;
  var newSnake = [newSegment];
  return newSnake;
}

var advanceGame = function (){
  snake = moveSnake(snake);
  drawSnake(snake);
}

var snake =[{top:0, left:0, direction: "right"}]
  drawSnake(snake)
CHUNK.executeNTimesPerSecond(advanceGame, 2);

// var snake = [{top:0, left:0}, {top:1, left:1},
//   {top:2, left:2}, {top:2, left:3}, {top:1, left:4},
//   {top:0, left:5}, {top:0, left:6}, {top:0, left:7},
//   {top:1, left:8}, {top:2, left:9}]
// drawSnake(snake)
