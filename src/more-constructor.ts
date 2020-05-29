export{};
//アクセス修飾詞をconstructorの引数に追加すると初期化がされる
class Person {
  constructor(public name: string,protected age: number){
  }
}

const me = new Person("石田",37)
console.log(me)