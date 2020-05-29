export{};

//static を記述すればインスタンス化させなくてもアクセスできる
class Me{
  static isProgrammer: boolean = true;
  static firstName: string = "koya";
  static lastName: string = "ishida";

  static work(){
    return `Hey ${this.firstName}  Typescript`
  }
}

//let me = new Me();
//console.log(me.isProgrammer)
console.log(Me.work())