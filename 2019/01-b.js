// This Source Code Form is subject to the terms of the Mozilla Public License,
// v. 2.0. If a copy of the MPL was not distributed with this file, you can
// obtain one at https://mozilla.org/MPL/2.0/.

'use strict';

// Grab all the masses from the input file.
const masses = require('./01-input');

// Declare a reusable mass-to-fuel conversion function.
const massToFuel = mass => Math.max(Math.floor(mass / 3) - 2, 0);

// Convert every mass to a fuel.
const fuels = masses.map(massToFuel);

// Start a running total for the fuel.
let runningTotal = 0;

// Loop over the list of fuels.
for (const fuel of fuels) {

  // Add the current amount of fuel to running total.
  runningTotal += fuel;

  // Get the amount of fuel required for this fuel's mass.
  const fuelForFuel = massToFuel(fuel);

  // If this fuel requires more fuel...
  if (fuelForFuel > 0) {
    // ...add this new requirement to the list.
    fuels.push(fuelForFuel);
  }
}

// Dump it to the console.
console.log(runningTotal);
