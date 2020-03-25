module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement < 20) {
    const successfulItem = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement + 1
    };
    return successfulItem;
  } else {
    return item;
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    const failedItem = {
      name: item.name,
      durability: item.durability - 5,
      enhancement: item.enhancement
    };
    return failedItem;
  } else if (item.enhancement === 15 || item.enhancement === 16) {
    const enhanceItemFail = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement
    };
    return enhanceItemFail;
  } else if (item.enhancement > 16) {
    const greatEnhanceItemFail = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement - 1
    };
    return greatEnhanceItemFail;
  }
  return item;
}

function repair(item) {
  const repairedItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
  };
  return repairedItem;
}

function get(item) {
  // TESTING STRETCH BEFORE DEPLOYING
  // HOW DO I DO THIS T.T
  // I THINK I GOT IT HOLY CRAP
  if (item.enhancement === 0) {
    return item;
  } else {
    const statItem = {
      name: `[+${item.enhancement}] ${item.name}`,
      durability: item.durability,
      enhancement: item.enhancement
    };
    return statItem;
  }
}
