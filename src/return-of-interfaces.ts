export{};

class MahoTsukai{}
class Soryo{}
//typescriptは継承できるクラスは１つのみ
//class Taro extends MahoTsukai,Soryo{}
class Taro extends MahoTsukai{}


//interfaceであれば、複数の継承が可能
interface Kenja{
  ionazun(): void;
}
interface Senshi{
  kougeki(): void;
}

class Jiro implements Kenja,Senshi{
  ionazun():void{
    console.log("ionazun")
  }
  kougeki():void{
    console.log("Kougeki")
  }
}

const jiro = new Jiro()
jiro.ionazun()
jiro.kougeki()