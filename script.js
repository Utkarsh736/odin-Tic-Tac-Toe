const gameboard = (() => {
    const board = ['X','X','X','O','O','O','X','O','X'];
    return {board};
})();

const displayController = (() => {
    const add = (a,b)=>a+b;
    return{add};
})();


const players = (player) => {
    const message = () => console.log('hello');
    return {player, message};
};

const player1 = players('Rupert');



console.log(gameboard.board);