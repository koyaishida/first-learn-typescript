export{};

class VisaCard {
  constructor(public readonly owner: string){
  }
}

let myVisaCard = new VisaCard("koya")

console.log(myVisaCard.owner)
//myVisaCard.owner = "rie"