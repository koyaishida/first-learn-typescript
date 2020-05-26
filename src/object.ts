export {};
//制約が甘い
let profile1:object = {name:"ham"}
profile1 = {number:1}

//新しいkeyの代入は不可能
let profile2:{
  name:string;
} = {name:"Ham"};

profile2 = {name:"Ishida"};
