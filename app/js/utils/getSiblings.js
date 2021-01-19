let getSiblings = function (e) {
  let siblings = [];

  if (!e.parentNode) {
    return siblings;
  }

  let sibling = e.parentNode.firstChild;

  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

const arrUSD = [
  {
    payment: 83.3,
    currency: 'USD',
  },
  {
    payment: 52.66,
    currency: 'USD',
  },
  {
    payment: 12.27,
    currency: 'USD',
  },
  {
    payment: 52.06,
    currency: 'USD',
  },
  {
    payment: 67.51,
    currency: 'USD',
  },
  {
    payment: 143.82,
    currency: 'USD',
  },
  {
    payment: 0.43,
    currency: 'USD',
  },
  {
    payment: 36.51,
    currency: 'USD',
  },
  {
    payment: 100.91,
    currency: 'USD',
  },
  {
    payment: 30.64,
    currency: 'USD',
  },
  {
    payment: 18.11,
    currency: 'USD',
  },
  {
    payment: 47.31,
    currency: 'USD',
  },
  {
    payment: 135.63,
    currency: 'USD',
  },
  {
    payment: 48.93,
    currency: 'USD',
  },
  {
    payment: 85.35,
    currency: 'USD',
  },
  {
    payment: 23.42,
    currency: 'USD',
  },
  {
    payment: 23.66,
    currency: 'USD',
  },
  {
    payment: 24.86,
    currency: 'USD',
  },
  {
    payment: 12.34,
    currency: 'USD',
  },
  {
    payment: 38.32,
    currency: 'USD',
  },
  {
    payment: 50.02,
    currency: 'USD',
  },
  {
    payment: 23.52,
    currency: 'USD',
  },
  {
    payment: 27.53,
    currency: 'USD',
  },
  {
    payment: 47.16,
    currency: 'USD',
  },
];

const arrRUB = [
  {
    payment: 2e4,
    currency: 'RUB',
  },
  {
    payment: 2e4,
    currency: 'RUB',
  },
  {
    payment: 7e4,
    currency: 'RUB',
  },
  {
    payment: 2e4,
    currency: 'RUB',
  },
  {
    payment: 5e4,
    currency: 'RUB',
  },
  {
    payment: 487.63,
    currency: 'RUB',
  },
  {
    payment: 5e4,
    currency: 'RUB',
  },
  {
    payment: 1.5e4,
    currency: 'RUB',
  },
  {
    payment: 7e5,
    currency: 'RUB',
  },
  {
    payment: 1.5e5,
    currency: 'RUB',
  },
  {
    payment: 2e3,
    currency: 'RUB',
  },
  {
    payment: 1.5e3,
    currency: 'RUB',
  },
  {
    payment: 3e4,
    currency: 'RUB',
  },
  {
    payment: 1.5e4,
    currency: 'RUB',
  },
  {
    payment: 5e3,
    currency: 'RUB',
  },
  {
    payment: 5e3,
    currency: 'RUB',
  },
  {
    payment: 5e3,
    currency: 'RUB',
  },
  {
    payment: 1389,
    currency: 'RUB',
  },
  {
    payment: 2.5e3,
    currency: 'RUB',
  },
  {
    payment: 5e2,
    currency: 'RUB',
  },
  {
    payment: 1.5e3,
    currency: 'RUB',
  },
  {
    payment: 1e4,
    currency: 'RUB',
  },
  {
    payment: 2e3,
    currency: 'RUB',
  },
  {
    payment: 6e2,
    currency: 'RUB',
  },
  {
    payment: 2.5e3,
    currency: 'RUB',
  },
  {
    payment: 1768,
    currency: 'RUB',
  },
  {
    payment: 4e3,
    currency: 'RUB',
  },
  {
    payment: 5e3,
    currency: 'RUB',
  },
  {
    payment: 1,
    currency: 'RUB',
  },
  {
    payment: 73.07,
    currency: 'RUB',
  },

  {
    payment: 3475.28,
    currency: 'RUB',
  },

  {
    payment: 139.46,
    currency: 'RUB',
  },
  {
    payment: 1e1,
    currency: 'RUB',
  },

  {
    payment: 14777.71,
    currency: 'RUB',
  },

  {
    payment: 3304.89,
    currency: 'RUB',
  },

  {
    payment: 2e3,
    currency: 'RUB',
  },
  {
    payment: 1880.43,
    currency: 'RUB',
  },

  {
    payment: 16697.95,
    currency: 'RUB',
  },
  {
    payment: 1821.35,
    currency: 'RUB',
  },

  {
    payment: 3667.98,
    currency: 'RUB',
  },
  {
    payment: 8056.3,
    currency: 'RUB',
  },
  {
    payment: 8373.05,
    currency: 'RUB',
  },
  {
    payment: 5e4,
    currency: 'RUB',
  },

  {
    payment: 3701.78,
    currency: 'RUB',
  },
  {
    payment: 3.8e3,
    currency: 'RUB',
  },

  {
    payment: 2399.6,
    currency: 'RUB',
  },
  {
    payment: 905.8,
    currency: 'RUB',
  },
  {
    payment: 2061,
    currency: 'RUB',
  },
];

export { getSiblings };
