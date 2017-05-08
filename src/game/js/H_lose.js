var loseState = {

	create: function() {

		game.add.sprite(0, 0, 'loseScreen');

		var startLabel = game.add.text(game.world.width/ 2 - 120, 10,
									   'klikkaa ruutua jatkaaksesi',
									   {font: '25px Arial', fill: '#ffffff'});

		game.input.onTap.add(this.restart, this);
	},

	restart: function() {
		game.state.start('menu');
	},
}