// This Source Code Form is subject to the terms of the Mozilla Public License,
// v. 2.0. If a copy of the MPL was not distributed with this file, you can
// obtain one at https://mozilla.org/MPL/2.0/.

'use strict';

// Grab the starting state from the input file.
const state = require('./02-input');

// ...restore the gravity assist program to the "1202 program alarm" state...
state[1] = 12;
state[2] = 2;

// Declare our program counter's starting position.
let pc = 0;

// While we've got program state to run over, let's run!
while (pc < state.length) {

  // Grab the current iteration's op code.
  const opCode = state[pc];

  // Choose which operation to perform based on the opcode.
  switch (opCode) {

    // opcode === 1 means addition
    case 1:
      state[state[pc + 3]] = state[state[pc + 1]] + state[state[pc + 2]];
      break;

    // opcode === 2 means multiplication
    case 2:
      state[state[pc + 3]] = state[state[pc + 1]] * state[state[pc + 2]];
      break;

    // opcode === 99 means we're done; time to dump the output
    case 99:
      console.log(`Found opcode 99 at position ${pc}. Exiting`);
      pc = state.length;
      break;

    // any other opcodes mean something terrible (or undefined) has happened
    default:
      console.log('Something went wrong. Exiting. Ignore output.');
      pc = state.length;
      break;
  }

  // Move the program counter on by four places.
  pc += 4;
}

// Dump the position 0 state to the console.
console.log(state[0]);
