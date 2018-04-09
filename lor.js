'use strict';
const Hashmap = require('./hashmap');

function main () {
  const lor = new Hashmap();
  // Create a Hash map called lor and add the following items to it.
  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Gandalf', 'Wizard');
  lor.set('Human', 'Aragon');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Ringbearer', 'Gollum');
  lor.set('Lady of Light', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');
  // Retrieve the value that is hashed in the key Maiar
  console.log(lor.get('Maiar'));
}

main();