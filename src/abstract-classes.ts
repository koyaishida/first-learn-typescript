export{};

//型定義のみ、実装は継承したクラスで行う
abstract class Animal{
  abstract cry():string
}

class Lion extends Animal{
  cry(){
    return "lion"
  }
}
class Tiger extends Animal{
  cry(){
    return "tiger"
  }
}