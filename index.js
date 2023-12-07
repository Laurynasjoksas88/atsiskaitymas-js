"use strict";

// 1
const masyvas = [1, 2, 4, 5, 6, 8, 9, 10, 9, 11];
{
  console.log(masyvas);
}

// 2
let naujasMasyvas = Array.of(
  "pica",
  "ledai",
  "medis",
  "duoti",
  "kamuoliniai",
  "nezinau",
  "beveik",
  "astuoni",
  "devyni",
  "desimt"
);
{
  console.log(naujasMasyvas);
  console.log(naujasMasyvas.length);
  console.log(naujasMasyvas[1]);
}

// 3

const splitinam = "nemanau, kad čia viskas bus gerai";
{
  console.log(splitinam.split());
}
