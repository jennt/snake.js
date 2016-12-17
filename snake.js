var draw = function(snakeToDraw, apple) {
  var drawableSnake = { color: "magenta", pixels: snakeToDraw };
  var drawableApple = { color: "red", pixels: [apple] };
  var drawableObjects = [drawableSnake, drawableApple];
  CHUNK.draw(drawableObjects);
}

var moveSegment = function(segment) {
  switch (segment.direction) {
    case "down":
      return { top: segment.top + 1, left: segment.left };
    case "up":
      return { top: segment.top - 1, left: segment.left };
    case "right":
      return { top: segment.top, left: segment.left + 1 }
    case "left":
      return { top: segment.top, left: segment.left - 1 }
    default:
    return segment;
  }
}

var segmentFurtherForwardThan = function(index, snake) {
    return snake[index - 1] || snake[index];
}

var moveSnake = function(snake) {
  return snake.map(function(oldSegment, segmentIndex) {
    var newSegment = moveSegment(oldSegment);
    newSegment.direction = segmentFurtherForwardThan(segmentIndex, snake).direction;
    return newSegment;
  });
}

var advanceGame = function () {
  snake = moveSnake(snake);
  if (CHUNK.detectCollisionBetween(snake, CHUNK.gameBoundaries())) {
    CHUNK.endGame();
    CHUNK.flashMessage("Whoops! You lose!")
  }
  draw(snake, apple);
}

var changeDirection = function (direction) {
  snake[0].direction = direction;
}

var apple = { top: 8, left: 10 };

var snake =[{top:1, left:0, direction: "down"}, {top:0, left: 0, direction: "down"}]

  //  var snake = [{top:0, left:0}, {top:1, left:1},
  //    {top:2, left:2}, {top:2, left:3}, {top:1, left:4},
  //    {top:0, left:5}, {top:0, left:6}, {top:0, left:7},
  //    {top:1, left:8}, {top:2, left:9}]
  //  drawSnake(snake)
CHUNK.executeNTimesPerSecond(advanceGame, 2);
CHUNK.onArrowKey(changeDirection);
