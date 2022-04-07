const gameboard = (() => {
    const add = (a,b)=>a+b;

    return {add};
})();

const game = (() => {
    const add = (a,b)=>a+b;
    return{add};
})();


const players = (player) => {
    const message = () => console.log('hello');
    return {player, message};
};

const player1 = players('Rupert');



console.log(`gameboard ${gameboard.add(3,5)}`);
console.log(`game: ${game.add(4,2)}`);
console.log(player1.player);
player1.message();