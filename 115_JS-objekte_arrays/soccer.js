let soccer = [
  {
    name: "Cristiano Ronaldo",
    height: 172,
    mass: 77,
    eyeColor: "blue",
    gender: "male",
  },
  {
    name: "Lionel Messi",
    height: 202,
    mass: 136,
    eyeColor: "yellow",
    gender: "male",
  },
  {
    name: "Alex Morgan",
    height: 150,
    mass: 49,
    eyeColor: "brown",
    gender: "female",
  },
  {
    name: "David Alaba",
    height: 188,
    mass: 84,
    eyeColor: "blue",
    gender: "male",
  },
];

/* 1 */
let newPlayer = {
  name: "Max Mustermann",
  height: 182,
  mass: 102,
  eyeColor: "brown",
  gender: "male",
};
soccer.push(newPlayer);

soccer.push({
  name: "Erika Musterfrau",
  height: 165,
  mass: 70,
  eyeColor: "green",
  gender: "female",
});

console.log(soccer);

/* 2 */

let getPlayersName = (player) => {
  return player.name;
};
let playersName = soccer.map(getPlayersName);

console.log(playersName);
//
console.log(soccer.map((player) => player.name));

/* 3 */

let maleOnly = soccer.filter((player) => {
  if (player.gender === "male") {
    return true;
  } else {
    return false;
  }
});

console.log(maleOnly);

/* 4 */

let hasPlayerUnder50KG = soccer.some((player) => player.mass < 50);
console.log(hasPlayerUnder50KG);

/* 5 */

let getPlayersHeight = (player) => {
  return player.height;
};
let playersHeight = soccer.map(getPlayersHeight);

console.log(playersHeight);
//
console.log(soccer.map((player) => player.name));

/* 6 */

let sumPlayersHeight = 0;

for (let i = 0; i < playersHeight.length; i++) {
  sumPlayersHeight += playersHeight[i];
}
console.log(sumPlayersHeight);
//
console.log(
  soccer.reduce((totalHeight, player) => totalHeight + player.height, 0)
);
//
let sum = 0;
soccer.forEach((player) => (sum += player.height));
console.log(sum);

/* 7 */

let playersOver100Kg = [];
let weightOver100Kg = soccer.filter((player) => {
  if (player.mass > 100) {
    playersOver100Kg.push(player.name);
  }
});

console.log(playersOver100Kg);

/* 8 */

let playersSmaller200Cm = [];
let smallerThan200Cm = soccer.filter((player) => {
  if (player.height < 200) {
    playersSmaller200Cm.push(player.name);
  }
});

console.log(playersSmaller200Cm);

/* 9 */

let playersSortByHeight = soccer
  .map((player) => player)
  .sort((a, b) => {
    if (a.height > b.height) {
      return 1;
    } else {
      return -1;
    }
  });

console.log(playersSortByHeight);

let playersSortByWeight = soccer.sort((a, b) => {
  if (a.mass < b.mass) {
    return 1;
  } else {
    return -1;
  }
});

console.log(playersSortByWeight);

/* 10 */
