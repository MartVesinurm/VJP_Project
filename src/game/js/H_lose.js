var loseState = {

	create: function() {
		
		level1music.mute = true;
		level2music.mute = true;
		level3music.mute = true;
		winmusic.mute = true;
		
		losemusic = game.add.audio('lose');
		losemusic.play()
		
		var winLabel = game.add.text(89, 89, 'YOU LOST!',
									{font: '50px Arial', fill: '#00FF00'} );

		var startLabel = game.add.text(80, game.world.heigth-80,
									   'press the button to restart',
									   {font: '25px Arial', fill: '#ffffff'});
		potholesRepaired = 0;
		game.load.image(game.world.width / 2-95, 175, 'playGame' );
		buttonPlay = game.add.button(game.world.width / 2-95 , 175, 'playGame', this.restart, this, 2, 1, 0);
	},

	restart: function() {
		game.state.start('menu');
	},
}