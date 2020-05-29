export{};
// owner  所有者 初期化時に設定、変更不可 参照可能
// secretNumber 個人番号 初期化時に設定　途中で変更可能　参照不可能

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string,secretNUmber: number){
    this._owner = owner;
    this._secretNumber= secretNUmber;
  }
  get owner(){
    return this._owner
  }
  set secretNumber(secretNUmber: number){
    this._secretNumber = secretNUmber
  }
  
  debugPrint(){
    return `secretNUmber: ${this._secretNumber}`
  }
}

let card = new MyNumberCard("ishida",1234)

console.log(card.owner)
console.log(card.debugPrint())
//console.log(card._secretNumber)
card.secretNumber = 2222
console.log(card.debugPrint())
console.log(card.secretNumber)
