var menuState = {

	create: function() {

		game.add.sprite(0, 0, 'backgroundMenu');

		game.load.image(game.world.width / 2-95, 175, 'playGame' );
		game.load.image(game.world.width / 2-95, 250, 'instructions' );
		game.load.image(game.world.width / 2-95, 325, 'information' );

		buttonPlay = game.add.button(game.world.width / 2-95 , 175, 'playGame', this.start, this, 2, 1, 0);
		buttonInstructions = game.add.button(game.world.width / 2-95 , 250, 'instructions', this.help, this, 2, 1, 0);
		buttonInfo = game.add.button(game.world.width / 2-95 , 325, 'information', this.info, this, 2, 1, 0);

	},

	start: function() {
		game.state.start('level1');
	},

	help: function() {
		// game.state.start('level2');
	},

	info: function()  {
		// game.state.start('level3');
	},
	
}