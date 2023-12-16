// Problem 1.1 #1: Read the input one line at a time and then write the lines
// out in reverse order, so that the last input line is printed first, then the
// second last input line, and so on.

// The point of the exercise is to choose the right data structure for the right
// problem.

// In this case, we use a simple stack to read in all of the lines, and then
// write them all back out in reverse order. Each stack operation, i.e. push/pop
// runs in O(1) constant time, and there will be n pushes, and n pops, thus the
// entire program will run in O(2n) or O(n) time.

// See ./generate_lines.mjs to generate input lines for the exercises.

const fs = require('node:fs');
const readline = require('node:readline')

if (process.argv.length !== 3) {
  console.error("Expected at least one argument, <input_file_path>")
  process.exit(1);
}

const readLinesToStack = async (input_file_path, stack) => {
  const fileStream = fs.createReadStream(input_file_path)
  const rli = readline.createInterface({input: fileStream, crlfDelay: Infinity})

  for await (const line of rli) {
    stack.push(line)
  }
}

const writeLinesReversed = async (output_file_path, stack) => {
  const writer = fs.createWriteStream(output_file_path)

  let line = stack.pop()
  while (line !== undefined) {
    await writer.write(line + "\n")
    line = stack.pop()
  }
}

const main = async () => {
  const input_file_path = process.argv[2]
  const output_file_path = "./ex111.out.txt"

  const stack = [];

  await readLinesToStack(input_file_path, stack)
  await writeLinesReversed(output_file_path, stack)
}

main()