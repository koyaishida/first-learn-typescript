export {};
type Pitcher1 = {
  throwingSpeed:number;
}
type Batter1 = {
  battingAverage: number;
}

const sasaki :Pitcher1 = {
  throwingSpeed:154
};

const ochiai:Batter1 ={
  battingAverage:0.367
}

// type Otani = {
//   throwingSpeed:number,
//   battingAverage:number,
// }

type Otani = Pitcher1 & Batter1;

const otani:Otani = {
  throwingSpeed:165,
  battingAverage:0.285,
}

