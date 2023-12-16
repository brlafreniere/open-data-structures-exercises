// Read the input one line at a time and then write the lines out in reverse
// order, so that the last input line is printed first, then the second last
// input line, and so on.

const fs = require('node:fs');

if (process.argv.length !== 3) {
  console.error("Expected at least one argument, <input_file_path>")
  process.exit(1);
}

const input_file_path = process.argv[2]

fs.readFile(input_file_path, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data)
})