//X X X X X X X X X X X X 300
//9- 9- 9- 9- 9- 9- 9- 9- 9- 9- 90
//5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5 150

import { generateArrayOfFrames } from "../src/bowling_game";

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
