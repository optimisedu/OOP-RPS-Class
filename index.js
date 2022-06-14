class Rps{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }
    play(){
        if(this.player1 === this.player2){
            console.log( 'draw');
        }
        if(this.player1 === 'rock'){
            if(this.player2 === 'scissors'){
                console.log( 'Player 1 wins');
            }
            else{
                console.log ('Player 2 wins');
            }
        }
        if(this.player1 === 'paper'){
            if(this.player2 === 'rock'){
                console.log('Player 1 wins');
            }
            else{
                console.log('Player 2 wins');
            }
        }
        if(this.player1 === 'scissors'){
            if(this.player2 === 'paper'){
                console.log('Player 1 wins');
            }
            else{
                console.log('Player 2 wins');
            }
        }
        init(){
           
        }

}
}

player 2 = Math.floor(Math.random() * 3) + 1 ;
console.log(random);
    new Rps('rock', 'scissors').play();
}
module.exports = Rps;

// newFunction();
// function newFunction() {
// for(let i = 0; i < 100; i++) {
//     const rps = ["rock", "paper", "scissors"];
//     let opOne = Math.floor(Math.random() * rps.length + 1);
//     let opTwo = Math.floor(Math.random() * rps.length + 1);
//     if (opOne != opTwo) {
//     console.log("game on")
//     }
//     else {
//     console.log("draw")
//     }
// }
// }

