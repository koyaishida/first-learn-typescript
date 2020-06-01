export{};

//再代入を不可能にしたい場合は、末に as const
let name = "mikio";
name = "soshi"
let nickname = "ham" as const
// name: "ham"

let profile = {
  name: "ishida",
  height:160
} as const
// read only に変更