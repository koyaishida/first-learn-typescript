export {}

//関数の引数、戻り値の型定義が可能
function double(value:number|string):number|string;
// function double(value:string):string;

//関数定義の際は型定義は不要
function double(value: any):any{
  if(typeof value === "number"){
    return value * 2
  }else if(typeof value === "string"){
    return value + value
  }
}

console.log(double(500))
console.log(double("500"))


