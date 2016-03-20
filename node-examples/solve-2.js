var rect = require('./rectangle-2');

function solve(l, b) {
  console.log("Solving");

  rect(l, b, function(err, rectangle) {
    if (err) {
      console.log(err);
    } else {
      console.log("Perimeter = " + rectangle.perimeter());
      console.log("Area = " + rectangle.area());
    }
  });
}

solve(2, 4);
solve(3, 5);
solve(-3, 5);


