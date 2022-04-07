const gameboard = (() => {
    const add = (a,b)=>a+b;

    return {add};
})();

const game = (() => {
    const add = (a,b)=>a+b;
    return{add};
})();



console.log(`gameboard ${gameboard.add(3,5)}`);
console.log(`game: ${game.add(4,2)}`)