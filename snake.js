var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "magenta", pixels: snakeToDraw };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
}

var snake = [{ top: 0, left: 0}]
drawSnake(snake)

// var snake = [{ top: 0, left: 0 }, {top: 1, left: 1}, {top: 2, left: 1},
// {top: 3, left: 2} ]
// var apple = [{ top: 12, left: 15}]
// var drawableSnake = { color: "magenta", pixels: snake };
// var drawableApple = { color: "red", pixels: apple };
// var drawableObjects = [drawableSnake, drawableApple];
//
// CHUNK.draw(drawableObjects);
