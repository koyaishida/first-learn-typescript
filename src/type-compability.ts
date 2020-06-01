export{};

let foo: any ;
let bar: string = "typescript"

console.log(typeof foo)
foo = bar
console.log(typeof foo)

let text: string 
let number: number = 1
//text = number

let fooString: string;
let barString: string = "string";

fooString = barString

let fooStringLiteral: `stringLiteral` = "stringLiteral"

fooString = fooStringLiteral

let fooNumber: number ;
let fooNumberLiteral: 1976 = 1976

fooNumber = fooNumberLiteral

interface Animal {
  age: number
  name: string
}

class Person{
  constructor(public age: number,public name: string){

  }
}
let me: Animal;
me = new Person(27,"koya")