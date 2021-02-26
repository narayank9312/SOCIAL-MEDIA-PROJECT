const ADJECTIVE = [
  'Bboundless',
  'plausible',
  'sleepy',
  'electronic',
  'dangerous',
  'slim',
  'purple',
];

const OBJECTS = [
  'puddel',
  'piano',
  'windiow',
  'bowl',
  'socks',
  'brocoli',
  'chalk',
];

function genRandomUsername() {
  const adj = ADJECTIVE[Math.floor(Math.random() * 7)];
  const obj = OBJECTS[Math.floor(Math.random() * 7)];
  return `${adj}-${obj}`;
}

module.exports = {
  genRandomUsername,
};
