export{};
interface Profile{
  name: string
  underTwenty: boolean;
  [index:string]: string | number | boolean
}
// How to write index signature
//{[index: typeForIndex]:typeForValue}
let profile:Profile= {name:"ham",underTwenty:false};
profile.name = "name"
profile.age = 2
profile.nationality = "japan"