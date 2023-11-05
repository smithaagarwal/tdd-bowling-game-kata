//X X X X X X X X X X X X 300
//9- 9- 9- 9- 9- 9- 9- 9- 9- 9- 90
//5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5 150

import {
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
