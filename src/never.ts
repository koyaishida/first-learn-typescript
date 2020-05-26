export {};

//戻り値が戻ってこない場合never
function error(message: string):never{
  throw new Error(message);
}
try {
  let result = error("aaa")
  console.log(result)
}catch(error){
  console.log({error},"er")
}

//違い
let foo: void = undefined;
//errorのみ代入可能
let bar:never = error("aaa");
