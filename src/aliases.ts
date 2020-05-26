export {};

type Mojiretsu = string;
const foo: string= "hello"
const bar:Mojiretsu = "hello"

const example1 = {
  name:"ham",
  age:14,
}
type Profile = {
  name:string,
  age:number,
}

const example2:Profile ={
  name:"test",
  age:22
}

type Profile2 = typeof example1;