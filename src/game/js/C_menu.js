var menuState = {

	create: function() {
		
		menumusic = game.add.audio('menu_level')
		level1music = game.add.audio('level1');
		level2music = game.add.audio('level2');
		level3music = game.add.audio('level3');
		winmusic = game.add.audio('win');
		losemusic = game.add.audio('lose');
		
		
		menumusic = game.add.audio('level_menu');
		menumusic.loopFull()

		
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
		game.state.start('menuHelp');
	},

	info: function()  {
		game.state.start('menuCredits');
	},
	
}