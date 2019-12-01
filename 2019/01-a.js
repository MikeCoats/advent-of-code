// This Source Code Form is subject to the terms of the Mozilla Public License,
// v. 2.0. If a copy of the MPL was not distributed with this file, you can
// obtain one at https://mozilla.org/MPL/2.0/.

'use strict';

// Grab all the masses from the input file.
const masses = require('./01-input');

// Convert every mass to a fuel.
const fuels = masses.map(mass => Math.floor(mass / 3) - 2);

// Sum all of the fuels into a total.
const fuel = fuels.reduce((runningTotal, fuel) => runningTotal + fuel, 0);

// Dump it to the console.
console.log(fuel);
