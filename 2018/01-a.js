// This Source Code Form is subject to the terms of the Mozilla Public License,
// v. 2.0. If a copy of the MPL was not distributed with this file, you can
// obtain one at https://mozilla.org/MPL/2.0/.

'use strict';

// Grab all the changes from the input file.
const changes = require('./01-input');

// Start with a frequency of 0.
const startingFrequency = 0;

// Apply each of the changes to calculate a resulting frequency.
const resultingFrequency = changes.reduce((runningTotal, current) =>
  runningTotal + current, startingFrequency);

// Dump it to the console.
console.log(resultingFrequency);
