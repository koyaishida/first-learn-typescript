export{};

namespace Japanese{
  export namespace Tokyo{
    export class Person {
      constructor(public name: string){
    
      }
    }
  }
  export namespace Nagoya{
    export class Person {
      constructor(public name: string){
    
      }
    }
  }
  
}

namespace English{
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string,
       ){}
  }
}


const me = new Japanese.Tokyo.Person("石田")
const she = new Japanese.Nagoya.Person("せやねん")
const you = new English.Person("石田","jr.","荒野")
console.log(me.name)
console.log(you)
console.log(she)