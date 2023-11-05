export const calculateTotalScore = (inputFrames: string[]): number => {
  let totalScore = 0;
  for (let index = 0; index < 10; index++) {
    let frame = inputFrames[index];
    if (isFrameStrike(frame)) {
      totalScore =
        totalScore + 10 + getScoreFromNextTwoRolls(index, inputFrames);
    } else if (isFrameSpare(frame)) {
      totalScore = totalScore + 10 + getScoreFromNextRoll(index, inputFrames);
    } else {
      totalScore = totalScore + getFrameScore(frame);
    }
  }
  return totalScore;
};

export const generateArrayOfFrames = (input: string): string[] => {
  //arrOfFrames
  return input.split(" ");
};

export const getFrameScore = (frameDetails: string): number => {
  let score = 0;

  if (frameDetails.charAt(0) !== "-") score = Number(frameDetails.charAt(0));
  if (frameDetails.length === 2 && frameDetails.charAt(1) !== "-")
    score = score + Number(frameDetails.charAt(1));
  return score;
};

export const isFrameStrike = (frameDetails: string): boolean => {
  return frameDetails === "X";
};

export const isFrameSpare = (frameDetails: string): boolean => {
  return frameDetails.charAt(1) === "/";
};

export const getScoreFromNextTwoRolls = (
  index: number,
  framesArray: string[]
): number => {
  let bonusScore = 0;
  let rollNumber1 = framesArray[index + 1].charAt(0);
  let rollNumber2 = framesArray[index + 1].charAt(1)
    ? framesArray[index + 1].charAt(1)
    : framesArray[index + 2].charAt(0);
  console.log(`rollNumber1 = ${rollNumber1} , rollNumber2 = ${rollNumber2}`);
  if (rollNumber1 === "X") bonusScore = 10;
  else bonusScore = Number(rollNumber1);

  if (rollNumber2 === "X") return bonusScore + 10;
  else if (rollNumber2 === "-") return bonusScore;
  else if (rollNumber2 === "/") return 10;
  else return bonusScore + Number(rollNumber2);
};

export const getScoreFromNextRoll = (
  index: number,
  framesArray: string[]
): number => {
  let nextRoll =
    framesArray[index].length === 3
      ? framesArray[index].charAt(2)
      : framesArray[index + 1].charAt(0);
  if (nextRoll === "X") return 10;
  else if (nextRoll === "-") return 0;
  else return Number(nextRoll);
};
