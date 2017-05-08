//Create a new game
var game = new Phaser.Game(720, 480, Phaser.AUTO, 'gameDiv');


//Add each state to game. 
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('level1', level1State);
game.state.add('level2', level2State);
game.state.add('level3', level3State);
game.state.add('win', winState);

// Start game
game.state.start('boot');