// This Source Code Form is subject to the terms of the Mozilla Public License,
// v. 2.0. If a copy of the MPL was not distributed with this file, you can
// obtain one at https://mozilla.org/MPL/2.0/.

'use strict';

// Grab all the changes from the input file.
const changes = require('./01-input');

// Store all of the frequencies we calculate in a set.
const resultingFrequencies = new Set();

// Start from 0.
let resultingFrequency = 0;

// We obviously haven't found a duplicate frequency yet.
let foundFrequency = false;

// Loop until we eventually find a duplicate frequency.
while(!foundFrequency) {

  // Apply the list of changes again and again.
  for(const change of changes) {

    // Apply the change now.
    resultingFrequency += change;

    // Check if we've visited this frequency before.
    if (resultingFrequencies.has(resultingFrequency)) {

      // If we have, save that fact...
      foundFrequency = true;

      // ...and break out of our list.
      break;

    } else {

      // If we haven't visited this frequency yet, save it to our set.
      resultingFrequencies.add(resultingFrequency);
    }
  }
}

// When we get to this point, it means we've fallen out of the loop after
// finding our target frequency, so dump it to the console.
console.log(resultingFrequency);
