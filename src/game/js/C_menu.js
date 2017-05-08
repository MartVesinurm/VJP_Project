var menuState = {

	create: function() {

		game.add.sprite(0, 0, 'backgroundMenu');

		game.load.image(game.world.width / 2-95, 175, 'playGame' );
		game.load.image(game.world.width / 2-95, 250, 'instructions' );
		game.load.image(game.world.width / 2-95, 325, 'information' );

		buttonPlay = game.add.button(game.world.width / 2-95 , 175, 'playGame', this.start, this, 2, 1, 0);
		buttonPlay = game.add.button(game.world.width / 2-95 , 250, 'instructions', this.start, this, 2, 1, 0);
		buttonPlay = game.add.button(game.world.width / 2-95 , 325, 'information', this.start, this, 2, 1, 0);

	},

	start: function() {
		game.state.start('level1');
	}
	
}