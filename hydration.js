var hydration = require('hydration')
  , isatty = require('tty').isatty;

var mess = '';

if (isatty(0)) die();

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    mess += chunk;
  }
});

process.stdin.on('end', function () {
  process.stdout.write(JSON.stringify(hydration.hydrate(JSON.parse(mess))));
  process.stdout.write('\n');
});

function die () {
  console.error('hydrate: input required on stdin');
  console.error('usage: <input> | hydrate');
  process.exit(1);
}