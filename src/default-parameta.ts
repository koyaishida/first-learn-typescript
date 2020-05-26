export {};

//型の直後に=でデフォルトの値が設定可能
const nextYearSalary = (currentSalary: number,rate: number= 1.5)=>{
  return currentSalary * rate
}

console.log(nextYearSalary(1000))