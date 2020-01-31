//Генераторы

function* idMaker(){
  let index = 0;
  while(true)
    yield index++;
}

let gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
