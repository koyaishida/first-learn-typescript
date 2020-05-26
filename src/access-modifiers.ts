export{};

class Person {
  public name: string;
  //privateはtaroのインスタンスからaccessできなくする
  //Personクラスで定義したprofileメソッドは機能する
  //privateでaccessでき流のは同じclass内のみ
  //protectedは子classからでもアクセス可能
  protected age: number;
  protected nationality:string;
  
  constructor(name: string,age: number,nationality:string){
    this.name = name;
    this.age = age;
    this.nationality = nationality
  }
  profile():string {
    return `name: ${this.name},age:${this.age}`
  }
}

class Android extends Person{
  constructor(name:string, age:number, nationality:string){
    super(name,age,nationality)
  }

  profile():string {
    return  `name: ${this.name},age:${this.age},nationality:${this.nationality}`
  }
}


let taro = new Person("taro",20,"japan")
console.log(taro.name)
console.log(taro.profile())
// console.log(taro.age)
// console.log(taro.profile())
// let hanako = new Person()