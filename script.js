// Closures
// .some()
// .every()
// Why return a copy of the board
// IIFEs
// Spend a few hours learning those concepts directly.
// Refactor a few parts of the project.


function createCounter() {
    let count=0;

    const getCount = () => count;
    const giveCount = () => {count++; };

    return {getCount, giveCount}

}

const counter = createCounter();
counter.giveCount();
counter.giveCount();

console.log({
    count: counter.getCount()
})





// function createUser() {
  

//   let reputation = 0;
//   const getReputation = () => reputation;
//   const giveReputation = () => { reputation++; };

//   return {  getReputation, giveReputation };
// }

// const josh = createUser();
// josh.giveReputation();
// josh.giveReputation();

// // logs { discordName: "@josh", reputation: 2 }
// console.log({
//     reputation: josh.getReputation()
// });
