export{};

let name: any = "ham"
//非推奨
//let length = (<string>name).length
let length = (name as string).length
console.log(length)
//length = "foo"
//console.log(length)
