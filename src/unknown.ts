export {};


const kansu = ()=>43

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();
//型が不明だとエラー
//let sum = numberUnknown + 10;

// 型ガード typeofで型をしてすれば実行可能
if (typeof numberUnknown === "number"){
  let sumUnknown = numberUnknown + 1;
  console.log(sumUnknown)
}

