
var loadState = {


	preload: function() {
		var loadingLabel = game.add.text(80, 150, 'ladataan peliä...',
											{font: '30px Courier', fill: '#ffffff'});

		//Load game levels
		game.load.image('background1', 'assets/pictures/background1.png');
		game.load.image('background2', 'assets/pictures/background2.png');
		game.load.image('background3', 'assets/pictures/background3.png');

		game.load.image('backgroundMenu', 'assets/pictures/menu/menu.png');
		game.load.image('instructions', 'assets/pictures/menu/OHJEET.png');
		game.load.image('playGame', 'assets/pictures/menu/PELAA.png');
		game.load.image('information', 'assets/pictures/menu/TIETOA.png');
		
		//Load powerups
	    game.load.image('energyDrink', 'assets/pictures/möfö.png');
		game.load.image('SpeedSign', 'assets/pictures/nopeusmerkki.png');

		//Load potholes and create game character sprite
		game.load.image('pothole', 'assets/pictures/pothole.png');
		game.load.spritesheet('dude', 'assets/pictures/character.png', 32, 32);

		//Load different vehicles
	    game.load.image('car11', 'assets/pictures/cars/car1_1.png');
	    game.load.image('car12', 'assets/pictures/cars/car1_2.png');

	    game.load.image('car21', 'assets/pictures/cars/car2_1.png');
	    game.load.image('car22', 'assets/pictures/cars/car2_2.png');

	    game.load.image('car31', 'assets/pictures/cars/car3_1.png');
	    game.load.image('car32', 'assets/pictures/cars/car3_2.png');

	    game.load.image('car41', 'assets/pictures/cars/car4_1.png');
	    game.load.image('car42', 'assets/pictures/cars/car4_2.png');
		
		game.load.image('car51', 'assets/pictures/cars/car5_1.png');
	    game.load.image('car52', 'assets/pictures/cars/car5_2.png');

	    game.load.image('car61', 'assets/pictures/cars/car6_1.png');
	    game.load.image('car62', 'assets/pictures/cars/car6_2.png');

	    game.load.image('car71', 'assets/pictures/cars/car7_1.png');
	    game.load.image('car72', 'assets/pictures/cars/car7_2.png');

	    game.load.image('car81', 'assets/pictures/cars/car8_1.png');
	    game.load.image('car82', 'assets/pictures/cars/car8_2.png');

	},

	create: function() {
		game.state.start('menu')
	}
};


