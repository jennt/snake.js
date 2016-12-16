var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "magenta", pixels: snakeToDraw };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
}

var snake =[{top:0, left:0}, {top:1, left:1},
  {top:2, left:2}, {top:2, left:3}, {top:1, left:4},
  {top:0, left:5}, {top:0, left:6}, {top:0, left:7},
  {top:1, left:8}, {top:2, left:9}]
  drawSnake(snake)
