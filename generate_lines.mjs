// usage:
//   node generate_lines.mjs <number_of_lines>
//
// creates a file called `./lines.txt` which can be used for running/testing the
// exercises that require reading input lines.

import crypto from 'crypto'
import { writeFile } from 'node:fs';

if (process.argv.length !== 3) {
  console.error("Expected at least one argument, <num_lines>")
  process.exit(1)
}

const num_lines = parseInt(process.argv[2])

let data = ""

for (let i = 0; i < num_lines; i++) {
  const shasum = crypto.createHash('sha1')
  shasum.update(i.toString())
  const val = shasum.digest('hex') // => "0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33"

  data += `${i} ${val}\n`
}

const output_file_name = "./lines.txt"

writeFile(output_file_name, data, (err) => {
  if (err) throw err;
})