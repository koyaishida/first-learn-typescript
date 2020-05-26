export {};

enum Months {
  january = 1,//先頭の数値に初期値を設定可能、デフォルトは０
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}
console.log(Months.january)//0
console.log(Months.February)//1
console.log(Months.December)//11

// const MonthJs= {
//   January:1,
//   February:2
// }

enum COLORS {
  RED = "red",
  WHITE = "#fff",
  BLUE = "blue",
}
let red = COLORS.RED
console.log({red})


enum COLORS {
  YELLOW ="yellow"
}
console.log(COLORS.YELLOW)
console.log({red})