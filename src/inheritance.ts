export{};

class Animal {
  constructor(public name: string){}
  run ():string{
    return "i can run"
  }
}

class Lion extends Animal{
  public speed: number
  constructor(name: string,speed: number){
    super(name);

    this.speed = speed;
  }
  run():string{
    //親classのメソッドにアクセス
    const parent = super.run();
    return `${super.run()}${this.speed}km`
  }
}


// let animal = new Animal()
// console.log(animal.run())

// let lion = new Lion()
// console.log(lion.run())
// console.log(new Animal("mouse").run())
console.log(new Lion("lion",80).run())
