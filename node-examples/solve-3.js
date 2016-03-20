
var argv = require('yargs').usage('Usage: node $0 --l=[num] --b=[num]').demand(['l', 'b']).argv;


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

solve(argv.l, argv.b);


