export{};

//nullを許容する場合の設定　| null
let profile: {name:string,age:number|null}= {
  name: "ham",
  age:null
}

profile.age = null