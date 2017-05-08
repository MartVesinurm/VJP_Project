var winState = {

	create: function() {
		var winLabel = game.add.text(89, 89, 'YOU WON!',
									{font: '50px Arial', fill: '#00FF00'} );

		var startLabel = game.add.text(80, game.world.heigth-80,
									   'press the "w" key to restart',
									   {font: '25px Arial', fill: '#ffffff'});

		var wkey = game.input.keyboard.addKey(Phaser.keyboard.W);
		wkey.onDown.addOnce(this.restart, this);
	},

	restart: function() {
		game.state.start('menu');
	},
}