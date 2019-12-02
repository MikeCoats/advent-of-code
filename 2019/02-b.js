// This Source Code Form is subject to the terms of the Mozilla Public License,
// v. 2.0. If a copy of the MPL was not distributed with this file, you can
// obtain one at https://mozilla.org/MPL/2.0/.

'use strict';

// Grab the starting state from the input file.
const originalState = require('./02-input');

let found = false;
let noun = 0;
let verb = 0;

while (!found) {

  // Make a copy of the starting state for this run.
  const runState = Array.from(originalState);

  // Set the program in to our current noun-verb attempt state.
  runState[1] = noun;
  runState[2] = verb;

  // Declare our program counter's starting position.
  let pc = 0;

  // While we've got program state to run over, let's run!
  while (pc < runState.length) {

    // Grab the current iteration's op code.
    const opCode = runState[pc];

    // Choose which operation to perform based on the opcode.
    switch (opCode) {

      // opcode === 1 means addition
      case 1:
        runState[runState[pc + 3]] = runState[runState[pc + 1]] + runState[runState[pc + 2]];
        break;

      // opcode === 2 means multiplication
      case 2:
        runState[runState[pc + 3]] = runState[runState[pc + 1]] * runState[runState[pc + 2]];
        break;

      // opcode === 99 means we're done
      case 99:
        pc = runState.length;
        break;

      // any other opcodes mean something terrible (or undefined) has happened
      default:
        pc = runState.length;
        break;
    }

    // Move the program counter on by four places.
    pc += 4;
  }

  // If this current noun-verb attempt matches our target value.
  if (runState[0] === 19690720) {

    // Mark the run as successful.
    found = true;

  } else {

    // The run was unsuccsessful, so check the next one going  0,0 ... 0,99 ...
    // 1,0 ... 1,99 ... 99,99
    verb++;
    if (verb > 99) {
      noun++;
      verb = 0;
    }
  }
}

// The noun-verb search was successful. Dump the noun-verb pair to the console.
console.log(100 * noun + verb);
