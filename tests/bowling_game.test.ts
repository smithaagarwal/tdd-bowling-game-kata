//X X X X X X X X X X X X 300
//9- 9- 9- 9- 9- 9- 9- 9- 9- 9- 90
//5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5 150

import {
  calculateTotalScore,
  generateArrayOfFrames,
  getFrameScore,
  getScoreFromNextRoll,
  getScoreFromNextTwoRolls,
  isFrameSpare,
  isFrameStrike,
} from "../src/bowling_game";

//1- 1- 1- 1- 1- 1- 1- 1- 1- 1- 1-   10

//"1- 1- 1- 1- 1- 1- 1- 1- 1- 1-"  => ['1-',' 1-', 1-',' 1-',1-',' 1-',1-',' 1-',1-',' 1-' ]
describe("test the function generateFrameFromInputFrames which returns an array of frames", () => {
  it(" for input is '1- 1- 1- 1- 1- 1- 1- 1- 1- 1-' function returns an array of  entries ", () => {
    expect(generateArrayOfFrames("1- 1- 1- 1- 1- 1- 1- 1- 1- 1-")).toEqual([
      "1-",
      "1-",
      "1-",
      "1-",
      "1-",
      "1-",
      "1-",
      "1-",
      "1-",
      "1-",
    ]);
  });
  it("for input 'X X X X X X X X X X X X' function returns an array of 12 entries 'X'", () => {
    expect(generateArrayOfFrames("X X X X X X X X X X X X")).toEqual([
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
      "X",
    ]);
  });
  it("for input '5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5'function returns an array", () => {
    expect(generateArrayOfFrames("5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5")).toEqual([
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5/",
      "5/5",
    ]);
  });
});

describe("test function isFrameStrike to check if input is X", () => {
  it("for input frame 'X' return true", () => {
    expect(isFrameStrike("X")).toBe(true);
  });
  it("for input frame '9-' return false", () => {
    expect(isFrameStrike("9-")).toBe(false);
  });
  it("for input frame '5/' return false", () => {
    expect(isFrameStrike("5/")).toBe(false);
  });
});
describe("test function isFrameSpare to check if input frame is spare", () => {
  it("for input frame 'X' return false", () => {
    expect(isFrameSpare("X")).toBe(false);
  });
  it("for input frame '9-' return false", () => {
    expect(isFrameSpare("9-")).toBe(false);
  });
  it("for input frame '5/' return true", () => {
    expect(isFrameSpare("5/")).toBe(true);
  });
});
const sampleFrames1 = [
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
];

const sampleFrames2 = [
  "5/",
  "5/",
  "5/",
  "5/",
  "5/",
  "5/",
  "X",
  "5/",
  "5/",
  "5/5",
];

const sampleFrames3 = [
  "5/",
  "5/",
  "5/",
  "5/",
  "5/",
  "X",
  "5-",
  "5/",
  "5/",
  "5/5",
];

const sampleFrames4 = [
  "5/",
  "5/",
  "5/",
  "5/",
  "5/",
  "X",
  "53",
  "5/",
  "5/",
  "5/5",
];
describe("test function getScoreFromNextTwoRolls", () => {
  it("for input with next 2 rolls X", () => {
    expect(getScoreFromNextTwoRolls(6, sampleFrames1)).toBe(20);
  });
  it("for input with next 2 rolls X", () => {
    expect(getScoreFromNextTwoRolls(6, sampleFrames2)).toBe(10);
  });
  it("for input with next 2 rolls X", () => {
    expect(getScoreFromNextTwoRolls(5, sampleFrames3)).toBe(5);
  });
  it("for input with next 2 rolls X", () => {
    expect(getScoreFromNextTwoRolls(5, sampleFrames4)).toBe(8);
  });
});

const sampleFrames5 = [
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "2/",
  "X",
  "X",
  "X",
  "X",
  "X",
];

const sampleFrames6 = [
  "5/",
  "5/",
  "5/",
  "5/",
  "5/",
  "5/",
  "13",
  "5/",
  "5/",
  "5/5",
];

const sampleFrames7 = [
  "5/",
  "5/",
  "5/",
  "5/",
  "5/",
  "-3",
  "5-",
  "5/",
  "5/",
  "5/5",
];

const sampleFrames8 = [
  "5/",
  "5/",
  "5/",
  "5/",
  "5/",
  "X",
  "53",
  "5/",
  "5/",
  "5/5",
];
describe("test function getScoreFromNextRoll", () => {
  it("for input with next roll X after spare return 10", () => {
    expect(getScoreFromNextRoll(6, sampleFrames5)).toBe(10);
  });
  it("for input with next  roll 1 after the spare return 1", () => {
    expect(getScoreFromNextRoll(5, sampleFrames6)).toBe(1);
  });
  it("for input with next roll - after spare return 0", () => {
    expect(getScoreFromNextRoll(4, sampleFrames7)).toBe(0);
  });
  it("for input with next roll 5 after the spare in the last frame", () => {
    expect(getScoreFromNextRoll(9, sampleFrames8)).toBe(5);
  });
});

describe("test function getFrameScore", () => {
  it("for frame  with just numbers returns the correct score", () => {
    expect(getFrameScore("12")).toBe(3);
    expect(getFrameScore("42")).toBe(6);
    expect(getFrameScore("54")).toBe(9);
  });
  it("for frame starting with '-' returns the correct score", () => {
    expect(getFrameScore("-2")).toBe(2);
    expect(getFrameScore("-9")).toBe(9);
    expect(getFrameScore("-4")).toBe(4);
  });

  it("for frame ending with '-' returns the correct score", () => {
    expect(getFrameScore("2-")).toBe(2);
    expect(getFrameScore("9-")).toBe(9);
    expect(getFrameScore("4-")).toBe(4);
  });
});
const sampleFrames9 = [
  "1-",
  "1-",
  "1-",
  "1-",
  "1-",
  "1-",
  "1-",
  "1-",
  "1-",
  "1-",
];
const sampleFrames10 = [
  "1-",
  "2-",
  "3-",
  "4-",
  "5-",
  "6-",
  "7-",
  "8-",
  "9-",
  "1-",
];
const sampleFrames11 = [
  "9-",
  "9-",
  "9-",
  "9-",
  "9-",
  "9-",
  "9-",
  "9-",
  "9-",
  "9-",
];

const sampleFrames12 = [
  "-1",
  "-1",
  "-1",
  "-1",
  "-1",
  "-1",
  "-1",
  "-1",
  "-1",
  "-1",
];
const sampleFrames13 = [
  "-1",
  "-2",
  "-3",
  "-4",
  "-5",
  "-6",
  "-7",
  "-8",
  "-9",
  "-1",
];
const sampleFrames14 = [
  "-9",
  "-9",
  "-9",
  "-9",
  "-9",
  "-9",
  "-9",
  "-9",
  "-9",
  "-9",
];

const sampleFrames15 = [
  "12",
  "23",
  "33",
  "44",
  "22",
  "44",
  "11",
  "22",
  "33",
  "44",
];

const sampleFrames16 = [
  "5/",
  "5/",
  "5/",
  "5/",
  "5/",
  "5/",
  "5/",
  "5/",
  "5/",
  "5/5",
];

describe("test function calculateTotalScore with just single digit score in each frame", () => {
  it("for game with just 1 pin falling in each frame , score should be 10", () => {
    expect(calculateTotalScore(sampleFrames9)).toBe(10);
  });
  it("for game with just  few pins falling in first roll of each frame with none falling in the second roll, score should be 46", () => {
    expect(calculateTotalScore(sampleFrames10)).toBe(46);
  });
  it("for game with just 9 pins falling in first roll of each frame , score should be 90", () => {
    expect(calculateTotalScore(sampleFrames11)).toBe(90);
  });
});

describe("test function calculateTotalScore with just single digit score in each frame", () => {
  it("for game with just 1 pin falling in second roll of each frame , score should be 10", () => {
    expect(calculateTotalScore(sampleFrames12)).toBe(10);
  });
  it("for game with just  few pins falling in second roll of each frame with none falling in the first roll, score should be 40", () => {
    expect(calculateTotalScore(sampleFrames13)).toBe(46);
  });
  it("for game with just 9 pins falling in second roll of each frame , score should be 90", () => {
    expect(calculateTotalScore(sampleFrames14)).toBe(90);
  });
});
describe("test function calculateTotalScore single digit scores in each roll of each frame", () => {
  it("for game with just few pins falling in both rolls of each frame , score should be 54", () => {
    expect(calculateTotalScore(sampleFrames15)).toBe(54);
  });
});
describe("test function calculateTotalScore when strike is made in each frame", () => {
  it("for game with all pins falling in first roll of each frame , score should be 300", () => {
    expect(calculateTotalScore(sampleFrames1)).toBe(300);
  });
});
describe("test function calculateTotalScore when spare is made in each frame", () => {
  it("for game with all pins falling by the second roll of each frame , score should be 150", () => {
    expect(calculateTotalScore(sampleFrames16)).toBe(150);
  });
});
